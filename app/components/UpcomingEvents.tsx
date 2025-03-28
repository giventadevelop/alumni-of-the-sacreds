'use client';

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from 'next/link';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  contact: string;
  imageUrl: string;
  isVirtualNoEvents?: boolean;
}

export const events: Event[] = [
  {
    id: 1,
    title: "No events scheduled at this time",
    date: "",
    location: "Sacred Heart English Medium HSS, Moolamattom",
    contact: "",
    imageUrl: "/img/event_small/calendar_event_icon.jfif",
  },
  {
    id: 2,
    title: "S.H School Golden Jubilee celebration",
    date: "2024-01-19",
    location: "Sacred Heart English Medium HSS, Moolamattom, Kerala 685589",
    contact: "TOM MATHEW THEKKEDEM - 486 255 2001",
    imageUrl: "/img/event_small/event_carousel_jubilee_January_18_png.png",
  },
  {
    id: 3,
    title: "ALUMNI INAUGURATION",
    date: "2019-04-29",
    location: "Sacred Heart English Medium HSS, Moolamattom, Kerala 685589",
    contact: "TOM MATHEW THEKKEDEM - 486 255 2001",
    imageUrl: "/img/event_small/event_carousel_logo.png",
  },
  {
    id: 4,
    title: "Honoring & Paying Tribute to Rev Sr. Johnes",
    date: "2019-04-29",
    location: "Sacred Heart English Medium HSS, Moolamattom",
    contact: "Founder of SHEMHSS - ALL ARE INVITED!",
    imageUrl: "/img/event_small/event_carousel_Sr_Jones_Tribute.jpg",
  },
  {
    id: 5,
    title: "Alumni Annual Meet 2023",
    date: "2023-12-15",
    location: "Sacred Heart English Medium HSS, Moolamattom",
    contact: "Alumni Association Office",
    imageUrl: "/img/event_small/ph1.jpg",
  },
  // {
  //   id: 6,
  //   title: "Career Guidance Workshop",
  //   date: "2023-09-28",
  //   location: "Sacred Heart English Medium HSS, Moolamattom",
  //   contact: "Career Guidance Cell",
  //   imageUrl: "/img/event_small/ph2.jpg",
  // },
  // {
  //   id: 7,
  //   title: "Career Guidance Workshop",
  //   date: "2023-09-28",
  //   location: "Sacred Heart English Medium HSS, Moolamattom",
  //   contact: "Career Guidance Cell",
  //   imageUrl: "/img/event_small/ph2.jpg",
  // }
];

export default function UpcomingEvents() {
  const [initialSlide, setInitialSlide] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);

  useEffect(() => {
    setInitialSlide(events.length - 1); // Show last item first
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return ''; // Return empty string if date is empty
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-[#40E0D0] mb-4 text-center">Upcoming Events</h2>
        <div className="w-full flex justify-center">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={20}
            slidesPerView={1}
            initialSlide={initialSlide}
            className="w-full max-w-[600px] h-[220px] relative group"
            onSlideChange={(swiper) => {
              setIsLastSlide(swiper.isEnd);
            }}
          >
            {events.map((event, index) => (
              <SwiperSlide key={event.id}>
                {!isLastSlide && (
                  <Link href="/events" className="block h-full">
                    <div className="block p-2 h-full">
                      <div className="relative h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                        {/* Full color background image */}
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Bottom gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        {/* Text content */}
                        <div className="relative h-full flex flex-col justify-end p-4">
                          <h3 className="text-sm font-bold text-white mb-1 line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="text-xs text-gray-200">
                            {formatDate(event.date)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
                {isLastSlide && (
                  <div className="block p-2 h-full">
                    <div className="relative h-full rounded-lg overflow-hidden shadow-lg">
                      {/* Full color background image */}
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Bottom gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      {/* Text content */}
                      <div className="relative h-full flex flex-col justify-end p-4">
                        <h3 className="text-sm font-bold text-white mb-1 line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-xs text-gray-200">
                          {formatDate(event.date)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev !w-8 !h-8 !bg-white !rounded-full !shadow-md after:!text-sm after:!text-gray-600"></div>
            <div className="swiper-button-next !w-8 !h-8 !bg-white !rounded-full !shadow-md after:!text-sm after:!text-gray-600"></div>
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          opacity: 1;
        }

        .swiper-button-disabled {
          opacity: 0.35 !important;
        }
      `}</style>
    </section>
  );
}