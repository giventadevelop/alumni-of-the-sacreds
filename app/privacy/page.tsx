import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Alumni Of The Sacreds',
  description:
    'Privacy policy for Alumni Of The Sacreds, the alumni association of Sacred Heart English Medium Higher Secondary School, Moolamattom.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 py-12">
      <article className="mx-auto max-w-3xl space-y-6 px-4 text-gray-800 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p>
          This policy describes how Alumni Of The Sacreds handles information on this website. Alumni Of
          The Sacreds is the alumni association of Sacred Heart English Medium Higher Secondary School
          (SHEMHSS), Moolamattom, Kerala 685 589, India.
        </p>
        <p>
          Contact: 29013shemhs@gmail.com, phone 04862 252001, Sacred Heart English Medium H.S.S,
          QRVW+X87, Moolamattom, Kerala 685 589, India.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Information you send us</h2>
        <p>
          If you use the contact form, we receive the name, email address, and message you submit so we
          can reply. That mail is delivered through our email provider. Do not send passwords or payment
          card numbers through the form.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Google AdSense</h2>
        <p>
          This site uses Google AdSense. Google may use cookies to serve ads and to measure how those ads
          perform. Those cookies can record that a browser visited this site and can be used to show ads
          that Google considers relevant. Ads that appear are Google ads. They are not offers from Alumni
          Of The Sacreds or from Sacred Heart English Medium Higher Secondary School.
        </p>
        <p>
          Google&apos;s own description of that data use is in the{' '}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-700 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Privacy Policy
          </a>
          . You can opt out of personalized advertising at{' '}
          <a
            href="https://adssettings.google.com"
            className="text-blue-700 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google ad settings
          </a>
          .
        </p>
        <p>
          Two different pieces of Google code are involved. The AdSense account script in the page head
          may be present before you choose Accept or Reject. That script identifies the site for AdSense.
          Advertising units, the boxes that display ads, load only after you choose Accept on the cookie
          banner. Reject leaves those units unloaded. You can change the choice later from Cookie settings
          in the footer.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">Cookies on this site</h2>
        <p>
          The cookie banner stores your Accept or Reject choice in local storage on your browser. We use
          that value only to decide whether to load ad units. The site does not run a sign-in account and
          does not sell personal information.
        </p>

        <p>
          Questions about this policy can be sent to 29013shemhs@gmail.com. See also the{' '}
          <Link href="/terms" className="text-blue-700 underline">
            terms of use
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
