import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (esText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const detectLanguage = (): Language => {
  if (typeof window === 'undefined') return 'es';

  // 1. Check URL path, search or hash
  const pathname = window.location.pathname.toLowerCase();
  const search = window.location.search.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (pathname.includes('/en') || search.includes('lang=en') || hash.includes('lang=en') || hash === '#en') {
    return 'en';
  }

  // 2. Check LocalStorage
  const savedLang = localStorage.getItem('avialo-lang') as Language | null;
  if (savedLang === 'es' || savedLang === 'en') {
    return savedLang;
  }

  // 3. Detect device/browser language
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage;
  if (browserLang && browserLang.toLowerCase().startsWith('en')) {
    return 'en';
  }

  return 'es';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(detectLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('avialo-lang', lang);
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('avialo-lang', newLang);
    if (typeof window !== 'undefined') {
      const newPath = newLang === 'en' ? '/en/' : '/';
      if (window.history.pushState) {
        window.history.pushState(null, '', newPath);
      }
    }
  };

  const toggleLanguage = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const t = (esText: string, enText: string): string => {
    return lang === 'en' ? enText : esText;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
