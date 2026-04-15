import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useAccessibility } from "../context/AccessibilityContext";
import LanguageToggleButton from "./LanguageToggleButton";

const STYLE_ID = "a11y-hub-style";
const FILTER_ID = "a11y-deuteranopia-filter";
const PORTAL_ROOT_ID = "a11y-hub-root";
const DIFFERENT_MODE_STORAGE_KEY = "a11y-different-mode-enabled";

const HUB_CSS = `
.a11y-fab {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 9999;
  width: calc(56px * 1.2);
  height: calc(56px * 1.2);
  border-radius: 999px;
  border: 1px solid #c995a4;
  background: #c995a4;
  color: #15263f;
  box-shadow: 0 14px 32px rgba(31, 49, 80, 0.24);
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.a11y-fab.language-toggle {
  bottom: 96px;
  background: #c995a4;
  color: #15263f;
  border-color: #c995a4;
}

.a11y-panel {
  position: fixed;
  right: 24px;
  bottom: 78px;
  z-index: 9999;
  width: min(300px, calc(100vw - 48px));
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid rgba(19, 34, 58, 0.2);
  box-shadow: 0 16px 36px rgba(11, 24, 39, 0.25);
  padding: 10px;
  display: grid;
  gap: 8px;
}

.a11y-panel__row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
}

.a11y-panel__label {
  margin: 0;
  font: 600 0.86rem/1.2 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  color: #11233f;
}

.a11y-panel__actions {
  display: inline-flex;
  gap: 6px;
}

.a11y-panel__btn {
  min-height: 30px;
  border-radius: 8px;
  border: 1px solid rgba(19, 34, 58, 0.22);
  background: #f8fbff;
  color: #0f2741;
  font: 700 0.78rem/1 system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  padding: 0.35rem 0.5rem;
  cursor: pointer;
}

.a11y-panel__btn[data-active="true"] {
  background: #1f3150;
  color: #fff9f4;
}

body.a11y-large-text :is(
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  label,
  a,
  span,
  small,
  strong,
  em,
  b,
  i,
  button,
  input,
  textarea,
  select,
  option,
  summary,
  .nav-link,
  .site-brand__name,
  .site-brand__tagline,
  .site-footer__line,
  .site-footer__label,
  .site-footer__email,
  .page-title,
  .card-title,
  .panel-title,
  .hero__title,
  .services-intro__title,
  .services-band__title,
  .services-cta__title,
  .page-copy,
  .card-copy,
  .panel-list,
  .field-helper,
  .a11y-panel__label,
  .a11y-panel__btn
) {
  font-size: calc(1em * var(--a11y-font-scale, 1)) !important;
}

body.a11y-high-contrast > *:not(#a11y-hub-root) {
  filter: contrast(1.5) brightness(1.1);
}

body.a11y-color-blind > *:not(#a11y-hub-root) {
  filter: url(#deuteranopia);
}

html.a11y-dark-mode-root {
  background: #f0e8df !important;
}

body.a11y-dark-mode {
  background: #f0e8df !important;
  color: #c8cfd8 !important;
  color-scheme: light;
}

body.a11y-dark-mode,
body.a11y-dark-mode * {
  transition: all 0.4s ease !important;
}

body.a11y-dark-mode #root,
body.a11y-dark-mode :is(.site-shell, .site-main, .page-stack, .about-page, .services-page, .contact-page, .framework-page, .calm-corner-page, .home-dual-grid, .split-grid, .contact-grid) {
  background: transparent !important;
}

body.a11y-dark-mode :is(.site-nav, .site-footer) {
  background: rgba(31, 49, 80, 0.85) !important;
  color: #c8cfd8 !important;
  border-color: #b0a49c !important;
}

body.a11y-dark-mode :is(.site-brand__name, .site-brand__tagline, .site-footer__line, .site-footer__label, .site-footer__email, .nav-link) {
  color: #c8cfd8 !important;
}

body.a11y-dark-mode .nav-link--active {
  background: #9a8f87 !important;
  color: #ffffff !important;
}

body.a11y-dark-mode :is(
  .hero,
  .card,
  .panel,
  .info-card,
  .auth-card,
  .about-block,
  .about-intro,
  .about-hello-section,
  .about-page__closing,
  .about-support-card,
  .about-method-card,
  .about-hello-photo,
  .about-journey-motto__button,
  .services-intro,
  .services-hero,
  .services-band,
  .services-cta,
  .services-hero__panel,
  .services-band__panel,
  .contact-hero,
  .contact-card,
  .support-page__card,
  .support-form,
  .hero__panel,
  .panel--dark,
  .sensemaths-list li,
  .sensemaths-checklist li,
  .rre-pillars-list li,
  .panel-list li,
  .hero__panel-list li,
  .services-band__list li
  , .framework-hero
  , .framework-steps-full
  , .framework-step-full
  , .comparison-item
  , .calm-corner-hero
  , .calm-corner-player
) {
  background: rgba(31, 49, 80, 0.85) !important;
  background-image: none !important;
  color: #c8cfd8 !important;
  border-color: #b0a49c !important;
  box-shadow: 0 10px 20px rgba(31, 49, 80, 0.12) !important;
}

body.a11y-dark-mode :is(h1, h2, h3, h4, h5, h6, .page-title, .card-title, .panel-title, .hero__title, .services-intro__title, .services-band__title, .services-cta__title) {
  color: #c8cfd8 !important;
}

body.a11y-dark-mode :is(p, li, span, label, .page-copy, .card-copy, .panel-list, .field-helper) {
  color: #c8cfd8 !important;
}

body.a11y-dark-mode :is(.page-kicker, .card-kicker, .section-eyebrow, .services-intro__eyebrow, .services-hero__eyebrow, .services-band__eyebrow, .services-cta__eyebrow, a) {
  color: #c47e6e !important;
}

body.a11y-dark-mode :is(.support-form__input, .support-form__textarea, .music-picker, select, textarea, input) {
  background: rgba(22, 39, 63, 0.82) !important;
  color: #c8cfd8 !important;
  border-color: #b0a49c !important;
}

body.a11y-dark-mode :is(button, .btn, .button-link, .services-cta__button, [role="button"]):not(.a11y-fab):not(.a11y-panel__btn):not(.read-aloud-button) {
  background: #c47e6e !important;
  color: #ffffff !important;
  border-color: #b0a49c !important;
}

body.a11y-dark-mode :is(button, .btn, .button-link, .services-cta__button, [role="button"]):not(.a11y-fab):not(.a11y-panel__btn):not(.read-aloud-button):hover {
  background: #b87364 !important;
}

body.a11y-dark-mode .read-aloud-button,
body.a11y-dark-mode .site-footer__social-link {
  background: rgba(22, 39, 63, 0.82) !important;
  color: #c8cfd8 !important;
  border-color: #b0a49c !important;
}

body.a11y-dark-mode .site-footer__social-link:hover,
body.a11y-dark-mode .site-footer__social-link:focus-visible,
body.a11y-dark-mode .read-aloud-button:hover,
body.a11y-dark-mode .read-aloud-button:focus-visible {
  background: rgba(22, 39, 63, 0.92) !important;
  color: #c8cfd8 !important;
  border-color: #b0a49c !important;
}

body.a11y-dark-mode :is(button, .btn, .button-link, .services-cta__button, .read-aloud-button, [role="button"]):focus-visible {
  outline: 3px solid #9a8f87 !important;
  outline-offset: 2px !important;
}

body.a11y-dark-mode > *:not(#a11y-hub-root) img,
body.a11y-dark-mode > *:not(#a11y-hub-root) video,
body.a11y-dark-mode > *:not(#a11y-hub-root) iframe,
body.a11y-dark-mode > *:not(#a11y-hub-root) svg,
body.a11y-dark-mode > *:not(#a11y-hub-root) canvas {
  filter: saturate(0.95) contrast(1.02);
}

body.a11y-large-cursor:not(.a11y-dark-mode) * {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72' style='color:%23f7e8d5'><circle cx='30' cy='30' r='20' fill='none' stroke='currentColor' stroke-width='6'/><circle cx='30' cy='30' r='6' fill='currentColor'/></svg>") 24 24, auto !important;
}

body.a11y-large-cursor.a11y-dark-mode * {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72' style='color:%2315263f'><circle cx='30' cy='30' r='20' fill='none' stroke='currentColor' stroke-width='6'/><circle cx='30' cy='30' r='6' fill='currentColor'/></svg>") 24 24, auto !important;
}

@media (max-width: 480px) {
  .a11y-fab {
    right: 14px;
    bottom: 14px;
  }

  .a11y-panel {
    right: 14px;
    bottom: 66px;
    width: min(300px, calc(100vw - 28px));
  }
}
`;

