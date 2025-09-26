'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-lightGray py-4">
      <button
        className="flex w-full justify-between text-left font-medium text-darkGray"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {question}
        <FaChevronDown
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="mt-2 text-sm text-darkGray">{answer}</p>}
    </div>
  );
}
