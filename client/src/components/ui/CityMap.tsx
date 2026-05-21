/**
 * CityMap — Embeds a Google Maps iframe centered on the given city/neighborhood.
 * Uses the free Google Maps embed URL (no API key required).
 *
 * Design: dark navy section with a branded header, full-width map with rounded corners.
 */

interface CityMapProps {
  /** The city/neighborhood search query, e.g. "Bethesda, MD" or "Capitol Hill, Washington DC" */
  q: string;
  /** Display label shown above the map, e.g. "Bethesda, MD Service Area" */
  label?: string;
  /** Map zoom level 1–21, default 13 */
  zoom?: number;
}

export default function CityMap({ q, label, zoom = 13 }: CityMapProps) {
  const encodedQ = encodeURIComponent(q);
  const src = `https://maps.google.com/maps?q=${encodedQ}&z=${zoom}&output=embed&iwloc=near`;

  return (
    <section style={{ background: "#FAFBFC", padding: "60px 0 0" }}>
      <div className="container">
        {/* Section header */}
        <div style={{ marginBottom: "24px" }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--brand-cyan)",
            marginBottom: "8px",
          }}>
            SERVICE AREA MAP
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(20px,2.5vw,28px)",
            textTransform: "uppercase",
            color: "#0A0A0A",
            lineHeight: 1.1,
            margin: 0,
          }}>
            {label || `${q} — Definitive Mechanical Service Area`}
          </h2>
          <p style={{
            fontFamily: "var(--font-body)",
            color: "#4A5560",
            fontSize: "14px",
            lineHeight: 1.6,
            marginTop: "8px",
            maxWidth: "560px",
          }}>
            Serving {q} from our Largo, MD location. Licensed Master Plumber in Maryland, Washington DC, and Virginia. Call <a href="tel:+13016795849" style={{ color: "var(--brand-blue)", fontWeight: 600, textDecoration: "none" }}>(301) 679-5849</a> for same-day service.
          </p>
        </div>

        {/* Map embed */}
        <div style={{
          borderRadius: "6px",
          overflow: "hidden",
          border: "1px solid #E6E8EE",
          boxShadow: "0 4px 20px rgba(6,59,99,0.10)",
          position: "relative",
        }}>
          <iframe
            title={`Map of ${q}`}
            src={src}
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "20px 0 60px",
          borderTop: "1px solid #E6E8EE",
          marginTop: "20px",
        }}>
          <p style={{ fontFamily: "var(--font-body)", color: "#4A5560", fontSize: "14px", margin: 0 }}>
            Dispatching to {q} 24/7 — live dispatcher answers every call.
          </p>
          <a
            href="tel:+13016795849"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--brand-blue)",
              color: "white",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              padding: "12px 24px",
              borderRadius: "3px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            CALL (301) 679-5849
          </a>
        </div>
      </div>
    </section>
  );
}
