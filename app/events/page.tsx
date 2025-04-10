'use client';

import { events } from '../components/UpcomingEvents';
import Image from 'next/image';
import { useMemo } from 'react';

export default function EventsPage() {
  const formatDate = (dateString: string) => {
    if (!dateString) return ''; // Return empty string if date is empty
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Group events into upcoming, no events scheduled, and past
  const { upcomingEvents, pastEvents, noEventsScheduled } = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set to start of day for fair comparison

    return events.reduce((acc, event) => {
      // Handle "No events scheduled" items
      if (event.isVirtualNoEvents || (!event.date && event.title.toLowerCase().includes('no events scheduled'))) {
        acc.noEventsScheduled.push(event);
        return acc;
      }

      // Skip other events with no date
      if (!event.date) {
        return acc;
      }

      const eventDate = new Date(event.date);
      if (eventDate >= now) {
        acc.upcomingEvents.push(event);
      } else {
        acc.pastEvents.push(event);
      }
      return acc;
    }, {
      upcomingEvents: [] as typeof events,
      pastEvents: [] as typeof events,
      noEventsScheduled: [] as typeof events
    });
  }, []);

  // Sort events by date
  const sortedUpcomingEvents = [...upcomingEvents].sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const sortedPastEvents = [...pastEvents].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime() // Most recent first
  );

  const EventCard = ({ event }: { event: (typeof events)[0] }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <div className="w-full h-full p-4">
            <div className="relative w-full h-full">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 p-6">
          <div className="flex flex-col h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {event.title}
            </h2>

            {event.date && (
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-600">Date:</span>
                <p className="text-gray-800">{formatDate(event.date)}</p>
              </div>
            )}

            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-600">Location:</span>
              <p className="text-gray-800">{event.location}</p>
            </div>

            {event.contact && (
              <div className="mt-auto">
                <span className="text-sm font-semibold text-gray-600">Contact:</span>
                <p className="text-gray-800">{event.contact}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Events</h1>

        {/* Upcoming Events Section */}
        {sortedUpcomingEvents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Upcoming Events</h2>
            <div className="grid gap-8">
              {sortedUpcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* No Events Scheduled Section */}
        {noEventsScheduled.length > 0 && (
          <div className="mb-16">
            <div className="grid gap-8">
              {noEventsScheduled.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* Past Events Section */}
        {sortedPastEvents.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Past Events</h2>
            <div className="grid gap-8">
              {sortedPastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {/* No Events Message */}
        {sortedUpcomingEvents.length === 0 && sortedPastEvents.length === 0 && noEventsScheduled.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}