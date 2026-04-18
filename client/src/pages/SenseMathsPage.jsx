


import { Link } from "react-router-dom";
import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function SenseMathsPage() {
  const { t } = useLanguage();

  return (
    <div className="page-stack services-page">
      <section className="services-intro speakable-block" aria-labelledby="sensemaths-intro-title">
        <ReadAloudButton text={t("aboutPage.method2Read")} />
        <div className="services-intro__content">
          <p className="services-intro__eyebrow">{t("aboutPage.method2Kicker")}</p>
          <h1 id="sensemaths-intro-title" className="services-intro__title">
            {t("aboutPage.method2Title")}
          </h1>
          <p id="sensemaths-hero-eyebrow" className="services-hero__eyebrow">
            {t("aboutPage.method2Copy")}
          </p>
          <p className="services-hero__copy">
            {t("aboutPage.method2Principle")}
          </p>
        </div>
      </section>

      <section id="sensemaths-details" className="services-band speakable-block" aria-labelledby="sensemaths-band-title">
        <ReadAloudButton text={t("aboutPage.method2HowTitle") + ". " + t("aboutPage.method2Principle") } />
        <div className="sensemaths-details__content">
          <p className="services-band__eyebrow">{t("aboutPage.method2HowTitle")}</p>
          <h2 id="sensemaths-band-title" className="services-band__title">
            {t("aboutPage.method2HowTitle")}
          </h2>
          <p className="services-band__copy">
            {t("aboutPage.method2Principle")}
          </p>
          <div style={{ fontWeight: 700, fontSize: '1.13rem', margin: '1.1rem 0 0.7rem 0', color: '#c995a4' }}>
            {t("aboutPage.differentTitle")}
          </div>
          <ul className="services-band__list">
            <li>{t("aboutPage.different1")}</li>
            <li>{t("aboutPage.different2")}</li>
            <li>{t("aboutPage.different3")}</li>
            <li>{t("aboutPage.different4")}</li>
            <li>{t("aboutPage.different5")}</li>
          </ul>
        </div>
      </section>

      <section className="services-cta speakable-block" aria-labelledby="sensemaths-cta-title">
        <ReadAloudButton text={t("aboutPage.outcomeCopy")} />
        <div className="services-cta__content">
          <p className="services-cta__eyebrow">{t("aboutPage.outcomeTitle")}</p>
          <h2 id="sensemaths-cta-title" className="services-cta__title">
            {t("aboutPage.outcomeTitle")}
          </h2>
          <p className="services-cta__copy">
            {t("aboutPage.outcomeCopy")}
          </p>
          <a href="/contact" className="services-cta__button">
            {t("contact.ctaButton") || "Get in Touch"}
          </a>
        </div>
      </section>
      {/* Centered Back Button */}
      <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
        <Link to="/main" className="back-home-btn">Back</Link>
      </div>
    </div>
  );
}

export default SenseMathsPage;