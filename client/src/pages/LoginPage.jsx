import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../lib/api";
import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function LoginPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", text: "" });

  async function handleSubmit(event) {
    event.preventDefault();

    if (emailOrUsername.trim().length < 3) {
      setStatus({ type: "error", text: t("login.errEnterEmailOrUsername") });
      return;
    }

    if (password.length < 8 || password.length > 128) {
      setStatus({ type: "error", text: t("login.errPasswordLength") });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: "idle", text: "" });
      await loginUser({ emailOrUsername: emailOrUsername.trim(), password });
      setStatus({ type: "success", text: t("login.successRedirecting") });
      navigate("/main");
    } catch (error) {
      setStatus({
        type: "error",
        text: error instanceof Error ? error.message : t("login.errUnableSignIn"),
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="auth-card speakable-block">
      <ReadAloudButton
        text={t("login.read")}
      />
      <p className="page-kicker">{t("login.kicker")}</p>
      <h1 className="page-title page-title--compact">
        {t("login.title")}
      </h1>
      <p className="page-copy">
        {t("login.copy")}
      </p>

      <form className="support-form" onSubmit={handleSubmit} noValidate>
        <label className="support-form__label" htmlFor="emailOrUsername">
          {t("login.fieldEmailOrUsername")}
        </label>
        <input
          id="emailOrUsername"
          name="emailOrUsername"
          className="support-form__input"
          value={emailOrUsername}
          onChange={(event) => setEmailOrUsername(event.target.value)}
          autoComplete="username"
          required
        />

        <label className="support-form__label" htmlFor="password">
          {t("login.fieldPassword")}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="support-form__input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          minLength={8}
          maxLength={128}
          required
        />

        <div className="auth-actions">
          <button className="button button--primary" type="submit" disabled={submitting}>
            {submitting ? t("login.buttonSigningIn") : t("login.buttonSignIn")}
          </button>
          <Link to="/register" className="button-link button-link--secondary">
            {t("login.buttonCreateAccount")}
          </Link>
        </div>

        {status.type !== "idle" ? (
          <p
            className={`form-status ${status.type === "success" ? "form-status--success" : "form-status--error"}`}
            role="status"
            aria-live="polite"
          >
            {status.text}
          </p>
        ) : null}
      </form>
    </section>
  );
}

export default LoginPage;