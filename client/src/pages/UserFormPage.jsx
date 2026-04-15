import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createSupportRequest, getHealth, getSession } from "../lib/api";
import ReadAloudButton from "../components/ReadAloudButton";
import { useLanguage } from "../context/LanguageContext";

function UserFormPage() {
  const { t } = useLanguage();
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [healthText, setHealthText] = useState(t("userForm.checkingBackend"));
  const [authState, setAuthState] = useState({ checking: true, authenticated: false, user: null });

  useEffect(() => {
    setHealthText(t("userForm.checkingBackend"));
  }, [t]);

  useEffect(() => {
    let cancelled = false;

    async function checkHealth() {
      try {
        const data = await getHealth();
        if (!cancelled) {
          setHealthText(data?.ok ? t("userForm.backendConnected") : t("userForm.backendUnavailable"));
        }
      } catch {
        if (!cancelled) setHealthText(t("userForm.backendNotConnected"));
      }
    }

    checkHealth();
    return () => {
      cancelled = true;
    };
  }, [t]);

  useEffect(() => {
    let cancelled = false;

    async function checkSession() {
      try {
        const data = await getSession();
        if (!cancelled) {
          setAuthState({ checking: false, authenticated: true, user: data.user || null });
        }
      } catch {
        if (!cancelled) {
          setAuthState({ checking: false, authenticated: false, user: null });
        }
      }
    }

    checkSession();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const cleanTopic = topic.trim();
    const cleanMessage = message.trim();

    if (cleanTopic.length < 3 || cleanTopic.length > 120) {
      setStatus({ type: "error", text: t("userForm.errTopicLen") });
      return;
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 3000) {
      setStatus({ type: "error", text: t("userForm.errMessageLen") });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: "idle", text: "" });
      await createSupportRequest({ topic: cleanTopic, message: cleanMessage });
      setStatus({ type: "success", text: t("userForm.successSubmitted") });
      setTopic("");
      setMessage("");
    } catch (error) {
      setStatus({
        type: "error",
        text: error instanceof Error ? error.message : t("userForm.errCouldNotSubmit"),
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="panel speakable-block">
      <ReadAloudButton
        text={t("userForm.read")}
      />
      <p className="page-kicker">{t("userForm.kicker")}</p>
      <h1 className="page-title" style={{ maxWidth: "none" }}>
        {t("userForm.title")}
      </h1>
      <p className="page-copy">
        {t("userForm.copy")}
      </p>

      <p className="form-status form-status--neutral" role="status" aria-live="polite">
        {healthText}
      </p>

      {!authState.checking && !authState.authenticated ? (
        <p className="form-status form-status--error" role="status" aria-live="polite">
          {t("userForm.mustSignIn")} <Link to="/login">{t("userForm.goToLogin")}</Link>
        </p>
      ) : null}

      {!authState.checking && authState.authenticated && authState.user ? (
        <p className="form-status form-status--neutral" role="status" aria-live="polite">
          {t("userForm.signedInAs")} {authState.user.displayName || authState.user.username}
        </p>
      ) : null}

      <form className="support-form" onSubmit={handleSubmit} noValidate>
        <label className="support-form__label" htmlFor="topic">
          {t("userForm.fieldTopic")}
        </label>
        <input
          id="topic"
          name="topic"
          className="support-form__input"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          minLength={3}
          maxLength={120}
          disabled={!authState.authenticated || submitting}
          required
        />

        <label className="support-form__label" htmlFor="message">
          {t("userForm.fieldMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          className="support-form__textarea"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          minLength={10}
          maxLength={3000}
          rows={6}
          disabled={!authState.authenticated || submitting}
          required
        />

        <button
          className="button button--primary"
          type="submit"
          disabled={submitting || authState.checking || !authState.authenticated}
        >
          {submitting ? t("userForm.buttonSending") : t("userForm.buttonSubmit")}
        </button>

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

export default UserFormPage;