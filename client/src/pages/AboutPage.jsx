import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";
import helloPhoto from "../assets/images/foto.jpeg";

function AboutPage() {
  const { t } = useLanguage();

  const helloRead = [
    t("aboutPage.helloTitle"),
    t("aboutPage.helloCopy1"),
    t("aboutPage.helloCopy2"),
  ].join(" ");

  const journeyRead = [
    t("aboutPage.journeyTitle"),
    t("aboutPage.journeyCopy1"),
    t("aboutPage.journeyCopy2"),
    t("aboutPage.journeyCopy3"),
    t("aboutPage.journeyCopy4"),
  ].join(" ");

  const approachRead = [
    t("aboutPage.approachTitle"),
    t("aboutPage.approachCopy"),
    t("aboutPage.approach1"),
    t("aboutPage.approach2"),
    t("aboutPage.approach3"),
    t("aboutPage.approach4"),
    t("aboutPage.approach5"),
    t("aboutPage.approach6"),
    t("aboutPage.approach7"),
  ].join(" ");

  const benefitsRead = [
    t("aboutPage.benefitsTitle"),
    t("aboutPage.benefitsEmotionalTitle"),
    t("aboutPage.benefitsEmotional1"),
    t("aboutPage.benefitsEmotional2"),
    t("aboutPage.benefitsEmotional3"),
    t("aboutPage.benefitsAcademicTitle"),
    t("aboutPage.benefitsAcademic1"),
    t("aboutPage.benefitsAcademic2"),
    t("aboutPage.benefitsAcademic3"),
    t("aboutPage.benefitsLearningTitle"),
    t("aboutPage.benefitsLearning1"),
    t("aboutPage.benefitsLearning2"),
    t("aboutPage.benefitsLearning3"),
  ].join(" ");

  const differentRead = [
    t("aboutPage.differentTitle"),
    t("aboutPage.differentLead"),
    t("aboutPage.different1"),
    t("aboutPage.different2"),
    t("aboutPage.different3"),
    t("aboutPage.different4"),
    t("aboutPage.differentCopy"),
  ].join(" ");

  return (
    <section className="about-page" aria-labelledby="about-page-title">
      <h1 id="about-page-title" className="sr-only">{t("aboutPage.title")}</h1>

      <section className="about-hello-section speakable-block">
        <ReadAloudButton text={helloRead} />
        <div className="about-hello-grid">
          <div className="about-hello-text">
            <p className="section-eyebrow section-eyebrow--soft">{t("aboutPage.helloEyebrow")}</p>
            <h2 className="page-title page-title--compact">{t("aboutPage.helloTitle")}</h2>
            <p className="page-copy">{t("aboutPage.helloCopy1")}</p>
            <p className="page-copy">{t("aboutPage.helloCopy2")}</p>
          </div>
          <img
            src={helloPhoto}
            alt="Angelika"
            className="about-hello-photo about-photo blob-img"
          />
        </div>
      </section>

      <section className="about-block speakable-block">
        <ReadAloudButton text={journeyRead} />
        <p className="section-eyebrow section-eyebrow--soft">{t("aboutPage.journeyEyebrow")}</p>
        <h2 className="page-title page-title--compact">{t("aboutPage.journeyTitle")}</h2>
        <div className="about-journey-layout">
          <div className="about-journey-copy about-journey-copy--left">
            <p className="page-copy">{t("aboutPage.journeyCopy1")}</p>
            <p className="page-copy">{t("aboutPage.journeyCopy2")}</p>
          </div>

          <div className="about-journey-copy about-journey-copy--right">
            <p className="page-copy">{t("aboutPage.journeyCopy3")}</p>
            <p className="page-copy">{t("aboutPage.journeyCopy4")}</p>
          </div>
        </div>
      </section>




      <div className="about-dual-blocks">
        <section className="about-block speakable-block">
          <ReadAloudButton text={approachRead} />
          <p className="section-eyebrow section-eyebrow--soft">{t("aboutPage.approachEyebrow")}</p>
          <h2 className="page-title page-title--compact">{t("aboutPage.approachTitle")}</h2>
          <p className="page-copy">{t("aboutPage.approachCopy")}</p>

          <ul className="sensemaths-list">
            <li>{t("aboutPage.approach1")}</li>
            <li>{t("aboutPage.approach2")}</li>
            <li>{t("aboutPage.approach3")}</li>
            <li>{t("aboutPage.approach4")}</li>
            <li>{t("aboutPage.approach5")}</li>
            <li>{t("aboutPage.approach6")}</li>
            <li>{t("aboutPage.approach7")}</li>
          </ul>
        </section>

        <section className="about-block speakable-block">
          <ReadAloudButton text={benefitsRead} />
          <p className="section-eyebrow section-eyebrow--soft">{t("aboutPage.benefitsEyebrow")}</p>
          <h2 className="page-title page-title--compact">{t("aboutPage.benefitsTitle")}</h2>

          <h3 className="page-title--small">{t("aboutPage.benefitsEmotionalTitle")}</h3>
          <ul className="sensemaths-list">
            <li>{t("aboutPage.benefitsEmotional1")}</li>
            <li>{t("aboutPage.benefitsEmotional2")}</li>
            <li>{t("aboutPage.benefitsEmotional3")}</li>
          </ul>

          <h3 className="page-title--small">{t("aboutPage.benefitsAcademicTitle")}</h3>
          <ul className="sensemaths-list">
            <li>{t("aboutPage.benefitsAcademic1")}</li>
            <li>{t("aboutPage.benefitsAcademic2")}</li>
            <li>{t("aboutPage.benefitsAcademic3")}</li>
          </ul>

          <h3 className="page-title--small">{t("aboutPage.benefitsLearningTitle")}</h3>
          <ul className="sensemaths-list">
            <li>{t("aboutPage.benefitsLearning1")}</li>
            <li>{t("aboutPage.benefitsLearning2")}</li>
            <li>{t("aboutPage.benefitsLearning3")}</li>
          </ul>
        </section>
      </div>

      <section className="about-block speakable-block">
        <ReadAloudButton text={differentRead} />
        <p className="section-eyebrow section-eyebrow--soft">{t("aboutPage.differentEyebrow")}</p>
        <h2 className="page-title page-title--pink">{t("aboutPage.differentTitle")}</h2>
        <p className="page-copy">{t("aboutPage.differentLead")}</p>
        <ul className="sensemaths-checklist">
          <li>{t("aboutPage.different1")}</li>
          <li>{t("aboutPage.different2")}</li>
          <li>{t("aboutPage.different3")}</li>
          <li>{t("aboutPage.different4")}</li>
        </ul>
        <p className="page-copy">{t("aboutPage.differentCopy")}</p>
      </section>
    </section>
  );
}

export default AboutPage;