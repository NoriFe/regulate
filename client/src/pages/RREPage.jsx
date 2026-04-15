import { Link } from "react-router-dom";
import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function RREPage() {
  const { t } = useLanguage();

  return (
    <section className="panel speakable-block" aria-labelledby="rre-page-title">
      <Link to="/main" className="btn btn--secondary btn--sm">
        {t("rrePage.backHome")}
      </Link>
      <ReadAloudButton
        text={t("rrePage.read")}
      />
      <p className="page-kicker">
        {t("rrePage.kicker")}
      </p>
      <h1 id="rre-page-title" className="page-title" style={{ maxWidth: "none" }}>
        {t("rrePage.title")}
      </h1>
      <h2 className="page-title page-title--compact">{t("rrePage.whatTitle")}</h2>
      <p className="page-copy">{t("rrePage.whatCopy1")}</p>
      <p className="page-copy">{t("rrePage.whatCopy2")}</p>
      <p className="page-copy">{t("rrePage.whatCopy3")}</p>

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

      <h2 className="page-title page-title--compact">{t("rrePage.whoTitle")}</h2>
      <p className="page-copy">{t("rrePage.whoLead")}</p>
      <ul className="sensemaths-list">
        <li>{t("rrePage.whoItem1")}</li>
        <li>{t("rrePage.whoItem2")}</li>
        <li>{t("rrePage.whoItem3")}</li>
        <li>{t("rrePage.whoItem4")}</li>
      </ul>

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

      <h2 className="page-title page-title--compact">{t("rrePage.outcomeTitle")}</h2>
      <p className="page-copy">{t("rrePage.outcomeLead")}</p>
      <ul className="sensemaths-list">
        <li>{t("rrePage.outcomeItem1")}</li>
        <li>{t("rrePage.outcomeItem2")}</li>
        <li>{t("rrePage.outcomeItem3")}</li>
        <li>{t("rrePage.outcomeItem4")}</li>
        <li>{t("rrePage.outcomeItem5")}</li>
      </ul>
    </section>
  );
}

export default RREPage;