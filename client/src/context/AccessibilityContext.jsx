import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "regulateToLearn:dyslexicFontEnabled";

const AccessibilityContext = createContext(null);

export function AccessibilityProvider({ children }) {
  const [dyslexicFontEnabled, setDyslexicFontEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dyslexic-font-enabled", dyslexicFontEnabled);
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, String(dyslexicFontEnabled));
    }
  }, [dyslexicFontEnabled]);

  const value = useMemo(() => {
    return {
      dyslexicFontEnabled,
      toggleDyslexicFont: () => setDyslexicFontEnabled((enabled) => !enabled),
    };
  }, [dyslexicFontEnabled]);

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }

  return context;
}