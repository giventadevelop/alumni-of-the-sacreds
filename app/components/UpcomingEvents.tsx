'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import Link from 'next/link';

interface Event {
  id: number;
  title: string;
  date: string;
  time?: string;
  location: string;
  contact: string;
  imageUrl: string;
  link: string;
  description?: string;
}

const events: Event[] = [
  // Future Events
  {
    id: 1,
    title: "S.H School Golden Jubilee celebration",
    date: "2024-01-18",
    location: "Sacred Heart English Medium HSS, Moolamattom, Kerala 685589",
    contact: "TOM MATHEW THEKKEDEM - 486 255 2001",
    imageUrl: "/img/event_small/ph1.jpg",
    link: "/events/golden-jubilee"
  },
  {
    id: 2,
    title: "ALUMNI INAUGURATION",
    date: "2024-04-28",
    time: "2:00 PM",
    location: "Sacred Heart English Medium HSS, Moolamattom, Kerala 685589",
    contact: "TOM MATHEW THEKKEDEM - 486 255 2001",
    imageUrl: "/img/event_small/ph1.jpg",
    link: "/events/alumni-inauguration"
  },
  {
    id: 3,
    title: "Honoring & Paying Tribute to Rev Sr. Johnes",
    date: "2024-04-28",
    location: "Sacred Heart English Medium HSS, Moolamattom",
    contact: "Founder of SHEMHSS - ALL ARE INVITED!",
    description: "Founder of SHEMHSS on April 28th as part of the alumni",
    imageUrl: "/img/event_small/ph2.jpg",
    link: "/events/tribute"
  },
  // Past Events
  {
    id: 4,
    title: "Alumni Annual Meet 2023",
    date: "2023-12-15",
    location: "Sacred Heart English Medium HSS, Moolamattom",
    contact: "Alumni Association Office",
    imageUrl: "/img/event_small/ph1.jpg",
    link: "/events/annual-meet-2023"
  },
  {
    id: 5,
    title: "Career Guidance Workshop",
    date: "2023-09-28",
    location: "Sacred Heart English Medium HSS, Moolamattom",
    contact: "Career Guidance Cell",
    imageUrl: "/img/event_small/ph2.jpg",
    link: "/events/career-workshop-2023"
  }
];

export default function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sort all events by date
  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const today = new Date('2025-03-25'); // Hardcoded date for testing
  today.setHours(0, 0, 0, 0);

  // If no events at all
  if (sortedEvents.length === 0) {
    return (
      <section className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-center text-[#40E0D0] mb-2">Events</h2>
          <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center h-[100px]">
            <div className="flex flex-col items-center">
              <Calendar className="w-6 h-6 text-orange-500 mb-1" />
              <p className="text-center font-bold text-orange-500 text-base">
                No events available
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Find the next upcoming event index
  const upcomingEventIndex = sortedEvents.findIndex(event => new Date(event.date) >= today);
  const hasUpcomingEvents = upcomingEventIndex !== -1;

  // Initialize to the first upcoming event if available, otherwise show the most recent past event
  const initialIndex = hasUpcomingEvents ? upcomingEventIndex : sortedEvents.length - 1;

  // Show "No events" when we're at or past the current date with no upcoming events
  const showNoEvents = !hasUpcomingEvents && currentIndex >= initialIndex;

  if (showNoEvents) {
    return (
      <section className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-2">
            <h2 className="text-xl font-bold text-[#40E0D0]">Upcoming Events</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-between h-[100px]">
              <div className="flex-1 flex items-center justify-center gap-4">
                <div className="w-20 h-24 relative bg-gray-50 rounded-lg shadow-md overflow-hidden">
                  <div className="bg-orange-500 text-white text-center py-1 text-xs">
                    {today.toLocaleString('default', { month: 'long' })}
                  </div>
                  <div className="flex items-center justify-center flex-1 h-full -mt-6">
                    <span className="text-3xl font-bold text-gray-700">{today.getDate()}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="w-5 h-5 text-orange-500 mb-1" />
                  <p className="text-center font-bold text-orange-500 text-sm">
                    No events scheduled at this time
                  </p>
                </div>
              </div>

              <div className="p-2 flex gap-1">
                <button
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Previous event"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  disabled
                  className="p-1 rounded-full text-gray-300"
                  aria-label="Next event"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentEvent = sortedEvents[currentIndex];

  // Safety check for TypeScript
  if (!currentEvent) {
    return null;
  }

  const eventDate = new Date(currentEvent.date);
  const isPastEvent = eventDate < today;

  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const nextSlide = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < sortedEvents.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const prevSlide = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <section className="bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-[#40E0D0]">
            {isPastEvent ? 'Past Events' : 'Upcoming Events'}
          </h2>
          <div className="text-sm text-gray-600">
            {formattedDate}
          </div>
        </div>

        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row h-[100px]">
            {/* Image Section */}
            <div className="md:w-4/12 relative">
              <div className="relative h-24 md:h-full">
                <Image
                  src={currentEvent.imageUrl}
                  alt={currentEvent.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-8/12 p-2 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-gray-800">
                  <Link href={currentEvent.link} className="hover:text-orange-500 transition-colors">
                    {currentEvent.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-xs">
                  {currentEvent.location}
                  {currentEvent.time && ` • ${currentEvent.time}`}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href={currentEvent.link}
                  className="inline-block bg-orange-500 text-white px-2 py-0.5 rounded text-xs hover:bg-orange-600 transition-colors"
                >
                  {isPastEvent ? 'View Details' : 'Join with us'}
                </Link>
                <div className="flex gap-1">
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`p-1 rounded-full ${currentIndex === 0 ? 'text-gray-300' : 'bg-gray-100 hover:bg-gray-200 transition-colors'}`}
                    aria-label="Previous event"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentIndex === sortedEvents.length - 1}
                    className={`p-1 rounded-full ${currentIndex === sortedEvents.length - 1 ? 'text-gray-300' : 'bg-gray-100 hover:bg-gray-200 transition-colors'}`}
                    aria-label="Next event"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Navigation Dots */}
        <div className="flex justify-center mt-1 gap-0.5">
          {sortedEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1 h-1 rounded-full transition-colors ${index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}