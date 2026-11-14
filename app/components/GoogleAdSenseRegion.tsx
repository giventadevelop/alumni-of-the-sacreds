'use client';

import { useEffect } from 'react';
import { useCookieConsent } from '@/app/components/CookieConsent';
import { ADSENSE_CLIENT, slotForRegion } from '@/lib/adsense';

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function GoogleAdSenseRegion({ region }: { region: string }) {
  const { choice } = useCookieConsent();
  const slot = slotForRegion(region);
  const show = choice === 'accepted' && Boolean(slot);

  useEffect(() => {
    if (!show) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // The ownership script in the document head can reject a second push in dev.
    }
  }, [show, slot]);

  if (!show || !slot) return null;

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
