'use client';

import { Calendar } from 'lucide-react';
import Image from 'next/image';
import UpcomingEvents from './components/UpcomingEvents';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Gallery data for the home page thumbnails
const galleryData = {
  alumni_inauguration: {
    id: 'alumni_inauguration',
    name: 'Alumni Inauguration',
    thumbnail: '/images/gallery/alumni_inauguration_2019/thumbnail.jpg',
    images: [
      { id: 'inaug_1', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_6-33-59_AM.jpeg', title: 'Inauguration Ceremony 1' },
      { id: 'inaug_2', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_6-34-54_AM.jpeg', title: 'Inauguration Ceremony 2' },
      { id: 'inaug_3', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_6-35-29_AM.jpeg', title: 'Inauguration Ceremony 3' },
      { id: 'inaug_4', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_6-53-20_AM.jpeg', title: 'Inauguration Ceremony 4' },
      { id: 'inaug_5', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_6-53-59_AM.jpeg', title: 'Inauguration Ceremony 5' },
      { id: 'inaug_6', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_6-57-26_AM.jpeg', title: 'Inauguration Ceremony 6' },
      { id: 'inaug_7', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_7-45-12_AM.jpeg', title: 'Inauguration Ceremony 7' },
      { id: 'inaug_8', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-00-55_AM.jpeg', title: 'Inauguration Ceremony 8' },
      { id: 'inaug_9', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-03-43_AM.jpeg', title: 'Inauguration Ceremony 9' },
      { id: 'inaug_10', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-03-54_AM.jpeg', title: 'Inauguration Ceremony 10' },
      { id: 'inaug_11', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-00_AM.jpeg', title: 'Inauguration Ceremony 11' },
      { id: 'inaug_12', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-06_AM.jpeg', title: 'Inauguration Ceremony 12' },
      { id: 'inaug_13', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-15_AM.jpeg', title: 'Inauguration Ceremony 13' },
      { id: 'inaug_14', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-20_AM.jpeg', title: 'Inauguration Ceremony 14' },
      { id: 'inaug_15', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-22_AM.jpeg', title: 'Inauguration Ceremony 15' },
      { id: 'inaug_16', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-24_AM.jpeg', title: 'Inauguration Ceremony 16' },
      { id: 'inaug_17', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-26_AM.jpeg', title: 'Inauguration Ceremony 17' },
      { id: 'inaug_18', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-28_AM.jpeg', title: 'Inauguration Ceremony 18' },
      { id: 'inaug_19', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-30_AM.jpeg', title: 'Inauguration Ceremony 19' },
      { id: 'inaug_20', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-31_AM.jpeg', title: 'Inauguration Ceremony 20' },
      { id: 'inaug_21', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-34_AM.jpeg', title: 'Inauguration Ceremony 21' },
      { id: 'inaug_22', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-37_AM.jpeg', title: 'Inauguration Ceremony 22' },
      { id: 'inaug_23', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-39_AM.jpeg', title: 'Inauguration Ceremony 23' },
      { id: 'inaug_24', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-40_AM.jpeg', title: 'Inauguration Ceremony 24' },
      { id: 'inaug_25', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-41_AM.jpeg', title: 'Inauguration Ceremony 25' },
      { id: 'inaug_26', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-46_AM.jpeg', title: 'Inauguration Ceremony 26' },
      { id: 'inaug_27', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-50_AM.jpeg', title: 'Inauguration Ceremony 27' },
      { id: 'inaug_28', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-52_AM.jpeg', title: 'Inauguration Ceremony 28' },
      { id: 'inaug_29', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-55_AM.jpeg', title: 'Inauguration Ceremony 29' },
      { id: 'inaug_30', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-04-57_AM.jpeg', title: 'Inauguration Ceremony 30' },
      { id: 'inaug_31', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-05-00_AM.jpeg', title: 'Inauguration Ceremony 31' },
      { id: 'inaug_32', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-05-02_AM.jpeg', title: 'Inauguration Ceremony 32' },
      { id: 'inaug_33', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-05-06_AM.jpeg', title: 'Inauguration Ceremony 33' },
      { id: 'inaug_34', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-05-09_AM.jpeg', title: 'Inauguration Ceremony 34' },
      { id: 'inaug_35', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-28_8-05-10_AM.jpeg', title: 'Inauguration Ceremony 35' },
      { id: 'inaug_36', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_8-56-49_PM.jpeg', title: 'Inauguration Ceremony 36' },
      { id: 'inaug_37', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-10-51_PM.jpeg', title: 'Inauguration Ceremony 37' },
      { id: 'inaug_38', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-11-52_PM.jpeg', title: 'Inauguration Ceremony 38' },
      { id: 'inaug_39', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-12-54_PM.jpeg', title: 'Inauguration Ceremony 39' },
      { id: 'inaug_40', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-14-56_PM.jpeg', title: 'Inauguration Ceremony 40' },
      { id: 'inaug_41', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-15-59_PM.jpeg', title: 'Inauguration Ceremony 41' },
      { id: 'inaug_42', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-16-00_PM.jpeg', title: 'Inauguration Ceremony 42' },
      { id: 'inaug_43', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-17-49_PM.jpeg', title: 'Inauguration Ceremony 43' },
      { id: 'inaug_44', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-18-49_PM.jpeg', title: 'Inauguration Ceremony 44' },
      { id: 'inaug_45', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-19-04_PM.jpeg', title: 'Inauguration Ceremony 45' },
      { id: 'inaug_46', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-20-06_PM.jpeg', title: 'Inauguration Ceremony 46' },
      { id: 'inaug_47', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-49_PM.jpeg', title: 'Inauguration Ceremony 47' },
      { id: 'inaug_48', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-50_PM.jpeg', title: 'Inauguration Ceremony 48' },
      { id: 'inaug_49', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-51_PM.jpeg', title: 'Inauguration Ceremony 49' },
      { id: 'inaug_50', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-52_PM.jpeg', title: 'Inauguration Ceremony 50' },
      { id: 'inaug_51', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-53_PM.jpeg', title: 'Inauguration Ceremony 51' },
      { id: 'inaug_52', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-54_PM.jpeg', title: 'Inauguration Ceremony 52' },
      { id: 'inaug_53', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-55_PM.jpeg', title: 'Inauguration Ceremony 53' },
      { id: 'inaug_54', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-56_PM.jpeg', title: 'Inauguration Ceremony 54' },
      { id: 'inaug_55', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-57_PM.jpeg', title: 'Inauguration Ceremony 55' },
      { id: 'inaug_56', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-58_PM.jpeg', title: 'Inauguration Ceremony 56' },
      { id: 'inaug_57', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-56-59_PM.jpeg', title: 'Inauguration Ceremony 57' },
      { id: 'inaug_58', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-57-00_PM.jpeg', title: 'Inauguration Ceremony 58' },
      { id: 'inaug_59', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-57-01_PM.jpeg', title: 'Inauguration Ceremony 59' },
      { id: 'inaug_60', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-57-02_PM.jpeg', title: 'Inauguration Ceremony 60' },
      { id: 'inaug_61', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-57-03_PM.jpeg', title: 'Inauguration Ceremony 61' },
      { id: 'inaug_62', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-57-04_PM.jpeg', title: 'Inauguration Ceremony 62' },
      { id: 'inaug_63', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-57-05_PM.jpeg', title: 'Inauguration Ceremony 63' },
      { id: 'inaug_64', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-30_9-57-06_PM.jpeg', title: 'Inauguration Ceremony 64' },
      { id: 'inaug_65', src: '/images/gallery/alumni_inauguration_2019/WhatsApp_2019-04-31_9-21-49_PM.jpeg', title: 'Inauguration Ceremony 65' },
      { id: 'inaug_66', src: '/images/gallery/alumni_inauguration_2019/nuns_line_up.jpg', title: 'Nuns Line Up' }
    ]
  },
  old_batches: {
    id: 'old_batches_group_photos',
    name: 'Old Batches',
    thumbnail: '/images/gallery/old_batches_group_photos/thumbnail.jpg',
    images: [
      { id: 'old_1', src: '/images/gallery/old_batches_group_photos/1985_1986_1st_standard.jpg', title: '1985-1986 1st Standard' },
      { id: 'old_2', src: '/images/gallery/old_batches_group_photos/1990_Batch_Girls_with_Maria_Teacher.jpeg', title: '1990 Batch Girls with Maria Teacher' },
      { id: 'old_3', src: '/images/gallery/old_batches_group_photos/1993_sslc_batch_in_4th_standard.jpg', title: '1993 SSLC Batch in 4th Standard' },
      { id: 'old_4', src: '/images/gallery/old_batches_group_photos/1995_sslc_batch.jpg', title: '1995 SSLC Batch' },
      { id: 'old_5', src: '/images/gallery/old_batches_group_photos/2006_2007_batch.jpg', title: '2006-2007 Batch' },
      { id: 'old_6', src: '/images/gallery/old_batches_group_photos/arts_fest_winners_shared_by_monci_chechi.jpg', title: 'Arts Fest Winners' }
    ]
  }
};

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<'alumni_inauguration' | 'old_batches' | null>(null);

  const handleGalleryClick = (galleryKey: 'alumni_inauguration' | 'old_batches') => {
    setSelectedGallery(galleryKey);
    setLightboxOpen(true);
  };

  const selectedGalleryImages = selectedGallery
    ? galleryData[selectedGallery].images.map(img => ({
      src: img.src,
      alt: img.title,
      title: img.title
    }))
    : [];

  return (
    <div className="space-y-8 py-8">
      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Sacred Heart Alumni Association</h1>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Gallery</h2>
            <a
              href="/gallery"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Galleries
              <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(galleryData).map(([key, gallery]) => (
              <div
                key={key}
                className="relative group cursor-pointer"
                onClick={() => handleGalleryClick(key as 'alumni_inauguration' | 'old_batches')}
              >
                <div className="relative h-64 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={gallery.thumbnail}
                    alt={gallery.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-xl font-semibold mb-2">{gallery.name}</h3>
                      <div className="flex items-center justify-center gap-2">
                        <img
                          src="/images/gallery/zoom-icon.png"
                          alt="View Gallery"
                          className="w-6 h-6 opacity-75"
                        />
                        <p className="text-white/90 text-sm">Click to view gallery</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && selectedGallery && (
        <Lightbox
          open={lightboxOpen}
          close={() => {
            setLightboxOpen(false);
            setSelectedGallery(null);
          }}
          slides={selectedGalleryImages}
          render={{
            slide: ({ slide }) => (
              <img
                src={slide.src}
                alt={slide.alt || ''}
                className="max-h-[90vh] max-w-[90vw] object-contain"
              />
            )
          }}
        />
      )}

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