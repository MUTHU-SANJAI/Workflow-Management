import React from 'react';
import { Plus } from 'lucide-react';

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const meetings = [
    {
      id: 1,
      title: 'Daily Standup Call',
      time: '9:00 AM',
      attendees: [
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      ],
    },
    {
      id: 2,
      title: 'Brand Identity Meeting',
      time: '11:00 AM',
      attendees: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
        <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Plus size={20} className="mr-2" />
          Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {days.map((day) => (
          <div key={day} className="text-center font-medium text-gray-500">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`bg-white rounded-lg shadow-sm p-4 min-h-[120px] ${
              i === 10 ? 'ring-2 ring-purple-600' : ''
            }`}
          >
            <span className="text-sm text-gray-500">{i + 1}</span>
            {i === 10 && (
              <div className="mt-2 space-y-2">
                {meetings.map((meeting) => (
                  <div key={meeting.id} className="bg-purple-50 p-2 rounded-md">
                    <p className="text-sm font-medium text-purple-900">{meeting.title}</p>
                    <p className="text-xs text-purple-600">{meeting.time}</p>
                    <div className="flex -space-x-2 mt-2">
                      {meeting.attendees.map((attendee, index) => (
                        <img
                          key={index}
                          src={attendee}
                          alt=""
                          className="h-6 w-6 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;