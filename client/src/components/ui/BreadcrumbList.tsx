import { Link } from 'wouter';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbListProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbList({ items }: BreadcrumbListProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href ? { "item": `https://definitivemechanical.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb">
        <ol style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'center', listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {index > 0 && (
                <span style={{ color: '#C0D8F0', fontSize: '13px' }}>/</span>
              )}
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  style={{
                    fontFamily: 'Barlow, Arial, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    minHeight: '36px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#009EC6')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {item.label}
                </Link>
              ) : (
                <span style={{
                  fontFamily: 'Barlow, Arial, sans-serif',
                  fontWeight: 500,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.85)',
                  minHeight: '36px',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
