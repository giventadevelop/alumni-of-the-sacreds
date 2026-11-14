'use client';

import Link from 'next/link';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type CookieChoice = 'accepted' | 'rejected';

const STORAGE_KEY = 'aos-cookie-consent';

type CookieConsentValue = {
  choice: CookieChoice | null;
  ready: boolean;
  openSettings: () => void;
};

const CookieConsentContext = createContext<CookieConsentValue | null>(null);

export function useCookieConsent(): CookieConsentValue {
  const value = useContext(CookieConsentContext);
  if (!value) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return value;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<CookieChoice | null>(null);
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const next = stored === 'accepted' || stored === 'rejected' ? stored : null;
    setChoice(next);
    setBannerOpen(next === null);
    setReady(true);
  }, []);

  const persist = (next: CookieChoice) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
    setBannerOpen(false);
  };

  const value = useMemo<CookieConsentValue>(
    () => ({
      choice,
      ready,
      openSettings: () => setBannerOpen(true),
    }),
    [choice, ready],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {bannerOpen ? (
        <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-gray-700 bg-gray-900 text-white shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <p className="text-sm text-gray-100">
              Alumni Of The Sacreds uses cookies. Advertising cookies from Google AdSense load only if you
              choose Accept. Read the{' '}
              <Link href="/privacy" className="underline hover:text-blue-300">
                privacy policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="underline hover:text-blue-300">
                terms
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                className="rounded-md border border-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                onClick={() => persist('rejected')}
              >
                Reject
              </button>
              <button
                type="button"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                onClick={() => persist('accepted')}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </CookieConsentContext.Provider>
  );
}
