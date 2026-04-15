import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function ReadAloudButton({ text = "", label }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function handleRead() {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }

    const Utterance = window.SpeechSynthesisUtterance;
    if (typeof Utterance !== "function") {
      return;
    }

    const content = text.trim();
    if (!content) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new Utterance(content);
    utterance.lang = language === "pl" ? "pl-PL" : "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  function handleStop() {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }

  const defaultLabel = label || t("common.readAloud");
  const buttonLabel = isSpeaking ? t("common.stopReading") : defaultLabel;

  return (
    <button
      type="button"
      className="read-aloud-button"
      onClick={isSpeaking ? handleStop : handleRead}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M11 5 6.5 8H3v8h3.5L11 19V5Z" />
        <path d="M15 9a4 4 0 0 1 0 6" />
        <path d="M17.5 6.5a7 7 0 0 1 0 11" />
      </svg>
    </button>
  );
}

export default ReadAloudButton;