function injectA11yStyle() {
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = HUB_CSS;
  document.head.appendChild(style);
}

function injectColorFilter() {
  if (document.getElementById(FILTER_ID)) {
    return;
  }

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("id", FILTER_ID);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.style.position = "absolute";
  svg.style.width = "0";
  svg.style.height = "0";

  svg.innerHTML = `
    <defs>
      <filter id="deuteranopia">
        <feColorMatrix type="matrix" values="0.625 0.375 0 0 0 0.7 0.3 0 0 0 0 0.3 0.7 0 0 0 0 0 1 0" />
      </filter>
    </defs>
  `;

  document.head.appendChild(svg);
}

function AccessibilityHub() {
  const { dyslexicFontEnabled, toggleDyslexicFont } = useAccessibility();
  const [open, setOpen] = useState(false);
  const [textScale, setTextScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      return window.localStorage.getItem(DIFFERENT_MODE_STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });
  const [colorBlind, setColorBlind] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);
  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    injectA11yStyle();
    injectColorFilter();

    let root = document.getElementById(PORTAL_ROOT_ID);
    if (!root) {
      root = document.createElement("div");
      root.id = PORTAL_ROOT_ID;
      document.body.appendChild(root);
    }
    setPortalRoot(root);

    return () => {
      const style = document.getElementById(STYLE_ID);
      style?.remove();
      document.getElementById(FILTER_ID)?.remove();
      document.getElementById(PORTAL_ROOT_ID)?.remove();
      document.body.classList.remove(
        "a11y-large-text",
        "a11y-high-contrast",
        "a11y-dark-mode",
        "a11y-color-blind",
        "a11y-large-cursor"
      );
      document.documentElement.classList.remove("a11y-dark-mode-root");
      document.body.style.removeProperty("--a11y-font-scale");
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("a11y-large-text", textScale !== 1);
    if (textScale === 1) {
      document.body.style.removeProperty("--a11y-font-scale");
    } else {
      document.body.style.setProperty("--a11y-font-scale", String(textScale));
    }
  }, [textScale]);

  useEffect(() => {
    document.body.classList.toggle("a11y-high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.body.classList.toggle("a11y-dark-mode", darkMode);
    document.documentElement.classList.toggle("a11y-dark-mode-root", darkMode);

    try {
      window.localStorage.setItem(DIFFERENT_MODE_STORAGE_KEY, String(darkMode));
    } catch {
      // Ignore storage errors in restricted environments.
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.classList.toggle("a11y-color-blind", colorBlind);
  }, [colorBlind]);

  useEffect(() => {
    document.body.classList.toggle("a11y-large-cursor", largeCursor);
  }, [largeCursor]);

  const textLabel = useMemo(() => {
    if (textScale === 1) {
      return "100%";
    }
    return `${Math.round(textScale * 100)}%`;
  }, [textScale]);

  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <>
      <LanguageToggleButton />
      <button
        type="button"
        className="a11y-fab"
        aria-label="Open accessibility panel"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" style={{width:"2.2rem",height:"2.2rem"}}>
          <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 12V13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 12V13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {open ? (
        <section className="a11y-panel" aria-label="Accessibility options">
          <div className="a11y-panel__row">
            <p className="a11y-panel__label">Different mode</p>
            <button
              type="button"
              className="a11y-panel__btn"
              data-active={darkMode}
              onClick={() => setDarkMode((v) => !v)}
            >
              {darkMode ? "On" : "Off"}
            </button>
          </div>

          <div className="a11y-panel__row">
            <p className="a11y-panel__label">High contrast</p>
            <button
              type="button"
              className="a11y-panel__btn"
              data-active={highContrast}
              onClick={() => setHighContrast((v) => !v)}
            >
              {highContrast ? "On" : "Off"}
            </button>
          </div>

          <div className="a11y-panel__row">
            <p className="a11y-panel__label">Dyslexic font</p>
            <button
              type="button"
              className="a11y-panel__btn"
              data-active={dyslexicFontEnabled}
              onClick={toggleDyslexicFont}
            >
              {dyslexicFontEnabled ? "On" : "Off"}
            </button>
          </div>

          <div className="a11y-panel__row">
            <p className="a11y-panel__label">Colour filter</p>
            <button
              type="button"
              className="a11y-panel__btn"
              data-active={colorBlind}
              onClick={() => setColorBlind((v) => !v)}
            >
              {colorBlind ? "On" : "Off"}
            </button>
          </div>

          <div className="a11y-panel__row">
            <p className="a11y-panel__label">Large cursor</p>
            <button
              type="button"
              className="a11y-panel__btn"
              data-active={largeCursor}
              onClick={() => setLargeCursor((v) => !v)}
            >
              {largeCursor ? "On" : "Off"}
            </button>
          </div>

          <div className="a11y-panel__row">
            <p className="a11y-panel__label">Text size {textLabel}</p>
            <div className="a11y-panel__actions">
              <button
                type="button"
                className="a11y-panel__btn"
                onClick={() => setTextScale((prev) => Math.max(1, Number((prev - 0.1).toFixed(2))))}
              >
                A-
              </button>
              <button type="button" className="a11y-panel__btn" onClick={() => setTextScale(1)}>
                Reset
              </button>
              <button
                type="button"
                className="a11y-panel__btn"
                onClick={() => setTextScale((prev) => Math.min(1.6, Number((prev + 0.1).toFixed(2))))}
              >
                A+
              </button>
            </div>
          </div>
        </section>
      ) : null}
    </>,
    portalRoot
  );
}

export default AccessibilityHub;
