'use client';

import { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  id: string;
  src: string;
  title: string;
}

interface GalleryFolder {
  id: string;
  name: string;
  images: GalleryImage[];
}

const galleryFolders: GalleryFolder[] = [
  {
    id: '87_batch_at_alumni',
    name: '87 Batch at Alumni',
    images: [
      { id: '87_1', src: '/images/gallery/87_batch_at_alumni/WhatsApp Image 2024-03-01.jpg', title: '87 Batch Alumni Meet' },
      { id: '87_2', src: '/images/gallery/87_batch_at_alumni/WhatsApp Image 2024-03-02.jpg', title: '87 Batch Group Photo' },
      { id: '87_3', src: '/images/gallery/87_batch_at_alumni/WhatsApp Image 2024-03-03.jpg', title: '87 Batch Celebration' }
    ]
  },
  {
    id: 'alumni_inauguration_2019',
    name: 'Alumni Inauguration 2019',
    images: [
      { id: 'inaug_1', src: '/images/gallery/alumni_inauguration_2019/WhatsApp Image 2019-04-28 at 8.04.15 AM.jpeg', title: 'Inauguration Ceremony 1' },
      { id: 'inaug_2', src: '/images/gallery/alumni_inauguration_2019/WhatsApp Image 2019-04-28 at 8.04.20 AM.jpeg', title: 'Inauguration Ceremony 2' },
      { id: 'inaug_3', src: '/images/gallery/alumni_inauguration_2019/WhatsApp Image 2019-04-28 at 8.04.22 AM.jpeg', title: 'Inauguration Ceremony 3' },
      { id: 'inaug_4', src: '/images/gallery/alumni_inauguration_2019/WhatsApp Image 2019-04-28 at 8.04.24 AM.jpeg', title: 'Inauguration Ceremony 4' },
      { id: 'inaug_5', src: '/images/gallery/alumni_inauguration_2019/WhatsApp Image 2019-04-28 at 8.04.26 AM.jpeg', title: 'Inauguration Ceremony 5' },
      { id: 'inaug_6', src: '/images/gallery/alumni_inauguration_2019/nuns_line_up.jpg', title: 'Nuns Line Up' }
    ]
  },
  {
    id: 'current_school_picture_gallery',
    name: 'Current School Pictures',
    images: [
      { id: 'current_1', src: '/images/gallery/current_school_picture_gallery/10174981_1492555470974716_1522533887719606694_n.jpg', title: 'School View 1' },
      { id: 'current_2', src: '/images/gallery/current_school_picture_gallery/10338601_1490018077895122_1870563400726281257_o.jpg', title: 'School View 2' },
      { id: 'current_3', src: '/images/gallery/current_school_picture_gallery/45693869_2303101006586821_7950056534447226880_n.jpg', title: 'School View 3' },
      { id: 'current_4', src: '/images/gallery/current_school_picture_gallery/46102151_2305619839668271_5548366296321622016_n.jpg', title: 'School View 4' },
      { id: 'current_5', src: '/images/gallery/current_school_picture_gallery/46310172_2305652962998292_1659246944205144064_n.jpg', title: 'School View 5' }
    ]
  },
  {
    id: 'executive_committe',
    name: 'Executive Committee',
    images: [
      { id: 'exec_1', src: '/images/gallery/executive_committe/Biju_George.jpg', title: 'Biju George' },
      { id: 'exec_2', src: '/images/gallery/executive_committe/Ebenezer_Samule.jpg', title: 'Ebenezer Samule' },
      { id: 'exec_3', src: '/images/gallery/executive_committe/Jinson_S_Velamkunnel.jpg', title: 'Jinson S Velamkunnel' },
      { id: 'exec_4', src: '/images/gallery/executive_committe/Merline_Augustine.jpg', title: 'Merline Augustine' },
      { id: 'exec_5', src: '/images/gallery/executive_committe/Sajesh_Babu_Balakrishnan.jpg', title: 'Sajesh Babu Balakrishnan' },
      { id: 'exec_6', src: '/images/gallery/executive_committe/Sini_C_Joseph.jpg', title: 'Sini C Joseph' }
    ]
  },
  {
    id: 'golden_jubilee_50_years',
    name: 'Golden Jubilee - 50 Years',
    images: [
      { id: 'jubilee_1', src: '/images/gallery/golden_jubilee_50_years/50_years_golden.jpg', title: '50 Years Celebration' },
      { id: 'jubilee_2', src: '/images/gallery/golden_jubilee_50_years/50_years_golden_1.jpg', title: 'Golden Jubilee' },
      { id: 'jubilee_3', src: '/images/gallery/golden_jubilee_50_years/school_building.jpg', title: 'School Building' },
      { id: 'jubilee_4', src: '/images/gallery/golden_jubilee_50_years/school_logo.jpg', title: 'School Logo' }
    ]
  },
  {
    id: 'old_batches_group_photos',
    name: 'Old Batches Group Photos',
    images: [
      { id: 'old_1', src: '/images/gallery/old_batches_group_photos/1985_1986_1st_standard.jpg', title: '1985-1986 1st Standard' },
      { id: 'old_2', src: '/images/gallery/old_batches_group_photos/1990_Batch_Girls_with_Maria_Teacher.jpeg', title: '1990 Batch Girls with Maria Teacher' },
      { id: 'old_3', src: '/images/gallery/old_batches_group_photos/1993_sslc_batch_in_4th_standard.jpg', title: '1993 SSLC Batch in 4th Standard' },
      { id: 'old_4', src: '/images/gallery/old_batches_group_photos/1995_sslc_batch.jpg', title: '1995 SSLC Batch' },
      { id: 'old_5', src: '/images/gallery/old_batches_group_photos/2006_2007_batch.jpg', title: '2006-2007 Batch' },
      { id: 'old_6', src: '/images/gallery/old_batches_group_photos/arts_fest_winners_shared_by_monci_chechi.jpg', title: 'Arts Fest Winners' }
    ]
  }
];

export default function GalleryPage() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleFolderClick = (folderId: string) => {
    setSelectedFolder(folderId);
    setPhotoIndex(0);
    setLightboxOpen(true);
  };

  const selectedFolderImages = selectedFolder
    ? galleryFolders.find(folder => folder.id === selectedFolder)?.images.map(img => ({
      src: img.src,
      alt: img.title,
      title: img.title
    }))
    : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Photo Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryFolders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => handleFolderClick(folder.id)}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
          >
            <img
              src={folder.images[0]?.src}
              alt={folder.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-xl font-semibold mb-2">{folder.name}</h3>
                <p className="text-white/90">
                  {folder.images.length} {folder.images.length === 1 ? 'photo' : 'photos'}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <img
                src="/images/gallery/zoom-icon.png"
                alt="View Gallery"
                className="w-8 h-8 opacity-75"
              />
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && selectedFolderImages && (
        <Lightbox
          open={lightboxOpen}
          close={() => {
            setLightboxOpen(false);
            setSelectedFolder(null);
          }}
          index={photoIndex}
          slides={selectedFolderImages}
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