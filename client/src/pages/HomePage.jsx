import { Link } from "react-router-dom";
import ReadAloudButton from "../components/ReadAloudButton";
import { visibility } from "../config/visibility";
import { useLanguage } from "../context/LanguageContext";
import picture2 from "../assets/images/picture2.png";
import backgroundImage from "../assets/images/background.jpeg";

function HomePage() {
        <div className="r2l-two-col-layout" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '1200px', margin: '2rem auto'}}>
          <div>
            {/* Left column content goes here */}
          </div>
          <div>
            {/* Right column content goes here */}
          </div>
        </div>
  const { t } = useLanguage();

  const aboutIntroRead = [
    t("aboutPage.kicker"),
    t("aboutPage.title"),
    t("aboutPage.lead"),
    t("aboutPage.mottoLabel"),
    t("aboutPage.mottoLine1"),
    t("aboutPage.mottoLine2"),
  ].join(" ");

  const combinedIntroRead = [
    aboutIntroRead,
    t("home.heroRead"),
  ].join(" ");

  const combinedHeroParagraph = [
    t("aboutPage.lead"),
    t("home.heroTitle"),
    t("home.heroCopy"),
  ].join(" ");

  return (
   
      <div className="page-stack about-page home-page">
      <div className="home-hero-bleed">
  <img src={backgroundImage} alt="" aria-hidden="true" className="home-hero-bleed__img" />
  <div className="home-hero-bleed__fade" />
</div>

<div className="home-hero-spacer" aria-hidden="true" /><br/><br/><br/><br/>

<div className="home-hero-sub">
  <p className="home-hero-sub__text">
    
  </p>
</div>
     

      
      

      <section className="about-motto-section" aria-label="Guiding Motto">
  <div className="about-motto-section__content">
    <p className="section-eyebrow section-eyebrow--soft">WELCOME</p>
    <h2 className="page-title page-title--compact about-motto-section__title">
      Supporting neurodiverse children, parents and educators - so every child can feel calm, connected and ready to learn.
    </h2>
    
    <h2 className="page-title page-title--compact about-motto-section__title">
      
    </h2>
  </div>
</section>


      {visibility.homeFrameworkSection && (
      <section className="about-block speakable-block" aria-labelledby="framework-title">
        <ReadAloudButton
          text={t("home.frameworkRead")}
        />
        <p className="section-eyebrow section-eyebrow--soft">
          {t("home.frameworkEyebrow")}
        </p>
        <h2 id="framework-title" className="page-title page-title--compact">
          {t("home.frameworkTitle")}
        </h2>
        <p className="page-copy">
          {t("home.frameworkCopy")}
        </p>
        <Link to="/framework" className="btn btn--secondary btn--sm">
          {t("home.frameworkReadMore")}
        </Link>
      </section>
      )}

      <section className="about-block speakable-block home-methods-wrap" aria-labelledby="methods-title">
        <ReadAloudButton
          text={t("home.methodsRead")}
        />
        <p className="section-eyebrow section-eyebrow--soft">
          {t("home.methodsEyebrow")}
        </p>
        <p id="methods-title" className="page-copy home-methods-copy" style={{fontSize: '1.35rem'}}>
          {t("home.methodsCopy").split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              {idx !== t("home.methodsCopy").split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        <div className="home-dual-grid home-methods-grid">
          <section className="about-method-section speakable-block rre-section" aria-labelledby="rre-title">
          <ReadAloudButton
            text={`${t("aboutPage.method1Kicker")}. ${t("aboutPage.method1Title")}. ${t("aboutPage.method1Copy")}`}
          />
          <h2 id="rre-title" className="page-title page-title--compact" style={{fontSize: '1.15rem'}}>
            {t("aboutPage.method1Title")}
          </h2>
          <p className="page-copy">
            {t("aboutPage.method1Copy")}
          </p>
          <Link to="/rre" className="btn btn--secondary btn--sm">
            {t("home.rreReadMore")}
          </Link>
          </section>

          <section className="about-method-section speakable-block" aria-labelledby="sensemaths-title">
          <ReadAloudButton
            text={`${t("aboutPage.method2Kicker")}. ${t("aboutPage.method2Title")}. ${t("aboutPage.method2Copy")}`}
          />
          <h2 id="sensemaths-title" className="page-title page-title--compact" style={{fontSize: '1.15rem'}}>
            {t("aboutPage.method2Title")}
          </h2>
          <p className="page-copy">
            {t("aboutPage.method2Copy")}
          </p>
          <Link to="/sensemaths" className="btn btn--secondary btn--sm">
            {t("home.senseMathsReadMore")}
          </Link>
          </section>
        </div>
      </section>

      <section className="about-block speakable-block home-support-wrap" aria-labelledby="support-title">
        <p className="section-eyebrow section-eyebrow--soft">
          {t("home.supportEyebrow")}
        </p>

        <div id="support-title" className="home-support-grid">
        <div className="about-block speakable-block">
          <ReadAloudButton
            text={t("home.learnersRead")}
          />
          <h2 className="page-title page-title--compact">
            {t("home.learnersTitle")}
          </h2>
          <p className="page-copy">
            {t("home.learnersCopy")}
          </p>
        </div>

        <div className="about-block speakable-block">
          <ReadAloudButton
            text={t("home.guardiansRead")}
          />
          <h2 className="page-title page-title--compact">
            {t("home.guardiansTitle")}
          </h2>
          <p className="page-copy">
            {t("home.guardiansCopy")}
          </p>
        </div>

        <div className="about-block speakable-block">
          <ReadAloudButton
            text={t("home.educatorsRead")}
          />
          <h2 className="page-title page-title--compact">
            {t("home.educatorsTitle")}
          </h2>
          <p className="page-copy">
            {t("home.educatorsCopy")}
          </p>
        </div>

        </div>
      </section>

      <div className="about-block speakable-block home-moved-before-start" aria-label={t("home.beforeStartEyebrow")}> 
        <ReadAloudButton
          text={t("home.beforeStartRead")}
        />
        <div className="home-before-start__layout">
          <div className="home-before-start__content">
            <p className="section-eyebrow section-eyebrow--soft">
              {t("home.beforeStartEyebrow")}
            </p>
            <p className="page-copy">
              {t("home.beforeStartCopy")}
            </p>
          </div>
          <img className="home-before-start__visual-image" src={picture2} alt="Neurodivergent-friendly, regulation-based learning visual for RRE™ and SenseMaths™ support" />
        </div>
      </div>
    </div>
    
  );
}

export default HomePage;
