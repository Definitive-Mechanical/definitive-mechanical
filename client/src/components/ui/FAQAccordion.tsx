import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  schema?: boolean;
  variant?: 'light' | 'dark';
}

export default function FAQAccordion({ items, schema = false, variant = 'dark' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isDark = variant === 'dark';

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div>
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                borderBottom: index < items.length - 1
                  ? `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'var(--paper-3)'}`
                  : 'none',
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between text-left"
                style={{
                  minHeight: '56px',
                  padding: '18px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  gap: '16px',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  /* Playfair Display — title case, NO uppercase */
                  color: isOpen
                    ? 'var(--brand-blue)'
                    : (isDark ? '#fff' : 'var(--brand-black)'),
                  fontSize: '17px',
                  lineHeight: 1.35,
                  transition: 'color 180ms ease',
                }}>
                  {item.question}
                </span>
                <span style={{
                  flexShrink: 0,
                  color: 'var(--brand-blue)',
                  transition: 'transform 180ms ease',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                }}>
                  {isOpen ? <X size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {isOpen && (
                <div style={{ paddingBottom: '18px' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    color: isDark ? 'rgba(255,255,255,0.78)' : 'var(--ink-2)',
                    fontSize: '15px',
                    lineHeight: 1.75,
                  }}>
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
