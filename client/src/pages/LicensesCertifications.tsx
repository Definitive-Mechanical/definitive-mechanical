import { ShieldCheck, Award, KeyRound, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS, LICENSES, CERTIFICATIONS } from '@/lib/constants';
import BookNowButton from '@/components/ui/BookNowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import BreadcrumbList from '@/components/ui/BreadcrumbList';
import CTABanner from '@/components/ui/CTABanner';

export default function LicensesCertifications() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #003060 0%, #001830 100%)',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,158,198,0.05)', transform: 'skewY(-4deg)', transformOrigin: 'top left', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <BreadcrumbList items={[{ label: 'Home', href: '/' }, { label: 'Licenses & Certifications' }]} />
          <div style={{ marginTop: '24px', maxWidth: '700px' }}>
            <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#009EC6', marginBottom: '12px' }}>
              LICENSES & CERTIFICATIONS
            </p>
            <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, color: 'white', fontSize: 'clamp(26px, 4vw, 44px)', lineHeight: 1.15, marginBottom: '16px' }}>
              Definitive Mechanical Licenses & Certifications
            </h1>
            <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: 'rgba(255,255,255,0.85)', fontSize: '17px', lineHeight: 1.7, marginBottom: '32px' }}>
              Definitive Mechanical holds Master Plumber and Master Gasfitter licenses in Maryland, Washington DC, Virginia, and Delaware — simultaneously. No other local plumbing company in the DMV market holds this credential combination. We are also MDOT MBE Certified and Virginia SWaM Certified.
            </p>
            <BookNowButton variant="phone" text={`CALL ${BUSINESS.phone}`} href={`tel:${BUSINESS.phoneRaw}`} size="lg" />
          </div>
        </div>
      </section>

      {/* MARYLAND LICENSES */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="MARYLAND"
            heading="Maryland Plumbing & Contractor Licenses"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {LICENSES.maryland.map((lic) => (
              <div key={lic.number} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#F0F0F0', borderRadius: '4px', padding: '20px', borderLeft: '4px solid #009EC6' }}>
                <ShieldCheck size={22} color="#009EC6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '15px', marginBottom: '4px' }}>{lic.type}</p>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: '#484848', fontSize: '13px', marginBottom: '2px' }}>{lic.authority}</p>
                  <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, color: '#009EC6', fontSize: '13px', letterSpacing: '0.05em' }}>License #{lic.number}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Virginia */}
          <SectionHeading eyebrow="VIRGINIA" heading="Virginia Plumbing & Contractor Licenses" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {LICENSES.virginia.map((lic) => (
              <div key={lic.number} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#F0F0F0', borderRadius: '4px', padding: '20px', borderLeft: '4px solid #009EC6' }}>
                <ShieldCheck size={22} color="#009EC6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '15px', marginBottom: '4px' }}>{lic.type}</p>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: '#484848', fontSize: '13px', marginBottom: '2px' }}>{lic.authority}</p>
                  <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, color: '#009EC6', fontSize: '13px', letterSpacing: '0.05em' }}>License #{lic.number}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DC */}
          <SectionHeading eyebrow="WASHINGTON DC" heading="Washington DC Plumbing License" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {LICENSES.dc.map((lic) => (
              <div key={lic.number} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#F0F0F0', borderRadius: '4px', padding: '20px', borderLeft: '4px solid #009EC6' }}>
                <ShieldCheck size={22} color="#009EC6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '15px', marginBottom: '4px' }}>{lic.type}</p>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: '#484848', fontSize: '13px', marginBottom: '2px' }}>{lic.authority}</p>
                  <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, color: '#009EC6', fontSize: '13px', letterSpacing: '0.05em' }}>License #{lic.number}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Delaware */}
          <SectionHeading eyebrow="DELAWARE" heading="Delaware Plumbing License" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {LICENSES.delaware.map((lic) => (
              <div key={lic.number} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#F0F0F0', borderRadius: '4px', padding: '20px', borderLeft: '4px solid #009EC6' }}>
                <ShieldCheck size={22} color="#009EC6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '15px', marginBottom: '4px' }}>{lic.type}</p>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: '#484848', fontSize: '13px', marginBottom: '2px' }}>{lic.authority}</p>
                  <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, color: '#009EC6', fontSize: '13px', letterSpacing: '0.05em' }}>License #{lic.number}</p>
                </div>
              </div>
            ))}
          </div>

          {/* EPA */}
          <SectionHeading eyebrow="EPA CERTIFICATION" heading="EPA Universal 608 Certification" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LICENSES.epa.map((lic) => (
              <div key={lic.number} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#F0F0F0', borderRadius: '4px', padding: '20px', borderLeft: '4px solid #009EC6' }}>
                <ShieldCheck size={22} color="#009EC6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '15px', marginBottom: '4px' }}>{lic.type}</p>
                  <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: '#484848', fontSize: '13px', marginBottom: '2px' }}>{lic.authority}</p>
                  <p style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, color: '#009EC6', fontSize: '13px', letterSpacing: '0.05em' }}>Cert #{lic.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS CERTIFICATIONS */}
      <section style={{ background: '#003060', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="BUSINESS CERTIFICATIONS"
            heading="Government Contracting Certifications & Registrations"
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'MDOT MBE',
                lines: ['Maryland Department of Transportation', 'Minority Business Enterprise', `Cert No. ${CERTIFICATIONS.mdotMBE.certNo}`, 'NAICS: 238220 | SIC: 171'],
              },
              {
                icon: ShieldCheck,
                title: 'Virginia SWaM',
                lines: ['Virginia SBSD', 'Small, Women-owned & Minority Business', `Cert No. ${CERTIFICATIONS.swam.certNo}`],
              },
              {
                icon: KeyRound,
                title: 'CAGE Code',
                lines: ['Federal Contractor Registration', `CAGE: ${CERTIFICATIONS.cage}`, `NAICS: ${CERTIFICATIONS.naics}`, `SIC: ${CERTIFICATIONS.sic}`],
              },
              {
                icon: FileText,
                title: 'EPA 608',
                lines: ['Universal EPA 608 Certification', 'U.S. Environmental Protection Agency', `Cert #${LICENSES.epa[0].number}`],
              },
            ].map((cert) => (
              <div key={cert.title} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '28px', textAlign: 'center' }}>
                <cert.icon size={32} color="#009EC6" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Barlow Condensed, Arial, sans-serif', fontWeight: 700, color: 'white', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>{cert.title}</h3>
                {cert.lines.map((line) => (
                  <p key={line} style={{ fontFamily: 'Barlow, Arial, sans-serif', color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.6 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ background: '#F0F0F0', padding: '80px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WHY LICENSING MATTERS"
            heading="Why does it matter that your plumber is licensed in the right jurisdiction?"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Code Compliance', body: 'Licensed plumbers are required to perform work to code. Unlicensed work may not pass inspection, can void insurance, and can create liability for property owners.' },
              { icon: CheckCircle2, title: 'Jurisdiction Matters', body: 'A Maryland plumbing license does not authorize work in DC or Virginia. Definitive Mechanical holds active licenses in all three jurisdictions simultaneously.' },
              { icon: Award, title: 'Master Plumber vs. Journeyman', body: 'A Master Plumber license requires years of additional experience and examination beyond a journeyman license. Every Definitive Mechanical job is handled by a licensed Master Plumber.' },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: 'center', padding: '16px' }}>
                <item.icon size={40} color="#009EC6" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontFamily: 'Barlow, Arial, sans-serif', fontWeight: 700, color: '#003060', fontSize: '16px', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'Barlow, Arial, sans-serif', color: '#484848', fontSize: '14px', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Questions about our licenses or certifications?"
        subtext="Call us or request our capability statement. We are happy to provide documentation for any project requirement."
        primaryBtn={{ text: `CALL ${BUSINESS.phone}`, href: `tel:${BUSINESS.phoneRaw}` }}
        secondaryBtn={{ text: 'REQUEST CAPABILITY STATEMENT', href: '/contact' }}
        variant="gradient"
      />
    </>
  );
}
