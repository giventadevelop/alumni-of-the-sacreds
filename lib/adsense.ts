/** Shared Giventa owner account. Ad units still need a numeric slot id for this site. */
export const ADSENSE_CLIENT = 'ca-pub-1016198353275904';

export const ADSENSE_ADS_TXT_LINE =
  'google.com, pub-1016198353275904, DIRECT, f08c47fec0942fa0';

/**
 * Region → numeric AdSense slot. `footer_strip` can also be set with
 * NEXT_PUBLIC_ADSENSE_FOOTER_SLOT. Empty until a real ad unit exists.
 */
const PLACEMENTS: Record<string, string | undefined> = {
  footer_strip: process.env.NEXT_PUBLIC_ADSENSE_FOOTER_SLOT,
  sidebar: process.env.NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT,
  between_sections: process.env.NEXT_PUBLIC_ADSENSE_BETWEEN_SLOT,
  article_inline: process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT,
};

export function slotForRegion(region: string): string | null {
  const value = (PLACEMENTS[region] ?? '').trim();
  return /^\d+$/.test(value) ? value : null;
}
