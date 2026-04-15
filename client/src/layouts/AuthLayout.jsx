import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useLanguage } from "../context/LanguageContext";

function AuthLayout() {
  const { t } = useLanguage();

  return (
    <div className="site-shell">
      <a
        className="skip-link"
        href="#main-content"
      >
        {t("common.skipToMain")}
      </a>
      <NavBar />
      <main id="main-content" className="site-main auth-shell">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;