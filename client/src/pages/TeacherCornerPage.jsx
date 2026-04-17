import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function TeacherCornerPage() {
  const { t } = useLanguage();
  return (
    <div className="page-stack teachers-corner-page">
      {/* ...existing code... */}
      {/* Teacher Corner Content Section */}
      <section className="services-band speakable-block" aria-labelledby="teacher-corner-title" style={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReadAloudButton text="Welcome to the Teacher's Corner. Try the interactive paint tool below!" />
        <div className="panel" style={{ width: '80%', height:'50%', maxWidth: '80%', minWidth: 0, margin: '2rem auto', borderRadius: '1.5rem', boxShadow: '0 10px 20px rgba(31,49,80,0.12)', padding: 0, position: 'static' }}>
          <iframe
            src="/example.html"
            title="Teacher Paint Tool"
            style={{ width: '100%', height: '70vh', minHeight: '340px', border: 'none', borderRadius: '1.5rem', background: '#16213a', display: 'block' }}
            aria-label="Interactive paint tool for teachers"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
}

export default TeacherCornerPage;
