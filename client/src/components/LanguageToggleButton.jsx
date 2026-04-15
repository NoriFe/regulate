import { useLanguage } from "../context/LanguageContext";

function LanguageToggleButton() {
  const { isPolish, toggleLanguage, t } = useLanguage();

  const label = isPolish ? t("common.switchToEnglish") : t("common.switchToPolish");

  return (
    <button
      type="button"
      className={`a11y-fab language-toggle ${isPolish ? "language-toggle--pl" : "language-toggle--en"}`}
      onClick={toggleLanguage}
      aria-label={label}
      aria-pressed={isPolish}
      title={label}
    >
      <svg viewBox="0 0 28 20" aria-hidden="true" focusable="false">
        <rect x="0.5" y="0.5" width="27" height="19" rx="2" fill="#012169" stroke="#ffffff" strokeWidth="0.8" />
        <path d="M0.5 2.5 10.5 9.4V10.6L0.5 17.5V15.1L7.1 10.5 0.5 5.9V2.5Zm27 0v3.4l-6.6 4.6 6.6 4.6v2.4l-10-6.9V9.4l10-6.9Z" fill="#ffffff" />
        <path d="M0.5 4 9.3 10 0.5 16V14.7L7.3 10 0.5 5.3V4Zm27 0v1.3L20.7 10l6.8 4.7V16l-8.8-6 8.8-6Z" fill="#C8102E" />
        <rect x="11.5" y="0.5" width="5" height="19" fill="#ffffff" />
        <rect x="0.5" y="7.5" width="27" height="5" fill="#ffffff" />
        <rect x="12.5" y="0.5" width="3" height="19" fill="#C8102E" />
        <rect x="0.5" y="8.5" width="27" height="3" fill="#C8102E" />
      </svg>

      <svg viewBox="0 0 28 20" aria-hidden="true" focusable="false">
        <rect x="0.5" y="0.5" width="27" height="19" rx="2" fill="#ffffff" stroke="#d0d7e2" strokeWidth="0.8" />
        <rect x="0.5" y="10" width="27" height="9.5" fill="#DC143C" />
      </svg>
    </button>
  );
}

export default LanguageToggleButton;