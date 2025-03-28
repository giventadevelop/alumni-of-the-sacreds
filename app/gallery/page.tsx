'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Gallery data
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
    name: 'Early Batches',
    thumbnail: '/images/gallery/old_batches_group_photos/thumbnail.jpg',
    images: [
      { id: 'old_1', src: '/images/gallery/old_batches_group_photos/1985_1986_1st_standard.jpg', title: '1985-1986 1st Standard' },
      { id: 'old_2', src: '/images/gallery/old_batches_group_photos/1990_Batch_Girls_with_Maria_Teacher.jpeg', title: '1990 Batch Girls with Maria Teacher' },
      { id: 'old_3', src: '/images/gallery/old_batches_group_photos/1993_sslc_batch_in_4th_standard.jpg', title: '1993 SSLC Batch in 4th Standard' },
      { id: 'old_4', src: '/images/gallery/old_batches_group_photos/1995_sslc_batch.jpg', title: '1995 SSLC Batch' },
      { id: 'old_5', src: '/images/gallery/old_batches_group_photos/2006_2007_batch.jpg', title: '2006-2007 Batch' },
      { id: 'old_6', src: '/images/gallery/old_batches_group_photos/arts_fest_winners_shared_by_monci_chechi.jpg', title: 'Arts Fest Winners' }
    ]
  },
  golden_jubilee: {
    id: 'golden_jubilee_50_years',
    name: 'Golden Jubilee - 50 Years',
    thumbnail: '/images/gallery/golden_jubilee_50_years/thumbnail.jpg',
    images: [
      { id: 'jubilee_1', src: '/images/gallery/golden_jubilee_50_years/50_years_golden.jpg', title: '50 Years Celebration' },
      { id: 'jubilee_2', src: '/images/gallery/golden_jubilee_50_years/50_years_golden_1.jpg', title: 'Golden Jubilee' },
      { id: 'jubilee_3', src: '/images/gallery/golden_jubilee_50_years/school_building.jpg', title: 'School Building' },
      { id: 'jubilee_4', src: '/images/gallery/golden_jubilee_50_years/school_logo.jpg', title: 'School Logo' }
    ]
  },
  current_school: {
    id: 'current_school_picture_gallery',
    name: 'Current School Pictures',
    thumbnail: '/images/gallery/current_school_picture_gallery/thumbnail.jpg',
    images: [
      { id: 'current_1', src: '/images/gallery/current_school_picture_gallery/10174981_1492555470974716_1522533887719606694_n.jpg', title: 'School View 1' },
      { id: 'current_2', src: '/images/gallery/current_school_picture_gallery/10338601_1490018077895122_1870563400726281257_o.jpg', title: 'School View 2' },
      { id: 'current_3', src: '/images/gallery/current_school_picture_gallery/45693869_2303101006586821_7950056534447226880_n.jpg', title: 'School View 3' },
      { id: 'current_4', src: '/images/gallery/current_school_picture_gallery/46102151_2305619839668271_5548366296321622016_n.jpg', title: 'School View 4' },
      { id: 'current_5', src: '/images/gallery/current_school_picture_gallery/46310172_2305652962998292_1659246944205144064_n.jpg', title: 'School View 5' },
      { id: 'current_6', src: '/images/gallery/current_school_picture_gallery/46445835_2308914792672109_6793967521524350976_n.jpg', title: 'School View 6' },
      { id: 'current_7', src: '/images/gallery/current_school_picture_gallery/46447629_2309018222661766_7622158999990829056_n.jpg', title: 'School View 7' },
      { id: 'current_8', src: '/images/gallery/current_school_picture_gallery/46452385_2308915939338661_2167152489386737664_n.jpg', title: 'School View 8' },
      { id: 'current_9', src: '/images/gallery/current_school_picture_gallery/46988697_2316141245282797_7453215022588624896_n.jpg', title: 'School View 9' },
      { id: 'current_10', src: '/images/gallery/current_school_picture_gallery/47022044_2316140941949494_1453446211758456832_n.jpg', title: 'School View 10' },
      { id: 'current_11', src: '/images/gallery/current_school_picture_gallery/47295551_2315290208701234_2487990626616868864_o.jpg', title: 'School View 11' },
      { id: 'current_12', src: '/images/gallery/current_school_picture_gallery/47382757_2318669465029975_1397692880511827968_o.jpg', title: 'School View 12' },
      { id: 'current_13', src: '/images/gallery/current_school_picture_gallery/49273024_2339267886303466_298568250764034048_n.jpg', title: 'School View 13' },
      { id: 'current_14', src: '/images/gallery/current_school_picture_gallery/49373591_2339117489651839_5420636051997720576_n.jpg', title: 'School View 14' },
      { id: 'current_15', src: '/images/gallery/current_school_picture_gallery/49426949_2339100186320236_4154938855205634048_n.jpg', title: 'School View 15' },
      { id: 'current_16', src: '/images/gallery/current_school_picture_gallery/49596068_2339100246320230_1879668277903360000_n.jpg', title: 'School View 16' },
      { id: 'current_17', src: '/images/gallery/current_school_picture_gallery/49730831_2339185302978391_5425684996507566080_o.jpg', title: 'School View 17' },
      { id: 'current_18', src: '/images/gallery/current_school_picture_gallery/49845071_2339110746319180_9103359784337276928_n.jpg', title: 'School View 18' },
      { id: 'current_19', src: '/images/gallery/current_school_picture_gallery/51854130_2364138783816376_7578297724517220352_n.jpg', title: 'School View 19' },
      { id: 'current_20', src: '/images/gallery/current_school_picture_gallery/5fee6582-ea87-42c8-85c1-218e4eb1d5d3.jpg', title: 'School View 20' },
      { id: 'current_21', src: '/images/gallery/current_school_picture_gallery/f3d38e6d-7278-4bc6-a287-b109af83b493.jpg', title: 'School View 21' },
      { id: 'current_22', src: '/images/gallery/current_school_picture_gallery/Sr_Johnes_Profile.png', title: 'Sr Johnes Profile' },
      { id: 'current_23', src: '/images/gallery/current_school_picture_gallery/Sr_Johnes_Tribute.png', title: 'Sr Johnes Tribute' },
      { id: 'current_24', src: '/images/gallery/current_school_picture_gallery/Sr_Johnes_Tribute_1.png', title: 'Sr Johnes Tribute 1' }
    ]
  },
  batch_1987_at_alumni: {
    id: '1987_batch_at_alumni_gallery',
    name: '1987 Batch At Alumni',
    thumbnail: '/images/gallery/1987_batch_at_alumni/thumbnail.jpg',
    images: [
      { id: 'batch_1987_1', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_8-59-01_AM.jpeg', title: 'School View 1' },
      { id: 'batch_1987_2', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_8-59-02_AM.jpeg', title: 'School View 2' },
      { id: 'batch_1987_3', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_8-59-03_AM.jpeg', title: 'School View 3' },
      { id: 'batch_1987_4', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_8-59-04_AM.jpeg', title: 'School View 4' },
      { id: 'batch_1987_5', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_8-59-05_AM.jpeg', title: 'School View 5' },
      { id: 'batch_1987_6', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_8-59-06_AM.jpeg', title: 'School View 1' },
      { id: 'batch_1987_7', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_9-01-31_AM.jpeg', title: 'School View 2' },
      { id: 'batch_1987_8', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_9-01-32_AM.jpeg', title: 'School View 3' },
      { id: 'batch_1987_9', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_9-01-33_AM.jpeg', title: 'School View 4' },
      { id: 'batch_1987_10', src: '/images/gallery/1987_batch_at_alumni/WhatsApp_2019-04-28_9-01-34_AM.jpeg', title: 'School View 5' }
    ]
  },
  executive_committe: {
    id: 'executive_committe_gallery',
    name: 'Executive Committe',
    thumbnail: '/images/gallery/executive_committe/thumbnail.jpg',
    images: [
      { id: 'executive_committe_1', src: '/images/gallery/executive_committe/Biju_George.jpg', title: 'School View 1' },
      { id: 'executive_committe_2', src: '/images/gallery/executive_committe/Ebenezer_Samule.jpg', title: 'School View 2' },
      { id: 'executive_committe_3', src: '/images/gallery/executive_committe/Jinson_S_Velamkunnel.jpg', title: 'School View 3' },
      { id: 'executive_committe_4', src: '/images/gallery/executive_committe/Merline_Augustine.jpg', title: 'School View 4' },
      { id: 'executive_committe_5', src: '/images/gallery/executive_committe/Sajesh_Babu_Balakrishnan.jpg', title: 'School View 5' },
      { id: 'executive_committe_6', src: '/images/gallery/executive_committe/Sini_C_Joseph.jpg', title: 'School View 1' }

    ]
  }

};

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);

  const handleGalleryClick = (galleryKey: string) => {
    setSelectedGallery(galleryKey);
    setLightboxOpen(true);
  };

  const selectedGalleryImages = selectedGallery
    ? galleryData[selectedGallery as keyof typeof galleryData].images.map(img => ({
      src: img.src,
      alt: img.title,
      title: img.title
    }))
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Our Gallery</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(galleryData).map(([key, gallery]) => (
            <div
              key={key}
              className="relative group cursor-pointer"
              onClick={() => handleGalleryClick(key)}
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

        {/* Featured Events Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Events</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Object.entries(galleryData).flatMap(([key, gallery]) =>
              gallery.images.slice(0, 2).map(image => (
                <div
                  key={image.id}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    setSelectedGallery(key);
                    setLightboxOpen(true);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <img
                      src="/images/gallery/zoom-icon.png"
                      alt="View Image"
                      className="w-8 h-8 opacity-75"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

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
    </div>
  );
}