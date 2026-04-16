import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function RREPage() {
  const { t } = useLanguage();

  return (
    <div className="page-stack rre-page">
      {/* Intro Block: Title, kicker, what is RRE (unchanged) */}
      <section className="services-intro speakable-block" aria-labelledby="rre-page-title">
        <ReadAloudButton text={t("rrePage.read")} />
        <p className="page-kicker">{t("rrePage.kicker")}</p>
        <h1 id="rre-page-title" className="page-title" style={{ maxWidth: "none" }}>{t("rrePage.title")}</h1>
        <h2 className="page-title page-title--compact">{t("rrePage.whatTitle")}</h2>
        <p className="page-copy">{t("rrePage.whatCopy1")}</p>
        <p className="page-copy">{t("rrePage.whatCopy2")}</p>
        <p className="page-copy">{t("rrePage.whatCopy3")}</p>
      </section>

      {/* Row 1: How does it work? & Who is it for? */}
      <div className="rre-flex-row">
        {/* Block 1 */}
        <section className="services-band speakable-block" aria-label="How does it work?">
          <ReadAloudButton text={t("rrePage.readHow") || t("rrePage.read")}/>
          <div className="services-band__content">
            <h2 className="page-title page-title--compact">{t("rrePage.howTitle")}</h2>
            <p className="page-copy">{t("rrePage.howLead")}</p>
            <ul className="sensemaths-list">
              <li>{t("rrePage.howItem1")}</li>
              <li>{t("rrePage.howItem2")}</li>
              <li>{t("rrePage.howItem3")}</li>
              <li>{t("rrePage.howItem4")}</li>
              <li>{t("rrePage.howItem5")}</li>
            </ul>
            <p className="page-copy">{t("rrePage.howCopy")}</p>
          </div>
        </section>
        {/* Block 2 */}
        <section className="services-band speakable-block" aria-label="Who is it for?">
          <ReadAloudButton text={t("rrePage.readWho") || t("rrePage.read")}/>
          <div className="services-band__content">
            <h2 className="page-title page-title--compact">{t("rrePage.whoTitle")}</h2>
            <p className="page-copy">{t("rrePage.whoLead")}</p>
            <ul className="sensemaths-list">
              <li>{t("rrePage.whoItem1")}</li>
              <li>{t("rrePage.whoItem2")}</li>
              <li>{t("rrePage.whoItem3")}</li>
              <li>{t("rrePage.whoItem4")}</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Row 2: What makes it different? & The Outcome */}
      <div className="rre-flex-row">
        {/* Block 3 */}
        <section className="services-band speakable-block" aria-label="What makes it different?">
          <ReadAloudButton text={t("rrePage.readDiff") || t("rrePage.read")}/>
          <div className="services-band__content">
            <h2 className="page-title page-title--compact">{t("rrePage.diffTitle")}</h2>
            <p className="page-copy">{t("rrePage.diffLead")}</p>
            <ul className="sensemaths-checklist">
              <li>{t("rrePage.diffItem1")}</li>
              <li>{t("rrePage.diffItem2")}</li>
              <li>{t("rrePage.diffItem3")}</li>
              <li>{t("rrePage.diffItem4")}</li>
              <li>{t("rrePage.diffItem5")}</li>
            </ul>
            <p className="page-copy">{t("rrePage.diffCopy")}</p>
          </div>
        </section>
        {/* Block 4 */}
        <section className="services-band speakable-block" aria-label="The Outcome">
          <ReadAloudButton text={t("rrePage.readOutcome") || t("rrePage.read")}/>
          <div className="services-band__content">
            <h2 className="page-title page-title--compact">{t("rrePage.outcomeTitle")}</h2>
            <p className="page-copy">{t("rrePage.outcomeLead")}</p>
            <ul className="sensemaths-list">
              <li>{t("rrePage.outcomeItem1")}</li>
              <li>{t("rrePage.outcomeItem2")}</li>
              <li>{t("rrePage.outcomeItem3")}</li>
              <li>{t("rrePage.outcomeItem4")}</li>
              <li>{t("rrePage.outcomeItem5")}</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default RREPage;