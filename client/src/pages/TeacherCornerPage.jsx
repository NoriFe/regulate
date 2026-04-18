import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function PaintPage() {
  const { t } = useLanguage();
  return (
    <div className="page-stack paint-page">
      {/* Paint Content Section */}
      <section className="services-band speakable-block" aria-labelledby="paint-title" style={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReadAloudButton text="Welcome to Paint. Try the interactive paint tool below!" />
        <div className="panel" style={{ width: '80%', height:'50%', maxWidth: '80%', minWidth: 0, margin: '2rem auto', borderRadius: '1.5rem', boxShadow: '0 10px 20px rgba(31,49,80,0.12)', padding: 0, position: 'static' }}>
          <iframe
            src="/example.html"
            title="Paint Tool"
            style={{ width: '100%', height: '70vh', minHeight: '340px', border: 'none', borderRadius: '1.5rem', background: '#16213a', display: 'block' }}
            aria-label="Interactive paint tool"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}

export default PaintPage;
