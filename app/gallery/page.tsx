import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      alt: 'School Building',
      caption: 'Sacred Heart School Main Building',
    },
    {
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
      alt: 'Graduation',
      caption: 'Graduation Day 2023',
    },
    {
      src: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0',
      alt: 'Campus Life',
      caption: 'Campus Life',
    },
    {
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
      alt: 'Alumni Meet',
      caption: 'Annual Alumni Meet',
    },
    {
      src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
      alt: 'Cultural Events',
      caption: 'Cultural Program',
    },
    {
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      alt: 'Sports Day',
      caption: 'Sports Day Celebration',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Photo Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative h-64">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-center">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}