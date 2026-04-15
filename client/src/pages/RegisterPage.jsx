import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../lib/api";
import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function RegisterPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    displayName: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", text: "" });

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const email = formData.email.trim().toLowerCase();
    const username = formData.username.trim().toLowerCase();
    const displayName = formData.displayName.trim();
    const password = formData.password;

    if (!email || !username || !displayName || !password) {
      setStatus({ type: "error", text: t("register.errFillAll") });
      return;
    }

    if (username.length < 3 || username.length > 32) {
      setStatus({ type: "error", text: t("register.errUsernameLen") });
      return;
    }

    if (displayName.length < 1 || displayName.length > 80) {
      setStatus({ type: "error", text: t("register.errDisplayNameLen") });
      return;
    }

    if (password.length < 8 || password.length > 128) {
      setStatus({ type: "error", text: t("register.errPasswordLen") });
      return;
    }

    const strongPassword = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).+$/;
    if (!strongPassword.test(password)) {
      setStatus({
        type: "error",
        text: t("register.errPasswordComplex"),
      });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: "idle", text: "" });
      await registerUser({ email, username, displayName, password });
      setStatus({ type: "success", text: t("register.successCreated") });
      navigate("/login");
    } catch (error) {
      setStatus({
        type: "error",
        text: error instanceof Error ? error.message : t("register.errUnableCreate"),
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="auth-card speakable-block">
      <ReadAloudButton
        text={t("register.read")}
      />
      <p className="page-kicker">{t("register.kicker")}</p>
      <h1 className="page-title page-title--compact">
        {t("register.title")}
      </h1>
      <p className="page-copy">
        {t("register.copy")}
      </p>

      <form className="support-form" onSubmit={handleSubmit} noValidate>
        <label className="support-form__label" htmlFor="email">
          {t("register.fieldEmail")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="support-form__input"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          autoComplete="email"
          maxLength={254}
          required
        />

        <label className="support-form__label" htmlFor="username">
          {t("register.fieldUsername")}
        </label>
        <input
          id="username"
          name="username"
          className="support-form__input"
          value={formData.username}
          onChange={(event) => updateField("username", event.target.value)}
          autoComplete="username"
          minLength={3}
          maxLength={32}
          required
        />

        <label className="support-form__label" htmlFor="displayName">
          {t("register.fieldDisplayName")}
        </label>
        <input
          id="displayName"
          name="displayName"
          className="support-form__input"
          value={formData.displayName}
          onChange={(event) => updateField("displayName", event.target.value)}
          autoComplete="name"
          minLength={1}
          maxLength={80}
          required
        />

        <label className="support-form__label" htmlFor="password">
          {t("register.fieldPassword")}
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="support-form__input"
          value={formData.password}
          onChange={(event) => updateField("password", event.target.value)}
          autoComplete="new-password"
          minLength={8}
          maxLength={128}
          required
        />
        <p className="field-helper" id="password-help">
          {t("register.passwordHelp")}
        </p>

        <div className="auth-actions">
          <button className="button button--primary" type="submit" disabled={submitting}>
            {submitting ? t("register.buttonCreating") : t("register.buttonCreate")}
          </button>
          <Link to="/login" className="button-link button-link--secondary">
            {t("register.buttonHaveAccount")}
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

export default RegisterPage;