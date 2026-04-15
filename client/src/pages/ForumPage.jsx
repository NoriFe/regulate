import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function ForumPage() {
  const { t } = useLanguage();

  return (
    <section className="panel speakable-block">
      <ReadAloudButton
        text={t("forum.read")}
      />
      <p className="page-kicker">
        {t("forum.kicker")}
      </p>
      <h1 className="page-title" style={{ maxWidth: "none" }}>
        {t("forum.title")}
      </h1>
      <p className="page-copy">
        {t("forum.copy")}
      </p>
    </section>
  );
}

export default ForumPage;