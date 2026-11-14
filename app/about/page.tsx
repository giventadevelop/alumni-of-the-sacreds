import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>

      <div className="space-y-12 border-2 border-gray-200 rounded-lg p-8 shadow-sm">
        {/* Main Content */}
        <section className="prose max-w-none">
          <h1 className="text-4xl font-bold mb-8">ESTD of This Alumni Association</h1>

          <h2 className="text-3xl font-bold italic mb-8 text-orange-500">Alumni Of The Sacreds Relations</h2>

          {/* Mission Section with Background Image */}
          <div className="relative w-full h-[870px] mb-8">
            <img
              src="/images/school-building.jpg"
              alt="Sacred Heart English Medium HSS"
              className="absolute inset-0 w-full h-full object-cover brightness-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/20"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-8 py-12">
              <h3 className="text-2xl font-semibold mb-4 relative inline-block text-white/90">
                MISSION
                <div className="absolute bottom-0 left-0 w-[85px] h-1 bg-orange-500"></div>
              </h3>
              <p className="text-lg font-mono leading-relaxed max-w-3xl text-white/80">
                Seeking to engage all Alumni Of The Sacreds in a mutually beneficial, lifelong connection
                to each other, their school, and encourage alumni support and guidance to advance
                The Sacreds&apos;s eminence for future generations.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold">The Association</h3>
            <p className="mt-4 text-justify">
              Alumni Of The Sacreds is the alumni association of Sacred Heart English Medium Higher
              Secondary School, Moolamattom. Members also call the community The Sacreds. The association
              keeps former students in touch with the school and with each other, and it is how alumni
              support students who are still in school.
            </p>
            <p className="mt-4 text-justify">
              Alumni gathered for the inauguration at the school on 29 April 2019. Later gatherings
              include the Alumni Annual Meet on 15 December 2023 and the school Golden Jubilee
              celebration on 19 January 2024. On the day of the inauguration the association also
              honored Rev. Sr. Johnes, founder of SHEMHSS.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold">About the School</h3>
            <p className="mt-4 text-justify">
              Sacred Heart English Medium Higher Secondary School Moolamattom is affiliated to C.B.S.E,
              Delhi is a premier minority educational institution established and administrated under
              SH Congregation. Staff are dedicated to imparting the highest standards of education
              and the holistic nurturing of students.
            </p>
            <p className="mt-4 text-justify">
              The school is in Moolamattom, in the Arakulam panchayat, Kerala 685 589, India.
              Sr. Daisy is the principal.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold">What Alumni Support</h3>
            <p className="mt-4 text-justify">
              Alumni Of The Sacreds raises scholarships for students who do well in school and take
              part in civic life, helps current students, and works with the Moolamattom community.
              The executive committee shown on this page carries that work: Biju George, Jinson S.
              Velamkunnel, Sajesh Babu Balakrishnan, Sini C. Joseph, Merline Augustine, and Sanuja Joseph.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p className="text-justify">
              Alumni Of The Sacreds<br />
              Sacred Heart English Medium H.S.S<br />
              QRVW+X87, Moolamattom<br />
              Kerala 685 589, India
            </p>
            <p className="text-justify">Phone: 04862 252001</p>
            <p className="text-justify">Email: 29013shemhs@gmail.com</p>
          </div>
        </section>

        {/* Executive Committee Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Executive Committee</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Biju George */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/img/executive/1.jpg"
                    alt="Biju George"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">BIJU GEORGE</h3>
              </div>

              {/* Jinson S Velamkunnel */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/img/executive/3.jpg"
                    alt="Jinson S Velamkunnel"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">JINSON S VELAMKUNNEL</h3>
              </div>

              {/* Sajesh Babu Balakrishnan */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/img/executive/4.jpg"
                    alt="Sajesh Babu Balakrishnan"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">SAJESH BABU BALAKRISHNAN</h3>
              </div>

              {/* Sini C Joseph */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/img/executive/5.jpg"
                    alt="Sini C Joseph"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">SINI C JOSEPH</h3>
              </div>

              {/* Merline Augustine */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/img/executive/6.jpg"
                    alt="Merline Augustine"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">MERLINE AUGUSTINE</h3>
              </div>

              {/* Sanuja Joseph */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/img/executive/sanuja_joseph.jpg"
                    alt="Sanuja Joseph"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">SANUJA JOSEPH</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}