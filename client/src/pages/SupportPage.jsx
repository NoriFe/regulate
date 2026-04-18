import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";
import picture1 from "../assets/images/picture1.png";

function SupportPage() {
  const { t } = useLanguage();


  return (
    <div className="page-stack services-page">
      <section className="services-hero speakable-block" aria-labelledby="services-hero-eyebrow" style={{margin: '0.25rem 0'}}>
        <ReadAloudButton text={t("supportPage.read")} />
        <div className="services-hero__content">
          <p id="services-hero-eyebrow" className="services-hero__eyebrow">{t("supportPage.heroEyebrow")}</p>
          <p className="services-hero__copy">{t("supportPage.heroCopy")}</p>
          <div className="services-chip-row" aria-label={t("supportPage.heroEyebrow")}> 
            <span className="services-chip">{t("supportPage.chip1")}</span>
            <span className="services-chip">{t("supportPage.chip2")}</span>
            <span className="services-chip">{t("supportPage.chip3")}</span>
            <span className="services-chip">{t("supportPage.chip4")}</span>
            <span className="services-chip">{t("supportPage.chip5")}</span>
          </div>
        </div>
        <div className="services-hero__visual" aria-hidden="true" style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: 0, margin: 0, width: '100%', height: '100%'}}>
          <img
            src={picture1}
            alt=""
            style={{
              width: '100%',
              height:  'auto',
              maxWidth: '360px',
              maxHeight: '460px',
              borderTopRightRadius: '2.5rem',
              borderBottomRightRadius: '2.5rem',
              WebkitMaskImage: 'linear-gradient(to left, black 90%, transparent 100%)',
              maskImage: 'linear-gradient(to left, black 80%, transparent 100%)',
            }}
          />
        </div>
      </section>

      <section className="services-intro speakable-block" aria-labelledby="services-intro-title" style={{margin: '0.25rem 0'}}>
        <ReadAloudButton text="About Regulate2Learn. Regulate2Learn was created for children and adults who don’t fit the 'typical' mould — the neurodivergent, the overwhelmed, the shy, the sensory‑sensitive, the burnt‑out, the misunderstood. I support children, parents, and teachers through a regulation‑first approach that respects the nervous system and the human behind it." />
        <div className="services-intro__content">
          <p className="services-intro__eyebrow">{t("supportPage.kicker")}</p>
          <h1 id="services-intro-title" className="services-intro__title" style={{fontSize: '2rem', lineHeight: 1.14}}>Regulation‑based 1:1 tutoring, available both in person and online</h1>
          <p style={{marginTop:5}}>
            For neurodivergent children: ADHD, autism, sensory needs, anxiety, shutdowns, overwhelm.
