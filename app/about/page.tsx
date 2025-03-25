import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Alumni Needs enables you to harness the power of your alumni network.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg">
            Seeking to engage all 'Alumni Of The Sacreds' in a mutually beneficial, lifelong connection to each other, their school, and encourage alumni support and guidance to advance The Sacreds's eminence for future generations.
          </p>
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/icons/logo.png"
            alt="Alumni Logo"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Demographics Section */}
      <section className="bg-muted/50 p-8 rounded-lg space-y-6">
        <h2 className="text-3xl font-bold">Demographics & History</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p>
              'Alumni Of The Sacreds' is the formal name for our family of over 4000 living The Sacreds graduates. Of these, the split of undergraduate degree (52.5%) and graduate degree holders (47.5%) is fairly even. Most alumni reside in India, but The Sacreds does have over 1000 alumni living abroad.
            </p>
            <p>
              In 2019 the various alumni organizations at The Sacreds joined together in a federation and branded it as 'Alumni Of The Sacreds'.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Key Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background rounded-lg text-center">
                <p className="text-3xl font-bold">4,000+</p>
                <p className="text-sm text-muted-foreground">Living Graduates</p>
              </div>
              <div className="p-4 bg-background rounded-lg text-center">
                <p className="text-3xl font-bold">1,000+</p>
                <p className="text-sm text-muted-foreground">International Alumni</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Trustees Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Alumni Trustees</h2>
        <div className="bg-muted/50 p-8 rounded-lg">
          <p className="text-lg">
            Fourteen of the School's trustees are nominated and elected through procedures established and administered by 'Alumni Of The Sacreds'. These alumni trustees reflect the overall diversity of The Sacreds's alumni population. The president of 'Alumni Of The Sacreds', Sini C. Joseph, C'87 also serves as an alumni trustee and in this capacity sits on the Trustees' Executive Committee.
          </p>
        </div>
      </section>

      {/* Structure Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Governance Structure</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Council of Representatives</h3>
            <p>Approximately 50 members representing all organized constituencies of the alumni.</p>
          </div>
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Board of Directors</h3>
            <p>About 65 members who conduct the business of 'Alumni Of The Sacreds' under its By-Laws.</p>
          </div>
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Executive Committee</h3>
            <p>9 members with full power to operate between Board meetings, subject to Board approval.</p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Our Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">The Sacreds Traditions</h3>
            <p>A comprehensive approach to student and young alumni development, creating early understanding of The Sacreds's institutional mission and traditions.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cultivate lifelong relationships with students</li>
              <li>Teach about The Sacreds' rich history</li>
              <li>Foster tradition and pride</li>
              <li>Promote class unity</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Alumni Education & Travel</h3>
            <p>Offering educational programs and travel opportunities that engage alumni worldwide, integrating faculty and alumni experts.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Interview Program</h3>
            <p>Alumni interviewers serve as ambassadors, helping prospective students learn about The Sacreds and assisting the Admissions Office.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Regional Clubs</h3>
            <p>A worldwide network providing intellectual, cultural, social, and networking events through 4 domestic and 4 international clubs.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Multicultural Outreach</h3>
            <p>Encouraging diverse alumni connections and engagement through various programs and initiatives.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Classes & Reunions</h3>
            <p>Organizing class-focused initiatives and quinquennial reunions for Old Guard, Core Alumni, and Young Alumni.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 p-8 rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold">4,025</p>
            <p className="text-muted-foreground">Members</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold">8,725</p>
            <p className="text-muted-foreground">Photos</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold">231+</p>
            <p className="text-muted-foreground">Events</p>
          </div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold">32+</p>
            <p className="text-muted-foreground">Awards</p>
          </div>
        </div>
      </section>

      {/* Executive Committee Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Executive Committee</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "BIJU GEORGE", image: "/images/executive/1.jpg" },
            { name: "JINSON S VELAMKUNNEL", image: "/images/executive/3.jpg" },
            { name: "SAJESH BABU BALAKRISHNAN", image: "/images/executive/4.jpg" },
            { name: "SINI C JOSEPH", image: "/images/executive/5.jpg" },
            { name: "MERLINE AUGUSTINE", image: "/images/executive/6.jpg" },
            { name: "SANUJA JOSEPH", image: "/images/executive/sanuja_joseph.jpg" }
          ].map((member) => (
            <div key={member.name} className="group">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-center">{member.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Communication Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Stay Connected</h2>

        {/* The Sacreds Gazette */}
        <div className="bg-muted/50 p-8 rounded-lg space-y-4">
          <h3 className="text-2xl font-semibold">The Sacreds Gazette</h3>
          <p className="text-lg">
            Our official alumni magazine, published three times per year, reaching ~240,000 readers with features, letters, and news about the School community. The magazine carries features, letters to the editor, and news about the School, faculty, students, and alumni.
          </p>
        </div>

        {/* Social Media */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Social Media Presence</h3>
            <p>Connect with thousands of alumni through:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>Instagram</li>
              <li>Frankly The Sacreds (daily blog)</li>
            </ul>
          </div>
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Marketing & Communications</h3>
            <p>Stay updated through various channels:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Proudly The Sacreds (annual resource guide)</li>
              <li>Red & Blue Online (bi-monthly newsletter)</li>
              <li>Homecoming Guide</li>
              <li>Alumni Weekend Guide</li>
              <li>Mobile apps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Alumni Awards</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Alumni Award of Merit</h3>
            <p>
              A celebration of The Sacreds's most passionate and dedicated alumni volunteers. These awards recognize outstanding service to the School of Sacred Heart, with recipients chosen by the Awards & Resolutions Committee.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Creative Spirit Award</h3>
            <p>
              Introduced in 2009, this award recognizes members who have demonstrated a life-long commitment to the arts through outstanding personal achievements or philanthropic support.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Groups Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Alumni Groups</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Diversity Alliance</h3>
            <p>
              Comprised of associations of different ethnic groups and women, working collectively to engage The Sacreds's diverse alumni and celebrate cultural identity and partnership.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">Shared Interest Groups</h3>
            <p>
              Groups of 50+ alumni who share common interests from their The Sacreds co-curricular activities or professional experiences, gathering around a central unifying purpose beyond class affiliation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}