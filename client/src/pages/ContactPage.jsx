import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  const { t } = useLanguage();

  const heroRead = [
    t("contact.kicker"),
    t("contact.title"),
    t("contact.copy"),
  ].join(" ");

  const emailRead = [
    t("contact.emailTitle"),
    t("contact.emailCopy"),
    t("common.footerContactEmailLabel"),
    t("common.footerContactEmail"),
    t("contact.responseTime"),
  ].join(" ");

  const socialRead = [
    t("contact.followTitle"),
    t("contact.followCopy"),
    t("common.footerSocialLabel"),
    t("common.socialFacebook"),
    t("common.socialInstagram"),
    t("common.socialTikTok"),
    t("common.socialX"),
  ].join(" ");

  return (
    <div className="page-stack contact-page">
      <section className="contact-hero speakable-block" aria-labelledby="contact-title">
        <ReadAloudButton text={heroRead} />
        <p className="page-kicker">{t("contact.kicker")}</p>
        <h1 id="contact-title" className="page-title contact-hero__title">
          {t("contact.title")}
        </h1>
        <p className="page-copy contact-hero__copy">{t("contact.copy")}</p>
      </section>

      <section className="contact-grid" aria-label={t("contact.kicker")}>
        <article className="contact-card speakable-block">
          <ReadAloudButton text={emailRead} />
          <h2 className="page-title page-title--compact">{t("contact.emailTitle")}</h2>
          <p className="page-copy">{t("contact.emailCopy")}</p>
          <p className="site-footer__label">{t("common.footerContactEmailLabel")}</p>
          <a className="site-footer__email contact-card__email" href={`mailto:${t("common.footerContactEmail")}`}>
            {t("common.footerContactEmail")}
          </a>
          <p className="page-copy contact-card__small">{t("contact.responseTime")}</p>
        </article>

        <article className="contact-card speakable-block">
          <ReadAloudButton text={socialRead} />
          <h2 className="page-title page-title--compact">{t("contact.followTitle")}</h2>
          <p className="page-copy">{t("contact.followCopy")}</p>
          <div className="site-footer__social" aria-label={t("common.footerSocialLabel")}>
            <a
              className="site-footer__social-link"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label={t("common.socialFacebook")}
              title={t("common.socialFacebook")}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M13.5 21V13.5H16L16.5 10.5H13.5V8.7C13.5 7.86 13.78 7.2 15.02 7.2H16.62V4.44C16.34 4.4 15.38 4.32 14.26 4.32C11.92 4.32 10.32 5.76 10.32 8.4V10.5H7.8V13.5H10.32V21H13.5Z" fill="currentColor" />
              </svg>
            </a>
            <a
              className="site-footer__social-link"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label={t("common.socialInstagram")}
              title={t("common.socialInstagram")}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M7.5 3H16.5C18.98 3 21 5.02 21 7.5V16.5C21 18.98 18.98 21 16.5 21H7.5C5.02 21 3 18.98 3 16.5V7.5C3 5.02 5.02 3 7.5 3ZM7.35 5.1C6.11 5.1 5.1 6.11 5.1 7.35V16.65C5.1 17.89 6.11 18.9 7.35 18.9H16.65C17.89 18.9 18.9 17.89 18.9 16.65V7.35C18.9 6.11 17.89 5.1 16.65 5.1H7.35ZM17.25 6.68C17.77 6.68 18.2 7.11 18.2 7.63C18.2 8.15 17.77 8.58 17.25 8.58C16.73 8.58 16.3 8.15 16.3 7.63C16.3 7.11 16.73 6.68 17.25 6.68ZM12 7.8C14.32 7.8 16.2 9.68 16.2 12C16.2 14.32 14.32 16.2 12 16.2C9.68 16.2 7.8 14.32 7.8 12C7.8 9.68 9.68 7.8 12 7.8ZM12 9.9C10.84 9.9 9.9 10.84 9.9 12C9.9 13.16 10.84 14.1 12 14.1C13.16 14.1 14.1 13.16 14.1 12C14.1 10.84 13.16 9.9 12 9.9Z" fill="currentColor" />
              </svg>
            </a>
            <a
              className="site-footer__social-link"
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label={t("common.socialTikTok")}
              title={t("common.socialTikTok")}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M16.18 3C16.34 4.37 17.17 5.56 18.43 6.08C19.18 6.39 20 6.47 20.8 6.33V9.09C20.05 9.16 19.29 9.11 18.57 8.96C17.79 8.79 17.05 8.48 16.38 8.06V14.16C16.38 17.22 13.9 19.7 10.84 19.7C9.71 19.7 8.62 19.35 7.71 18.69C6.59 17.88 5.85 16.59 5.67 15.22C5.64 14.98 5.62 14.73 5.62 14.47C5.62 11.41 8.1 8.93 11.16 8.93C11.33 8.93 11.5 8.94 11.66 8.96V11.8C11.5 11.75 11.33 11.73 11.16 11.73C9.64 11.73 8.41 12.96 8.41 14.48C8.41 15.52 8.99 16.43 9.85 16.9C10.26 17.12 10.73 17.25 11.23 17.25C12.75 17.25 13.98 16.02 13.98 14.5V3H16.18Z" fill="currentColor" />
              </svg>
            </a>
            <a
              className="site-footer__social-link"
              href="https://www.x.com"
              target="_blank"
              rel="noreferrer"
              aria-label={t("common.socialX")}
              title={t("common.socialX")}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M17.1 3H20.2L13.36 10.82L21.4 21H15.1L10.18 14.8L4.74 21H1.62L8.93 12.67L1.2 3H7.66L12.11 8.7L17.1 3ZM16 19H17.72L6.74 4.9H4.89L16 19Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </article>
      </section>
      <section className="contact-form-section speakable-block" aria-label="Contact form">
        <h2 className="page-title page-title--compact" style={{marginTop: '1.5rem'}}>Send a Message</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default ContactPage;