Curriculum support through RRE + SenseMaths.
Focus: regulation, confidence, connection and learning that sticks.
          </p>
        </div>
      </section>

      <section id="services-details" className="services-band speakable-block" aria-labelledby="services-band-title" style={{margin: '0.25rem 0'}}>
        <ReadAloudButton text={t("supportPage.bandCopy")} />
        <div className="services-band__content">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'stretch'}}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'stretch', height: '100%'}}>
              <h2 style={{margin: 0, fontSize: '2rem', lineHeight: 1.14}}>Parent Support & Coaching</h2>
              <p>Clear, practical support for behaviour, regulation, and learning at home. Understand your child’s nervous system. Reduce overwhelm. Build connection.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'stretch', height: '100%'}}>
              <h2 style={{margin: 0, fontSize: '2rem', lineHeight: 1.14}}>Teacher Support </h2>
              <p>Regulation‑first teaching strategies. Sensory‑friendly classroom adjustments. Scripts for tricky moments. Support for overwhelm and masking. Confidence‑building for teachers who don’t fit the stereotype.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New 4-column section */}
      <section
        className="services-band services-band--3col speakable-block"
        aria-label="Specialist Sessions"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(0, 105, 126, 0.38), transparent 34%), ' +
            'radial-gradient(circle at 74% 62%, rgba(249, 147, 120, 0.26), transparent 26%), ' +
            'linear-gradient(135deg, rgba(247, 232, 213, 0.04), rgba(0, 27, 38, 0.82))',
          borderRadius: '1.2rem',
          padding: '2.5rem 2.5rem',
          margin: '0.25rem 0',
        }}
      >
        <div className="services-band__content">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5rem', alignItems: 'stretch'}}>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
              <h3 style={{margin: 0, fontSize: '2rem', lineHeight: 1.14}}>Behaviour Understanding Sessions</h3>
              <p style={{margin: '0.5rem 0 0 0'}}>For parents and teachers who want to understand:<br/>shutdowns, meltdowns, fidgeting, avoidance, talking back, masking, transitions, overwhelm.</p>
              <p style={{margin: '0.5rem 0 0 0' }}>Behaviour is communication.<br/>I help you understand what it’s saying.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
              <h3 style={{margin: 0, fontSize: '2rem', lineHeight: 1.14}}>SenseMaths Sessions</h3>
              <p style={{margin: '0.5rem 0 0 0'}}>Maths support for neurodivergent learners using sensory‑based, relational, regulation‑first methods.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
              <h3 style={{margin: 0, fontSize: '2rem', lineHeight: 1.14}}>Curriculum Support Across Subjects</h3>
              <p style={{margin: '0.5rem 0 0 0'}}>Reading, writing, maths and general learning support - always through a regulation‑first lens.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta speakable-block" aria-labelledby="services-cta-title" style={{margin: '0.25rem 0'}}>
        <ReadAloudButton text={t("supportPage.ctaCopy")} />
        <div className="services-cta__content">
          <p className="services-cta__eyebrow">{t("supportPage.ctaEyebrow")}</p>
          <h2 id="services-cta-title" className="services-cta__title">
            {t("supportPage.ctaTitle")}
          </h2>
          <p className="services-cta__copy">{t("supportPage.ctaCopy")}</p>
          <a href="/contact" className="services-cta__button">
            {t("supportPage.ctaButton")}
          </a>
        </div>
      </section>

      {/* Pricing Section as Cards */}
      <section className="pricing-container speakable-block" aria-labelledby="pricing-title" style={{
        margin: '0.25rem 0',
        background: 'radial-gradient(circle at 30% 20%, rgba(0, 105, 126, 0.38), transparent 34%), radial-gradient(circle at 74% 62%, rgba(249, 147, 120, 0.26), transparent 26%), linear-gradient(135deg, rgba(247, 232, 213, 0.04), rgba(0, 27, 38, 0.82))',
        borderRadius: '1.2rem',
        padding: '2.5rem 2.5rem',
        color: '#f7e8d5'
      }}>
        <h2 id="pricing-title" style={{fontSize: '2.2rem', marginBottom: '1.2rem'}}>Pricing</h2>
        <p style={{marginBottom: '2.2rem'}}>At Regulate2Learn, pricing reflects the depth of support offered to neurodivergent and neurotypical children, parents and educators. Every session is regulation‑first, sensory-aware and grounded in compassion - never pressure.</p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2.5rem', marginBottom: '2.5rem'}}>
          {/* Card 1 */}
          <div style={{background: 'rgba(249,147,120,0.13)', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <h3 style={{margin: 0, fontSize: '1.25rem'}}>Regulation‑Based Tutoring (1:1)</h3>
            <div style={{fontWeight: 600, fontSize: '1.1rem', margin: '0.5rem 0'}}>£40-£70 per hour</div>
            <div style={{fontSize: '0.98rem'}}>Support for autistic, ADHD, anxious, sensory‑sensitive, overwhelmed or shutdown‑prone learners.<br />Includes RRE‑based curriculum support and SenseMaths.<br />Focus: regulation, confidence, connection, and learning that sticks.</div>
          </div>
          {/* Card 2 */}
          <div style={{background: 'rgba(249,147,120,0.13)', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <h3 style={{margin: 0, fontSize: '1.25rem'}}>Parent Support & Coaching</h3>
            <div style={{fontWeight: 600, fontSize: '1.1rem', margin: '0.5rem 0'}}>£45-£80 per hour</div>
            <div style={{fontSize: '0.98rem'}}>Gentle, practical guidance for behaviour, regulation and learning at home.<br />Understand your child’s nervous system, reduce overwhelm and build connection.</div>
          </div>
          {/* Card 3 */}
          <div style={{background: 'rgba(249,147,120,0.13)', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <h3 style={{margin: 0, fontSize: '1.25rem'}}>Teacher Support (neurodivergent teachers)</h3>
            <div style={{fontWeight: 600, fontSize: '1.1rem', margin: '0.5rem 0'}}>£40-£75 per hour</div>
            <div style={{fontSize: '0.98rem'}}>Regulation‑first teaching strategies, sensory‑friendly adjustments, scripts for tricky moments, and confidence‑building for teachers who don’t fit the stereotype.</div>
          </div>
          {/* Card 4 */}
          <div style={{background: 'rgba(249,147,120,0.13)', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <h3 style={{margin: 0, fontSize: '1.25rem'}}>Behaviour Understanding Sessions</h3>
            <div style={{fontWeight: 600, fontSize: '1.1rem', margin: '0.5rem 0'}}>£45-£85 per hour</div>
            <div style={{fontSize: '0.98rem'}}>For parents and teachers who want to understand shutdowns, meltdowns, fidgeting, avoidance, talking back, masking, transitions and overwhelm.<br />Behaviour is communication - we decode what it’s saying.</div>
          </div>
          {/* Card 5 */}
          <div style={{background: 'rgba(249,147,120,0.13)', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)'}}>
            <h3 style={{margin: 0, fontSize: '1.25rem'}}>SenseMaths Sessions</h3>
            <div style={{fontWeight: 600, fontSize: '1.1rem', margin: '0.5rem 0'}}>£35-£65 per hour</div>
            <div style={{fontSize: '0.98rem'}}>Maths support for neurodivergent learners using sensory‑based, relational, regulation‑first methods.</div>
          </div>
          {/* Card 6 */}
          <div style={{background: 'rgba(249,147,120,0.13)', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: '2px solid #c995a4'}}>
            <h3 style={{margin: 0, fontSize: '1.25rem'}}>Curriculum Support Across Subjects</h3>
            <div style={{fontWeight: 600, fontSize: '1.1rem', margin: '0.5rem 0'}}>£30-£55 per hour</div>
            <div style={{fontSize: '0.98rem'}}>Reading, writing, maths and general learning support - always through a regulation‑first lens.</div>
          </div>
        </div>
        <h3 style={{fontSize: '1.3rem'}}>What’s Included in Every Session</h3>
        <ul style={{marginBottom: 0, paddingLeft: '1.2rem', fontSize: '1.05rem', listStyle: 'none', paddingInlineStart: 0}}>
          <li>Regulation‑first approach</li>
          <li>Sensory‑aware strategies</li>
          <li>Connection‑based teaching</li>
          <li>Personalised adjustments</li>
          <li>Calm, compassionate support</li>
          <li>Optional follow‑up notes (service‑dependent)</li>
        </ul>
      </section>
    </div>
  );
}

export default SupportPage;
