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
              style={{ borderBottom: index < items.length - 1 ? `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : '#E8EFF5'}` : 'none' }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between text-left"
                style={{
                  minHeight: '52px',
                  padding: '16px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  gap: '16px',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  color: isOpen ? 'var(--brand-cyan)' : (isDark ? 'white' : 'var(--brand-navy)'),
                  fontSize: '16px',
                  lineHeight: 1.4,
                  textTransform: 'none',
                  letterSpacing: '0',
                  transition: 'color 0.2s',
                }}>
                  {item.question}
                </span>
                <span style={{
                  flexShrink: 0,
                  color: 'var(--brand-cyan)',
                  transition: 'transform 0.2s',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                }}>
                  {isOpen ? <X size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {isOpen && (
                <div style={{ paddingBottom: '16px' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    color: isDark ? 'rgba(255,255,255,0.8)' : 'var(--ink-2)',
                    fontSize: '15px',
                    lineHeight: 1.7,
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
