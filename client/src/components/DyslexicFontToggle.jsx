import { useAccessibility } from "../context/AccessibilityContext";
import { useLanguage } from "../context/LanguageContext";

function DyslexicFontToggle() {
  const { dyslexicFontEnabled, toggleDyslexicFont } = useAccessibility();
  const { t } = useLanguage();

  const label = dyslexicFontEnabled ? t("common.disableDyslexicFont") : t("common.enableDyslexicFont");

  return (
    <button
      type="button"
      className={`dyslexic-toggle ${dyslexicFontEnabled ? "dyslexic-toggle--active" : ""}`}
      onClick={toggleDyslexicFont}
      aria-pressed={dyslexicFontEnabled}
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6 18 11 6h2l5 12" />
        <path d="M8 13h8" />
        <path d="M17 18h2" />
        <path d="M3.5 7.5A4 4 0 0 0 6 10" />
        <path d="M20.5 7.5A4 4 0 0 1 18 10" />
      </svg>
    </button>
  );
}

export default DyslexicFontToggle;