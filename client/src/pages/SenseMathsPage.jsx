

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
        <div className="services-band__visual" aria-hidden="true">
          <div className="services-band__panel">
            <p>{t("aboutPage.method2Kicker")}</p>
            <strong>{t("aboutPage.mottoLine1")}<br />{t("aboutPage.mottoLine2")}</strong>
          </div>
        </div>
        <div className="services-band__content">
          <p className="services-band__eyebrow">{t("aboutPage.method2HowTitle")}</p>
          <h2 id="sensemaths-band-title" className="services-band__title">
            {t("aboutPage.method2HowTitle")}
          </h2>
          <p className="services-band__copy">
            {t("aboutPage.method2Principle")}
          </p>
          <ul className="services-band__list">
            <li>{t("aboutPage.different2")}</li>
            <li>{t("aboutPage.different3")}</li>
            <li>{t("aboutPage.different4")}</li>
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
    </div>
  );
}

export default SenseMathsPage;