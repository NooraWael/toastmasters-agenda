'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Lang } from '@/lib/i18n';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isRTL: boolean;
  hasChosen: boolean;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const LANG_KEY = 'tm-lang';

function applyLanguage(lang: Lang) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
  const isRTL = lang === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  if (isRTL) {
    document.body.classList.add('rtl');
  } else {
    document.body.classList.remove('rtl');
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [hasChosen, setHasChosen] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && (localStorage.getItem(LANG_KEY) as Lang | null)) || null;
    const initial = stored ?? 'en';
    setLangState(initial);
    setHasChosen(!!stored);
    applyLanguage(initial);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem(LANG_KEY, next);
    setHasChosen(true);
    applyLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRTL: lang === 'ar', hasChosen }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
