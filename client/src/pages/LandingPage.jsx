import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/background.jpeg";
import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function LandingPage() {
  const { t } = useLanguage();

  return (
    <div 
      className="landing-shell"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section 
        className="landing-banner speakable-block" 
        aria-labelledby="landing-title"
      >
        <ReadAloudButton
          text={t("landing.read")}
        />
        <div className="landing-banner__glow" aria-hidden="true" />
        <div className="landing-banner__content">
          <p className="landing-banner__eyebrow">{t("landing.eyebrow")}</p>
          <h1 id="landing-title" className="landing-banner__title">
            {t("landing.title")}
          </h1>
          <p className="landing-banner__copy">
            {t("landing.copy")}
          </p>

          <div className="landing-banner__actions">
            <Link to="/main" className="button-link button-link--primary">
              {t("landing.ctaMain")}
            </Link>
            <Link to="/register" className="button-link button-link--secondary">
              {t("landing.ctaRegister")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;