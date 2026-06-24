import { useState, type ReactNode } from 'react';
import { Plus, Minus } from 'lucide-react';

type AccordionItem = {
  title: string;
  body: ReactNode;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-gray-50 sm:gap-4 sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className="font-display text-sm font-semibold text-darkblue sm:text-base">
                {item.title}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                  isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-primary'
                }`}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 text-sm leading-relaxed text-gray-600 sm:px-6 sm:pb-5">
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
