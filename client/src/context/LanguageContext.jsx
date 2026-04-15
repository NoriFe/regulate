import { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations from "../i18n/translations";

const STORAGE_KEY = "regulateToLearn:language";
const LanguageContext = createContext(null);

function resolveText(source, key) {
  return key.split(".").reduce((acc, segment) => {
    if (acc && typeof acc === "object" && segment in acc) {
      return acc[segment];
    }
    return undefined;
  }, source);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "pl" ? "pl" : "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }

    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", language === "pl" ? "pl" : "en");
    }
  }, [language]);

  const value = useMemo(() => {
    const text = translations[language] || translations.en;

    return {
      language,
      isPolish: language === "pl",
      text,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "pl" : "en")),
      t: (key) => {
        const localized = resolveText(text, key);
        if (typeof localized === "string") return localized;
        const fallback = resolveText(translations.en, key);
        return typeof fallback === "string" ? fallback : key;
      },
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}