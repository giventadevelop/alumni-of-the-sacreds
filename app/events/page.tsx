import { Calendar } from 'lucide-react';

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Events</h1>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <div className="text-center">
          <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
          <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
          <p className="text-gray-600">No events scheduled</p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6">Past Events</h2>
        {[
          {
            title: 'Annual Alumni Meet 2023',
            date: 'December 15, 2023',
            description: 'A gathering of alumni from various batches to celebrate our alma mater.',
          },
          {
            title: 'Career Guidance Session',
            date: 'October 5, 2023',
            description: 'Alumni professionals shared their experiences with current students.',
          },
          {
            title: 'Sports Day',
            date: 'August 20, 2023',
            description: 'Annual sports competition between current students and alumni.',
          },
        ].map((event) => (
          <div key={event.title} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-500 mb-3">{event.date}</p>
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}