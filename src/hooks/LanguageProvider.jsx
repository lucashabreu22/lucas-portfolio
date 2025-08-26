import { useState } from "react";
import { translations } from "../i18n/translations.js";
import { LanguageContext } from "../context/LanguageContext.jsx";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const t = (key, options) => {
    let translation = translations[language][key] || key;

    // Simple interpolation for {{count}} and pluralization
    if (options && typeof options.count === "number") {
      if (options.count !== 1 && translations[language][`${key}_plural`]) {
        translation = translations[language][`${key}_plural`];
      }
      translation = translation.replace("{{count}}", options.count);
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
