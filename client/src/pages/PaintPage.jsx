import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function PaintPage() {
  const { t } = useLanguage();
  return (
    <div className="page-stack paint-page">
      {/* Paint Content Section */}
      <section
        className="services-band speakable-block paint-no-radius-bg"
        aria-labelledby="paint-title"
        style={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 0, background: 'none' }}
      >
        {/* ReadAloudButton removed as requested */}
        <div className="panel" style={{ width: '100%', height:'100%', maxWidth: '80%', minWidth: 0, margin: '2rem auto', borderRadius: '1.5rem', boxShadow: '0 10px 20px rgba(31,49,80,0.12)', padding: 0, position: 'static' }}>
          <iframe
            src="/example.html"
            title="Paint Tool"
            style={{ width: '100%', height: '70vh', minHeight: '340px', border: 'none', borderRadius: '0', background: '#16213a', display: 'block' }}
            aria-label="Interactive paint tool"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
      {/* Back to Calm Corner button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '2.5rem 0 0 0' }}>
        <a href="/calm-corner" className="back-home-btn" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', padding: '0.7em 2.5em', borderRadius: '2em', background: '#c995a4', color: '#15263f', boxShadow: '0 2px 12px rgba(201, 149, 164, 0.12)', transition: 'background 0.2s, box-shadow 0.2s' }}>
          Back to Calm Corner
        </a>
      </div>
    </div>
  );
}

export default PaintPage;
