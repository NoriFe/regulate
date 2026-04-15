import { useEffect } from "react";
import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function FrameworkPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="framework-page">
      <section className="framework-hero" aria-labelledby="fw-main-title">
        <div className="framework-container speakable-block">
          <p className="section-eyebrow section-eyebrow--soft">
            {t("framework.eyebrow")}
          </p>
          <h1 id="fw-main-title" className="page-hero-title">
            {t("framework.mainTitle")}
          </h1>
          <p className="page-copy page-copy--lg">
            {t("framework.mainDescription")}
          </p>
          <ReadAloudButton
            text={t("framework.pageRead")}
          />
        </div>
      </section>

      <section aria-label={t("home.highlightsLabel")} className="feature-grid framework-highlights">
        <div className="feature-grid-top">
          <article className="card speakable-block">
            <ReadAloudButton
              text={t("home.card1Read")}
            />
            <p className="card-kicker">
              {t("home.card1Kicker")}
            </p>
            <h2 className="card-title">{t("home.card1Title")}</h2>
            <p className="card-copy">
              {t("home.card1Copy")}
            </p>
          </article>

          <article className="card speakable-block">
            <ReadAloudButton
              text={t("home.card2Read")}
            />
            <p className="card-kicker">
              {t("home.card2Kicker")}
            </p>
            <h2 className="card-title">{t("home.card2Title")}</h2>
            <p className="card-copy">
              {t("home.card2Copy")}
            </p>
          </article>

          <article className="card speakable-block">
            <ReadAloudButton
              text={t("home.card3Read")}
            />
            <p className="card-kicker">
              {t("home.card3Kicker")}
            </p>
            <h2 className="card-title">{t("home.card3Title")}</h2>
            <p className="card-copy">
              {t("home.card3Copy")}
            </p>
          </article>
        </div>

        <div className="feature-grid-bottom">
          <article className="card speakable-block">
            <ReadAloudButton
              text={t("home.card4Read")}
            />
            <p className="card-kicker">
              {t("home.card4Kicker")}
            </p>
            <h2 className="card-title">{t("home.card4Title")}</h2>
            <p className="card-copy">
              {t("home.card4Copy")}
            </p>
          </article>

          <article className="card speakable-block">
            <ReadAloudButton
              text={t("home.card5Read")}
            />
            <p className="card-kicker">
              {t("home.card5Kicker")}
            </p>
            <h2 className="card-title">{t("home.card5Title")}</h2>
            <p className="card-copy">
              {t("home.card5Copy")}
            </p>
          </article>
        </div>
      </section>

      <section className="framework-steps-full" aria-label={t("framework.stepsLabel")}>
        <div className="framework-container">
          {/* Step 1: Assess */}
          <div className="framework-step-full framework-step-full--1">
            <div className="framework-step-content speakable-block">
              <ReadAloudButton
                text={t("framework.step1Title") + ". " + t("framework.step1Question") + ". " + t("framework.step1Sensory") + ". " + t("framework.step1SensoryDetails") + ". " + t("framework.step1Emotional") + ". " + t("framework.step1EmotionalDetails") + ". " + t("framework.step1Readiness") + ". " + t("framework.step1ReadinessDetails") + ". " + t("framework.step1Callout")}
              />
              <h2 className="framework-step-title-lg">{t("framework.step1Title")}</h2>
              <p className="framework-step-question">{t("framework.step1Question")}</p>
              
              <div className="framework-step-details">
                <h3 className="framework-subsection-title">{t("framework.step1Sensory")}</h3>
                <p className="framework-step-text">{t("framework.step1SensoryDetails")}</p>
              </div>
              
              <div className="framework-step-details">
                <h3 className="framework-subsection-title">{t("framework.step1Emotional")}</h3>
                <p className="framework-step-text">{t("framework.step1EmotionalDetails")}</p>
              </div>
              
              <div className="framework-step-details">
                <h3 className="framework-subsection-title">{t("framework.step1Readiness")}</h3>
                <p className="framework-step-text">{t("framework.step1ReadinessDetails")}</p>
              </div>
              
              <p className="framework-step-callout">
                👉 {t("framework.step1Callout")}
              </p>
            </div>
          </div>

          {/* Step 2: Regulate */}
          <div className="framework-step-full framework-step-full--2">
            <div className="framework-step-content speakable-block">
              <ReadAloudButton
                text={t("framework.step2Title") + ". " + t("framework.step2Subtitle") + ". " + t("framework.step2ExamplesLabel") + ". " + t("framework.step2Example1") + ". " + t("framework.step2Example2") + ". " + t("framework.step2Example3") + ". " + t("framework.step2Callout")}
              />
              <h2 className="framework-step-title-lg">{t("framework.step2Title")}</h2>
              <p className="framework-step-subtitle">{t("framework.step2Subtitle")}</p>
              
              <div className="framework-step-details">
                <h3 className="framework-subsection-title">{t("framework.step2ExamplesLabel")}</h3>
                <ul className="framework-step-list">
                  <li>{t("framework.step2Example1")}</li>
                  <li>{t("framework.step2Example2")}</li>
                  <li>{t("framework.step2Example3")}</li>
                </ul>
              </div>
              
              <p className="framework-step-callout">
                👉 {t("framework.step2Callout")}
              </p>
            </div>
          </div>

          {/* Step 3: Connect */}
          <div className="framework-step-full framework-step-full--3">
            <div className="framework-step-content speakable-block">
              <ReadAloudButton
                text={t("framework.step3Title") + ". " + t("framework.step3Subtitle") + ". " + t("framework.step3BasedOn") + ". " + t("framework.step3Item1") + ". " + t("framework.step3Item2") + ". " + t("framework.step3Item3") + ". " + t("framework.step3ExampleLabel") + ". " + t("framework.step3ExampleInstead") + ". " + t("framework.step3ExampleOld") + ". " + t("framework.step3ExampleNew") + ". " + t("framework.step3ExampleBetter")}
              />
              <h2 className="framework-step-title-lg">{t("framework.step3Title")}</h2>
              <p className="framework-step-subtitle">{t("framework.step3Subtitle")}</p>
              
              <div className="framework-step-details">
                <h3 className="framework-subsection-title">{t("framework.step3BasedOn")}:</h3>
                <ul className="framework-step-list">
                  <li>{t("framework.step3Item1")}</li>
                  <li>{t("framework.step3Item2")}</li>
                  <li>{t("framework.step3Item3")}</li>
                </ul>
              </div>
              
              <div className="framework-step-example-section">
                <h3 className="framework-subsection-title">{t("framework.step3ExampleLabel")}:</h3>
                <div className="framework-step-example-comparison">
                  <div className="comparison-item comparison-item--before">
                    <p className="comparison-label">{t("framework.step3ExampleInstead")}</p>
                    <p className="comparison-text">"{t("framework.step3ExampleOld")}"</p>
                  </div>
                  <div className="comparison-arrow">→</div>
                  <div className="comparison-item comparison-item--after">
                    <p className="comparison-label">{t("framework.step3ExampleNew")}</p>
                    <p className="comparison-text">"{t("framework.step3ExampleBetter")}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Play */}
          <div className="framework-step-full framework-step-full--4">
            <div className="framework-step-content speakable-block">
              <ReadAloudButton
                text={t("framework.step4Title") + ". " + t("framework.step4Subtitle") + ". " + t("framework.step4Item1") + ". " + t("framework.step4Item2") + ". " + t("framework.step4Item3") + ". " + t("framework.step4Callout")}
              />
              <h2 className="framework-step-title-lg">{t("framework.step4Title")}</h2>
              <p className="framework-step-subtitle">{t("framework.step4Subtitle")}</p>
              
              <ul className="framework-step-list">
                <li>{t("framework.step4Item1")}</li>
                <li>{t("framework.step4Item2")}</li>
                <li>{t("framework.step4Item3")}</li>
              </ul>
              
              <p className="framework-step-callout">
                👉 {t("framework.step4Callout")}
              </p>
            </div>
          </div>

          {/* Step 5: Rhythm */}
          <div className="framework-step-full framework-step-full--5">
            <div className="framework-step-content speakable-block">
              <ReadAloudButton
                text={t("framework.step5Title") + ". " + t("framework.step5Subtitle") + ". " + t("framework.step5Item1") + ". " + t("framework.step5Item2") + ". " + t("framework.step5Item3") + ". " + t("framework.step5Callout")}
              />
              <h2 className="framework-step-title-lg">{t("framework.step5Title")}</h2>
              <p className="framework-step-subtitle">{t("framework.step5Subtitle")}</p>
              
              <ul className="framework-step-list">
                <li>{t("framework.step5Item1")}</li>
                <li>{t("framework.step5Item2")}</li>
                <li>{t("framework.step5Item3")}</li>
              </ul>
              
              <p className="framework-step-callout">
                👉 {t("framework.step5Callout")}
              </p>
            </div>
          </div>

          {/* Step 6: Learn */}
          <div className="framework-step-full framework-step-full--6">
            <div className="framework-step-content speakable-block">
              <ReadAloudButton
                text={t("framework.step6Title") + ". " + t("framework.step6Subtitle") + ". " + t("framework.step6Item1") + ". " + t("framework.step6Item2") + ". " + t("framework.step6Item3") + ". " + t("framework.step6Callout")}
              />
              <h2 className="framework-step-title-lg">{t("framework.step6Title")}</h2>
              <p className="framework-step-subtitle">{t("framework.step6Subtitle")}</p>
              
              <ul className="framework-step-list">
                <li>{t("framework.step6Item1")}</li>
                <li>{t("framework.step6Item2")}</li>
                <li>{t("framework.step6Item3")}</li>
              </ul>
              
              <p className="framework-step-callout">
                👉 {t("framework.step6Callout")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FrameworkPage;
