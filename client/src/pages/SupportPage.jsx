import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";
import picture1 from "../assets/images/picture1.png";

function SupportPage() {
  const { t } = useLanguage();

  return (
    <div className="page-stack services-page">
      <section className="services-intro speakable-block" aria-labelledby="services-intro-title">
        <ReadAloudButton text={t("supportPage.read")} />
        <div className="services-intro__content">
          <p className="services-intro__eyebrow">{t("supportPage.kicker")}</p>
          <h1 id="services-intro-title" className="services-intro__title">
            {t("supportPage.heroTitle")}
          </h1>
        </div>
      </section>

      <section className="services-hero speakable-block" aria-labelledby="services-hero-eyebrow">
        <ReadAloudButton text={t("supportPage.read")} />

        <div className="services-hero__content">
          <p id="services-hero-eyebrow" className="services-hero__eyebrow">
            {t("supportPage.heroEyebrow")}
          </p>
          <p className="services-hero__copy">{t("supportPage.heroCopy")}</p>

          <div className="services-chip-row" aria-label={t("supportPage.heroEyebrow")}>
            <span className="services-chip">{t("supportPage.chip1")}</span>
            <span className="services-chip">{t("supportPage.chip2")}</span>
            <span className="services-chip">{t("supportPage.chip3")}</span>
            <span className="services-chip">{t("supportPage.chip4")}</span>
            <span className="services-chip">{t("supportPage.chip5")}</span>
          </div>
        </div>

        <div className="services-hero__visual" aria-hidden="true">
          <img className="services-hero__image" src={picture1} alt="" />
        </div>
      </section>

      <section id="services-details" className="services-band speakable-block" aria-labelledby="services-band-title">
        <ReadAloudButton text={t("supportPage.bandCopy")} />

        <div className="services-band__visual" aria-hidden="true">
          <div className="services-band__panel">
            <p>{t("supportPage.bandPanelEyebrow")}</p>
            <strong>{t("supportPage.bandPanelTitle")}</strong>
          </div>
        </div>

        <div className="services-band__content">
          <p className="services-band__eyebrow">{t("supportPage.bandEyebrow")}</p>
          <h2 id="services-band-title" className="services-band__title">
            {t("supportPage.bandTitle")}
          </h2>
          <p className="services-band__copy">{t("supportPage.bandCopy")}</p>

          <ul className="services-band__list">
            <li>{t("supportPage.bandItem1")}</li>
            <li>{t("supportPage.bandItem2")}</li>
            <li>{t("supportPage.bandItem3")}</li>
            <li>{t("supportPage.bandItem4")}</li>
            <li>{t("supportPage.bandItem5")}</li>
          </ul>
        </div>
      </section>

      <section className="services-cta speakable-block" aria-labelledby="services-cta-title">
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
    </div>
  );
}

export default SupportPage;
