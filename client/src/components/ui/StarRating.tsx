import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  count: number;
  variant?: 'light' | 'dark';
}

export default function StarRating({ rating, count, variant = 'light' }: StarRatingProps) {
  const textColor = variant === 'dark' ? 'white' : 'var(--brand-navy)';
  const countColor = variant === 'dark' ? 'rgba(255,255,255,0.7)' : 'var(--text-mute)';

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            fill={star <= Math.round(rating) ? '#F59E0B' : 'none'}
            color="#F59E0B"
          />
        ))}
      </div>
      <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '14px', color: textColor }}>
        {rating}
      </span>
      {count > 0 && (
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '13px', color: countColor }}>
          ({count}+ reviews)
        </span>
      )}
    </div>
  );
}
