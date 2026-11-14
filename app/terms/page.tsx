import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | Alumni Of The Sacreds',
  description:
    'Terms of use for the Alumni Of The Sacreds website of Sacred Heart English Medium Higher Secondary School, Moolamattom.',
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <article className="mx-auto max-w-3xl space-y-6 px-4 text-gray-800 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900">Terms of Use</h1>
        <p>
          This website is published by Alumni Of The Sacreds, the alumni association of Sacred Heart
          English Medium Higher Secondary School, Moolamattom, Kerala 685 589, India. By using the site
          you agree to these terms.
        </p>
        <p>
          The pages describe the association, the school, alumni gatherings, and the photo gallery. Event
          dates and committee names are published for information. Contact the association at
          29013shemhs@gmail.com or 04862 252001 if a detail needs correction.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900">Advertising</h2>
        <p>
          Third-party ads on this site are delivered by Google AdSense. They are not the association&apos;s
          own offers, and they are not offers of Sacred Heart English Medium Higher Secondary School.
          How Google uses cookies for those ads is described in our{' '}
          <Link href="/privacy" className="text-blue-700 underline">
            privacy policy
          </Link>
          .
        </p>
        <h2 className="text-2xl font-semibold text-gray-900">Use of the site</h2>
        <p>
          You may read the pages and share links to them. You may not copy the site into another product,
          misuse the contact form, or attempt to disrupt the site. Photos and text remain the property of
          their owners, including the school and the people who provided alumni photographs.
        </p>
        <p>
          These terms apply to this website only. The school&apos;s own academic rules are separate.
        </p>
      </article>
    </div>
  );
}
