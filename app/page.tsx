import { Calendar } from 'lucide-react';
import Image from 'next/image';
import UpcomingEvents from './components/UpcomingEvents';

export default function Home() {
  return (
    <div className="space-y-8 py-8">
      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-mono tracking-wider">ESTD of This Alumni Association</h2>
            <h3 className="text-2xl font-mono">'Alumni Of The Sacreds' Relations</h3>
            <h4 className="text-xl font-mono border-b-4 border-amber-500 inline-block">MISSION</h4>
          </div>
          <div className="space-y-6 border-l-4 border-gray-300 pl-6">
            <p className="text-gray-600 text-lg font-mono leading-relaxed max-w-3xl mx-auto">
              Seeking to engage all 'Alumni Of The Sacreds' in a mutually beneficial, lifelong connection to each other, their school, and encourage alumni support and guidance to advance The Sacreds' eminence for future generations.
            </p>

            {/* Logo */}
            <div className="flex justify-center py-8">
              <Image
                src="/images/logo.png"
                alt="Sacred Heart Logo"
                width={400}
                height={400}
                className="mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-gray-600 text-lg font-mono leading-relaxed max-w-3xl mx-auto">
              <span className="text-2xl font-bold italic bg-orange-500 text-white px-3 py-1 rounded-md">
                SHEMHSS Moolamattom
              </span> alumni community also called "Alumni Of The Sacreds" or "The Sacreds" in short is a great way to stay in touch with SHEMHSS and your classmates.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <UpcomingEvents />

      {/* Principal's Message */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="relative w-64 h-80 mx-auto">
                <Image
                  src="/img/slider/sr_daisy_hm.jpg"
                  alt="Principal Sr. Daisy"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-3xl font-serif text-gray-800 mb-4">
                Principal&apos;s message to &quot;Alumni Of The Sacreds&quot;
              </h2>
              <blockquote className="relative">
                <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 text-gray-200 text-6xl">"</div>
                <p className="text-gray-700 text-lg italic leading-relaxed relative z-10 font-serif">
                  An alumnus is also an asset to this institution in the sense that he/she gives something back to enrich the institution in terms of
                  experiences shared or expertise volunteered, he or she also is an ambassador of the school who disseminates the values and ideals this
                  school stands for and propagates these values over generations by being a model to the young.
                </p>
                <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 text-gray-200 text-6xl">"</div>
              </blockquote>
              <div className="text-right">
                <p className="text-gray-600 font-semibold">Sr. Daisy</p>
                <p className="text-gray-500 text-sm">Principal, SHEMHSS Moolamattom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent z-0"></div>
      </section>

      {/* Our Responsibility */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Responsibility</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex justify-center">
              <Image
                src="/images/scholarship.png"
                alt="Scholarship"
                width={48}
                height={48}
                className="mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Scholarship</h3>
            <p className="text-gray-600 text-sm text-justify">
              Scholarships for academically talented students. Low-income students who excel in secondary school qualify for scholarships that reward good grades and civic participation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex justify-center">
              <Image
                src="/images/help-students.png"
                alt="Help Current Students"
                width={48}
                height={48}
                className="mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Help Current Students</h3>
            <p className="text-gray-600 text-sm text-justify">
              We believe that young people deserve the resources and support to succeed based on their talent, intelligence, and capabilities. We seek out students with great potential, but unequal opportunity, and partner with them to ensure their success in school, work, and life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex justify-center">
              <Image
                src="/images/community.png"
                alt="Build Our Community"
                width={48}
                height={48}
                className="mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Build Our Community</h3>
            <p className="text-gray-600 text-sm text-justify">
              Help Arakulam panchayat community where leaders and teams can connect, communicate, and collaborate on the issues and challenges that are essential to the growth and success of the Moolamattom community.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`/images/gallery/gallery-${num}.jpg`}
                  alt={`Gallery image ${num}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Promo */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">School Alumni Provide <span className="text-yellow-300">Scholarship</span> For Talented Student!</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need academic, relocation, career, projects, mentorship, etc you can ask the community and get support.
          </p>
        </div>
      </section>
    </div>
  );
}