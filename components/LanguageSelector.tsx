'use client';

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Lang } from '@/lib/i18n';
import { usePathname } from 'next/navigation';

type LanguageOption = {
  code: Lang;
  label: string;
  emoji: string;
};

const options: LanguageOption[] = [
  { code: 'en', label: 'English', emoji: '🇺🇸' },
  { code: 'ar', label: 'Arabic', emoji: '🇸🇦' },
  // Hindi hidden until translations are finalized
];

export default function LanguageSelector() {
  const { lang, setLang, hasChosen } = useLanguage();
  const pathname = usePathname();
  const onHome = pathname === '/' || pathname?.startsWith('/home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (onHome && lang !== 'en') {
      setLang('en');
    }
  }, [onHome, lang, setLang]);

  useEffect(() => {
    if (!hasChosen && !onHome) {
      setOpen(true);
    }
  }, [hasChosen, onHome]);

  if (onHome) {
    return null;
  }

  const selected = options.find((o) => o.code === lang) ?? options[0];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-md border border-slate-200 hover:-translate-y-0.5 transition"
      >
        <span>{selected?.emoji ?? '🌐'}</span>
        <span>{selected?.label ?? 'Language'}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-slate-200 p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Choose your language
              </div>
              <h3 className="text-2xl font-black text-slate-900">Arabic · English</h3>
              <p className="text-slate-600 text-sm">
                Arabic switches to right-to-left and places the sidebar on the right.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {options.map((option) => {
                const active = selected?.code === option.code;
                return (
                  <button
                    key={option.code}
                    onClick={() => {
                      setLang(option.code);
                      setOpen(false);
                    }}
                    className={`flex flex-col items-center gap-2 rounded-2xl border px-4 py-5 shadow-sm transition hover:-translate-y-1 ${
                      active
                        ? 'border-[#004165] bg-[#004165]/10 text-[#004165]'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-3xl" aria-hidden>
                      {option.emoji}
                    </span>
                    <span className="font-semibold">{option.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-full border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
