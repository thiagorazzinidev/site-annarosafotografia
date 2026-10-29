"use client";

import { useDisclosureStore, Disclosure, DisclosureContent } from "@ariakit/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function AccordionRow({ item, defaultOpen }: { item: FAQItem; defaultOpen: boolean }) {
  const disclosure = useDisclosureStore({ defaultOpen });
  const open = disclosure.useState("open");

  return (
    <div className="py-2 transition-colors">
      <Disclosure
        store={disclosure}
        className="w-full py-5 flex justify-between items-center text-left gap-6 group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary-dark rounded-sm"
      >
        <span
          className={`font-heading text-xl sm:text-2xl font-light transition-colors ${
            open ? "text-primary-dark font-normal" : "text-primary-dark/80 group-hover:text-primary-dark"
          }`}
        >
          {item.question}
        </span>

        <span className="w-8 h-8 rounded-md bg-canvas border border-border-soft/60 flex items-center justify-center flex-shrink-0 text-primary-dark transition-colors group-hover:border-primary-dark">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </Disclosure>

      <DisclosureContent store={disclosure} className="overflow-hidden transition-all duration-300 ease-in-out">
        <div className="pb-6 pt-2">
          <p className="font-body text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
            {item.answer}
          </p>
        </div>
      </DisclosureContent>
    </div>
  );
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-border-soft border-t border-b border-border-soft">
      {items.map((item, index) => (
        <AccordionRow key={index} item={item} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
