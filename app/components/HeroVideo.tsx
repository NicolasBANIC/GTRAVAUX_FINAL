'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

interface HeroVideoProps {
  videoSrc: string | string[];
  fallbackImage?: string;
  className?: string;
  title: string;
  poster?: string;
}

const BASE_MEDIA_CLASSES = 'absolute inset-0 size-full object-cover';

export default function HeroVideo({
  videoSrc,
  fallbackImage,
  className = '',
  title,
  poster,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sources = useMemo(() => {
    const list = Array.isArray(videoSrc) ? videoSrc : [videoSrc];
    return list.filter((src): src is string => Boolean(src));
  }, [videoSrc]);

  const sourcesKey = useMemo(() => sources.join('|'), [sources]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [sourcesKey]);

  const currentSource = sources[currentIndex] ?? '';

  useEffect(() => {
    setHasError(false);
    setShowFallback(false);
  }, [currentSource]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentSource) {
      return undefined;
    }

    video.src = currentSource;

    const fallbackTimer = window.setTimeout(() => {
      if (video.readyState < 2) {
        setShowFallback(true);
      }
    }, 3000);

    const handleError = () => {
      window.clearTimeout(fallbackTimer);
      setHasError(true);
      setShowFallback(true);
    };

    const handleCanPlay = () => {
      window.clearTimeout(fallbackTimer);
      setShowFallback(false);
    };

    const handleLoadedData = () => {
      window.clearTimeout(fallbackTimer);
      setShowFallback(false);
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {});
      }
    };

    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);

    const applyPlaybackRate = () => {
      video.playbackRate = 0.85;
    };

    video.addEventListener('loadedmetadata', applyPlaybackRate);

    video.load();
    const playPromise = video.play();
    if (playPromise) {
      playPromise
        .then(() => {
          applyPlaybackRate();
        })
        .catch(() => {});
    } else {
      applyPlaybackRate();
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('loadedmetadata', applyPlaybackRate);
    };
  }, [currentSource]);

  const handleVideoEnded = () => {
    if (sources.length <= 1) {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise) {
          playPromise.catch(() => {});
        }
      }
      return;
    }

    setCurrentIndex((prevIndex) => (prevIndex + 1) % sources.length);
  };

  if (!sources.length) {
    if (fallbackImage) {
      return (
        <Image
          src={fallbackImage}
          alt={title}
          fill
          className={`${BASE_MEDIA_CLASSES} ${className}`}
          priority
        />
      );
    }

    return null;
  }

  if (hasError && fallbackImage) {
    return (
      <Image
        src={fallbackImage}
        alt={title}
        fill
        className={`${BASE_MEDIA_CLASSES} ${className}`}
        priority
      />
    );
  }

  return (
    <>
      {showFallback && fallbackImage && (
        <Image
          src={fallbackImage}
          alt={title}
          fill
          className={`${BASE_MEDIA_CLASSES} ${className} transition-opacity duration-500`}
          priority
        />
      )}
      <video
        ref={videoRef}
        src={currentSource}
        poster={poster}
        autoPlay
        muted
        playsInline
        loop={sources.length === 1}
        preload="metadata"
        className={`${BASE_MEDIA_CLASSES} ${className}`}
        onError={() => {
          setHasError(true);
          setShowFallback(true);
        }}
        onEnded={handleVideoEnded}
      />
    </>
  );
}
