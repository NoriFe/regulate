import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSession, logoutUser } from "../lib/api";
import logoAvif from "../assets/images/logo.avif";
import logoPng from "../assets/images/logo.optimized.png";
import { useLanguage } from "../context/LanguageContext";

const navLinkClass = ({ isActive }) =>
  `nav-link ${isActive ? "nav-link--active" : ""}`;

function NavBar() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authState, setAuthState] = useState({ loading: true, user: null });

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    let cancelled = false;

    async function loadSession() {
      try {
        const data = await getSession();
        if (!cancelled) {
          setAuthState({ loading: false, user: data.user || null });
        }
      } catch {
        if (!cancelled) {
          setAuthState({ loading: false, user: null });
        }
      }
    }

    loadSession();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleLogout() {
    try {
      await logoutUser();
    } catch {
      // Keep logout resilient even if the session is already invalid.
    } finally {
      setAuthState({ loading: false, user: null });
      closeMenu();
      navigate("/");
    }
  }

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <div className="site-nav__top">
          <NavLink to="/main" className="site-brand" onClick={closeMenu}>
            <picture className="site-brand__media" aria-hidden="true">
              <source srcSet={logoAvif} type="image/avif" />
              <img src={logoPng} alt="" className="site-brand__logo" loading="eager" decoding="async" />
            </picture>
            <span className="site-brand__text">
              <span className="site-brand__name">
                {t("common.brandName")}
              </span>
              <span className="site-brand__tagline">
                {t("common.brandTagline")}
              </span>
            </span>
          </NavLink>

          <button
            type="button"
            className={`site-nav__menu-toggle ${menuOpen ? "site-nav__menu-toggle--open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="primary-nav-links"
            aria-label={menuOpen ? t("common.closeMenu") : t("common.openMenu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-nav__menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="sr-only">{menuOpen ? t("common.closeMenu") : t("common.openMenu")}</span>
          </button>
        </div>

        <nav
          id="primary-nav-links"
          aria-label="Primary"
          className={`site-nav__links ${menuOpen ? "site-nav__links--open" : ""}`}
        >
          <NavLink to="/main" end className={navLinkClass} onClick={closeMenu}>
            {t("common.home")}
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
            {t("common.about")}
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>
            {t("common.services")}
          </NavLink>
          <NavLink to="/calm-corner" className={navLinkClass} onClick={closeMenu}>
            {t("common.calmCorner")}
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
            {t("common.contact")}
          </NavLink>
          {authState.loading ? (
            <span className="nav-link nav-link--auth nav-link--static">{t("common.checking")}</span>
          ) : authState.user ? (
            <>
              <span className="nav-link nav-link--auth nav-link--static" title={authState.user.username}>
                {t("common.hiPrefix")}, {authState.user.username}
              </span>
              <button type="button" className="nav-link nav-link--button" onClick={handleLogout}>
                {t("common.logOut")}
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => `${navLinkClass({ isActive })} nav-link--auth`}
              onClick={closeMenu}
            >
              {t("common.signIn")}
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;