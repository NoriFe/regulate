import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <section className="panel notfound-card speakable-block">
      <ReadAloudButton
        text={t("notFound.read")}
      />
      <p className="page-kicker">
        {t("notFound.kicker")}
      </p>
      <h1 className="page-title" style={{ maxWidth: "none" }}>
        {t("notFound.title")}
      </h1>
      <p className="page-copy">
        {t("notFound.copy")}
      </p>
    </section>
  );
}

export default NotFoundPage;