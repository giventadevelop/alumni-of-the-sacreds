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

          {/* Mission Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold italic text-gray-600 font-mono">Alumni Of The Sacreds Relations</h2>
            <h3 className="text-2xl font-semibold mt-6 relative inline-block">
              MISSION
              <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></div>
            </h3>
            <p className="text-gray-600 text-lg font-mono leading-relaxed max-w-3xl mx-auto mt-4 italic text-justify">
              Seeking to engage all Alumni Of The Sacreds in a mutually beneficial, lifelong connection
              to each other, their school, and encourage alumni support and guidance to advance
              The Sacreds&apos;s eminence for future generations.
            </p>
          </div>

          {/* School Building Image */}
          <div className="mb-12">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/school-building.jpg"
                alt="Sacred Heart School Building"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Demographics Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Demographics, History, Purpose, and Structure</h3>
            <p className="mt-4 text-justify">
              Alumni Of The Sacreds is the formal name for our family of over 4000 living The Sacreds
              graduates. Of these, the split of undergraduate degree (52.5%) and graduate degree holders
              (47.5%) is fairly even. Most alumni reside in India, but The Sacreds does have over 1000
              alumni living abroad. Not surprisingly, the largest geographic concentration of our alumni
              is in the state of Kerala area.
            </p>
            <p className="mt-4 text-justify">
              In 2019 the various alumni organizations at The Sacreds (the clubs, the class, and the
              school societies, then known as departmental societies) joined together in a federation
              and then branded it as Alumni Of The Sacreds.
            </p>
            <p className="mt-4 text-justify">
              The objects and purposes of Alumni Of The Sacreds are to promote the interest and welfare
              of the School of The SH and its alumni; to inspire, develop and maintain the interest of
              the alumni in the School; to help alumni keep alive the friendships, associations and
              interests they formed as students at The SH; to foster giving to the School; to maintain
              close cooperation among alumni, officers and Trustees of the School and to establish a
              medium through which the alumni may support and advance the cause of higher education by
              the School; all of the foregoing to be consistent with the policies established by the
              Trustees of the School.
            </p>
          </div>

          {/* Governance Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Governance Structure</h3>
            <p className="mt-4 text-justify">
              The Alumni Of The Sacreds governance structure consists of three parts: the Council of
              Representatives, the Board of Directors, and the Executive Committee. The Council of
              Representatives, approximately 50 in number, is a microcosm of Alumni Of The Sacreds and
              has representation from all organized constituencies of the alumni. The management of
              Alumni Of The Sacreds is vested in the Board of Directors, approximately 65 in number,
              who conduct the business of Alumni Of The Sacreds under its By-Laws. Finally, an
              Executive Committee of 9 members has the power to operate with the full power of the
              Board between Board meetings; the Committee&apos;s actions, however, must be approved by
              the Board at its next meeting.
            </p>
          </div>

          {/* Alumni Trustees Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Alumni Trustees</h3>
            <p className="mt-4 text-justify">
              Fourteen of the School&apos;s trustees are nominated and elected through procedures
              established and administered by Alumni Of The Sacreds. These alumni trustees reflect
              the overall diversity of The Sacreds&apos;s alumni population. The president of
              Alumni Of The Sacreds, Sini C. Joseph, C&apos;87 also serves as an alumni trustee
              and in this capacity sits on the Trustees&apos; Executive Committee.
            </p>
          </div>

          {/* Traditions Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">The Sacreds Traditions: Building Our Community</h3>
            <p className="mt-4 text-justify">
              The Sacreds Traditions program is a comprehensive approach to student and young alumni
              development/alumni relations programming. The program is designed to:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Cultivate a lifelong relationship with our students</li>
              <li>Teach students about The Sacreds&apos; rich history and diverse traditions</li>
              <li>Foster tradition and pride</li>
              <li>Promote and inspire class unity</li>
              <li>Offer opportunities for direct communication between students and alumni</li>
              <li>Educate students about institutional strengths and challenges</li>
              <li>Keep young alumni engaged and connected to The Sacreds after graduation</li>
            </ul>
          </div>

          {/* Programs Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Programs and Initiatives</h3>

            <div className="mt-6">
              <h4 className="text-xl font-medium">Alumni Education, Travel and Career Networking</h4>
              <p className="mt-2 text-justify">
                The Director of Alumni Education, Travel and Career Networking designs and implements
                educational programs that engage alumni worldwide. The Travel program offers alumni
                opportunities to travel globally while maintaining intellectual and social connections
                with The Sacreds.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-medium">Classes & Reunions</h4>
              <p className="mt-2 text-justify">
                The Classes & Reunions team coordinates class-focused initiatives and the two largest
                alumni events: Homecoming and Alumni Weekend. Alumni are categorized as Old Guard
                (20+ years), Core Alumni (10-20 years), and Young Alumni (0-10 years).
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-medium">Regional Clubs</h4>
              <p className="mt-2 text-justify">
                From Moolamattom to North America, our Regional Club network provides year-round
                intellectual, cultural, and social events through 4 domestic and 4 international clubs.
              </p>
            </div>
          </div>

          {/* Communications Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Communications</h3>

            <div className="mt-6">
              <h4 className="text-xl font-medium">The Sacreds Gazette</h4>
              <p className="mt-2 text-justify">
                Our official alumni magazine, published three times per year, reaches ~240,000 readers
                with features, letters, and comprehensive news about our community.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-medium">Social Media</h4>
              <p className="mt-2 text-justify">
                Active presence across major platforms including Facebook, LinkedIn, Twitter, YouTube,
                Instagram, and iTunesU. Our daily blog, Frankly The Sacreds, provides regular updates.
              </p>
            </div>
          </div>

          {/* Interview Program Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Alumni Interview Program</h3>
            <p className="mt-4 text-justify">
              Alumni interviewers help high school students learn more about The Sacreds, and they help
              the Admissions Office learn more about applicants to the School. The Sacreds&apos;s alumni
              interviewers serve as ambassadors in their local communities, providing crucial assistance
              to the Undergraduate Admissions Office as they work to select the next generation of
              The Sacreds&apos; students. Although members are involved in a variety of activities, the
              primary goal of the Alumni Interview Program is to offer an interview to every student who
              applies as a prospective undergraduate.
            </p>
          </div>

          {/* Multicultural Outreach Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Multicultural Outreach</h3>
            <p className="mt-4 text-justify">
              The Multicultural Outreach team in Alumni Relations works to encourage alumni of color
              and LGBT alumni to find and maintain meaningful connections and active engagement with
              The Sacreds. This staff team works closely with the Co-Chairs as well as the leaders
              of each member organization in the Alumni Diversity Alliance. The team generates new
              opportunities for diverse alumni to interact based on common interests.
            </p>
            <p className="mt-4 text-justify">
              The Sacreds Spectrum, a weekend long conference dedicated to diversity and community,
              is managed by this team. The team also works with the Global Alumni Network,
              The Sacreds Traditions, Classes & Reunions and Alumni Education teams to increase
              diverse alumni participation and leadership.
            </p>
          </div>

          {/* Alumni Groups Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Alumni Groups</h3>
            <div className="mt-4">
              <h4 className="text-xl font-medium">Alumni Diversity Alliance</h4>
              <p className="mt-2 text-justify">
                Comprised of the Association of different ethnic groups and women, the Alumni
                Diversity Alliance organizations work individually and collectively to engage
                The Sacreds&apos;s diverse alumni and celebrate cultural identity and partnership.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-medium">Trustees&apos; Council of The Sacreds Women (TCPW)</h4>
              <p className="mt-2 text-justify">
                Founded in 1987, TCPW is a national network of The Sacreds alumnae who support,
                foster and promote the advancement of women&apos;s issues with the School. Membership
                is through a nomination process and is limited to 170 The Sacreds alumnae.
              </p>
            </div>
          </div>

          {/* Shared Interest Groups Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Shared Interest Groups</h3>
            <p className="mt-4 text-justify">
              The Sacreds Shared Interest Groups are groups of 50 or more alumni who share common
              interests arising from their The Sacreds co-curricular activities or professional
              career experience and desire to affiliate with each other as a subgroup of Alumni.
              These groups actively engage in communicating and/or gathering around a central
              unifying purpose, mission, background or activity beyond class affiliation,
              cultural affiliation or regional proximity.
            </p>
          </div>

          {/* Marketing & Communications Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">Marketing & Communications</h3>
            <p className="mt-4 text-justify">
              Coordinates the production and distribution of Alumni and Alumni Relations
              communication vehicles such as websites, guides, newsletters, podcasts, invitations,
              and other print and electronic materials, e.g., Proudly The Sacreds (annual alumni
              resource guide), Red & Blue Online (bi-monthly electronic newsletter), and the
              &quot;Homecoming Guide&quot; and &quot;Alumni Weekend Guide.&quot;
            </p>
          </div>

          {/* Awards Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">The Alumni Award of Merit and The Creative Spirit Award</h3>
            <p className="mt-4 text-justify">
              The Alumni Award of Merit Gala, sponsored by Alumni Of The Sacreds, is a celebration
              of The Sacreds&apos;s most passionate and dedicated alumni volunteers. These awards
              are given for outstanding service to the School of Sacred Heart. The Alumni Award of
              Merit and Young Alumni recipients are chosen by Alumni Awards & Resolutions Committee,
              which is comprised of former winners. The Club Award recipient is chosen by the Global
              Alumni Network Advisory Board. The Class Award recipients are chosen by the Alumni
              Class Leadership Council.
            </p>
            <p className="mt-4 text-justify">
              In keeping with the Arts at The Sacreds theme for Homecoming festivities, in 2009,
              the Alumni Award of Merit Gala featured a new award: The Sacreds Creative Spirit Award.
              This award recognizes a member of the The Sacreds community who has illustrated a
              life-long commitment to the arts through outstanding personal achievements and/or
              philanthropic support. The award was created as part of The Sacreds&apos;s heightened
              commitment to promoting its arts and culture offerings, through the 2019 academic theme
              &quot;Arts and the City&quot; and the re-conceptualized Homecoming Weekend.
            </p>
          </div>

          {/* About School Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold">About the School</h3>
            <p className="mt-4 text-justify">
              Sacred Heart English Medium Higher Secondary School Moolamattom is affiliated to C.B.S.E,
              Delhi is a premier minority educational institution established and administrated under
              SH Congregation. Staff are dedicated to imparting the highest standards of education
              and the holistic nurturing of students.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="space-y-2">
            <p className="text-justify">Phone: 04862 252001</p>
            <p className="text-justify">Email: 29013shemhs@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}