'use client';

import { events, eventEndIso, isCurrentEvent, todayIsoDate } from '../components/UpcomingEvents';
import { useMemo, useState } from 'react';
import { matchesQuery } from '@/components/admin/AdminListSearchCombobox';
import { PublicListingSearch } from '@/components/public/PublicListSearchCombobox';

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const today = todayIsoDate();

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-').map(Number);
    if (!year || !month || !day) return dateString;
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Group events into upcoming, no events scheduled, and past
  const eventFields = (event: (typeof events)[number]) => [
    event.title,
    event.location,
    event.contact,
    event.id,
    event.date,
    event.endDate,
  ];

  const { upcomingEvents, pastEvents, noEventsScheduled } = useMemo(() => {
    return events.reduce((acc, event) => {
      if (event.isVirtualNoEvents || (!event.date && event.title.toLowerCase().includes('no events scheduled'))) {
        acc.noEventsScheduled.push(event);
        return acc;
      }

      if (!event.date) {
        return acc;
      }

      if (!matchesQuery(eventFields(event), searchTerm)) {
        return acc;
      }

      if (isCurrentEvent(event, today)) {
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
  }, [searchTerm, today]);

  // Sort events by date
  const sortedUpcomingEvents = [...upcomingEvents].sort((a, b) =>
    eventEndIso(a).localeCompare(eventEndIso(b))
  );

  const sortedPastEvents = [...pastEvents].sort((a, b) =>
    eventEndIso(b).localeCompare(eventEndIso(a))
  );

  const EventCard = ({ event }: { event: (typeof events)[0] }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/3 relative h-64 md:h-auto">
          <div className="w-full h-full p-4">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-contain rounded-lg"
            />
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

        <PublicListingSearch
          label="Search events"
          inputId="events-search"
          items={events.filter((event) => event.date)}
          committedValue={searchTerm}
          onCommit={setSearchTerm}
          getSearchFields={eventFields}
          getCommitValue={(event) => event.title}
          formatPrimary={(event) => event.title}
          formatSecondary={(event) => event.location || String(event.id)}
          getKey={(event) => String(event.id)}
          placeholder="Search by event title, location, contact, or id"
        />

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
            <p className="text-gray-600 text-lg">
              {searchTerm.trim() ? 'No events match that search.' : 'No events available at this time.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}