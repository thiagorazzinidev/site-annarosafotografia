"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default for immediate engagement

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="divide-y divide-border-soft/70 border-t border-b border-border-soft/70">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="py-2 transition-colors">
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full py-5 flex justify-between items-center text-left gap-6 group"
              aria-expanded={isOpen}
            >
              <span className={`font-heading text-lg sm:text-xl font-light transition-colors ${
                isOpen ? "text-accent font-normal" : "text-primary-dark group-hover:text-accent"
              }`}>
                {item.question}
              </span>

              <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                isOpen 
                  ? "bg-accent text-canvas rotate-180" 
                  : "bg-surface text-muted group-hover:bg-accent/10 group-hover:text-accent"
              }`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-400 ease-in-out ${
                isOpen ? "max-h-72 opacity-100 pb-6" : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
