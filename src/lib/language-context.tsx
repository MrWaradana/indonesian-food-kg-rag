"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<
    Record<string, Record<string, string>>
  >({});

  // Load translations
  useEffect(() => {
    // This would typically be an API call or import in a real application
    // For simplicity, we're loading them directly here
    const loadTranslations = async () => {
      const enTranslations = (await import("@/translations/en")).default;
      const idTranslations = (await import("@/translations/id")).default;

      setTranslations({
        en: enTranslations,
        id: idTranslations,
      });
    };

    loadTranslations();
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  // Update localStorage when language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[language]) {
      return key;
    }

    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
