export default function Logo({className="",size=40}:{className?:string;size?:number}){
  return(
    <svg role="img" aria-label="G.Travaux — logo" width={size} height={size} viewBox="0 0 48 48" className={className}>
      <rect x="2.5" y="2.5" width="43" height="43" rx="6"
        className="fill-brand-orange-600 stroke-brand-graphite-800" strokeWidth="2.5"/>
      <path className="fill-brand-black"
        d="M24 8a16 16 0 1 1 0 32c-8.837 0-16-7.163-16-16S15.163 8 24 8zm0 6a10 10 0 1 0 9.6 13.2H28a2 2 0 0 1-2-2v-3h11c.26 0 .4.02.4.02A10 10 0 0 0 24 14z"/>
    </svg>
  );
}