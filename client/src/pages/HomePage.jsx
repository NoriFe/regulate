import { Link } from "react-router-dom";
import ReadAloudButton from "../components/ReadAloudButton";
import { visibility } from "../config/visibility";
import { useLanguage } from "../context/LanguageContext";
import picture2 from "../assets/images/picture2.png";

function HomePage() {
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
      <section className="about-block speakable-block home-before-start" aria-label={t("home.beforeStartEyebrow")}> 
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
          <img className="home-before-start__visual-image" src={picture2} alt={t("home.beforeStartVisualLabel")} />
        </div>
      </section>

      <section className="about-intro speakable-block home-about-intro" aria-labelledby="home-about-title">
        <ReadAloudButton
          text={combinedIntroRead}
        />
        <div className="home-about-intro__layout">
          <div>
            <p className="section-eyebrow section-eyebrow--soft">
              {t("aboutPage.kicker")}
            </p>
            <h2 id="home-about-title" className="page-title page-title--compact">
              {t("aboutPage.title")}
            </h2>
          </div>
          <div className="about-intro-motto">
            <p className="about-journey-motto__label">{t("aboutPage.mottoLabel")}</p>
            <div className="about-journey-motto__button" aria-label={t("aboutPage.mottoLogoAlt")}> 
              <p className="about-motto__line about-motto__line--top">{t("aboutPage.mottoLine1")}</p>
              <div className="about-motto__divider" aria-hidden="true" />
              <p className="about-motto__line about-motto__line--bottom">{t("aboutPage.mottoLine2")}</p>
            </div>
          </div>
        </div>
        <div className="home-about-intro__hero" aria-label={t("aboutPage.title")}> 
          <div className="hero__content">
            <p className="page-copy page-copy--lg">
              {combinedHeroParagraph}
            </p>
          </div>
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
        <p id="methods-title" className="page-copy home-methods-copy">
          {t("home.methodsCopy")}
        </p>

        <div className="home-dual-grid home-methods-grid">
          <section className="about-method-section speakable-block rre-section" aria-labelledby="rre-title">
          <ReadAloudButton
            text={`${t("aboutPage.method1Kicker")}. ${t("aboutPage.method1Title")}. ${t("aboutPage.method1Copy")}`}
          />
          <h2 id="rre-title" className="page-title page-title--compact">
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
          <h2 id="sensemaths-title" className="page-title page-title--compact">
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

        <div id="support-title" className="split-grid">
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

        <div className="about-block speakable-block">
          <ReadAloudButton
            text={t("home.neurodiverseRead")}
          />
          <h2 className="page-title page-title--compact">
            {t("home.neurodiverseTitle")}
          </h2>
          <p className="page-copy">
            {t("home.neurodiverseCopy")}
          </p>
        </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
