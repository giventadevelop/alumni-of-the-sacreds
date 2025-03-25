import { Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="space-y-8 py-8">
      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-mono tracking-wider">ESTD of This Alumni Association</h2>
            <h3 className="text-2xl font-mono">'Alumni Of The Sacreds' Relations</h3>
            <h4 className="text-xl font-mono border-b-4 border-amber-500 inline-block">MISSION</h4>
          </div>
          <div className="space-y-6 border-l-4 border-gray-300 pl-6">
            <p className="text-gray-600 text-lg font-mono leading-relaxed max-w-3xl mx-auto">
              Seeking to engage all 'Alumni Of The Sacreds' in a mutually beneficial, lifelong connection to each other, their school, and encourage alumni support and guidance to advance The Sacreds' eminence for future generations.
            </p>

            <p className="text-gray-600 text-lg font-mono leading-relaxed max-w-3xl mx-auto">
              SHEMHSS Moolamattom alumni community also called "Alumni Of The Sacreds" or "The Sacreds" in short is a great way to stay in touch with SHEMHSS and your classmates.
            </p>

          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Upcoming Events</h2>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600">No events scheduled</p>
          </div>
        </div>
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
            <p className="text-gray-600 text-sm">
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
            <p className="text-gray-600 text-sm">
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
            <p className="text-gray-600 text-sm">
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