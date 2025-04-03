import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
    },
    {
      name: 'Sarah Wilson',
      role: 'UI Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'sarah@example.com',
      phone: '+1 (555) 234-5678',
      location: 'New York, NY',
    },
    {
      name: 'Michael Brown',
      role: 'Frontend Developer',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'michael@example.com',
      phone: '+1 (555) 345-6789',
      location: 'Austin, TX',
    },
    {
      name: 'Emily Davis',
      role: 'Backend Developer',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      email: 'emily@example.com',
      phone: '+1 (555) 456-7890',
      location: 'Seattle, WA',
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Team Members</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.email} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="h-24 w-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
              <p className="text-sm text-purple-600 mb-4">{member.role}</p>
              
              <div className="w-full space-y-3">
                <div className="flex items-center text-sm text-gray-500">
                  <Mail size={16} className="mr-2" />
                  {member.email}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Phone size={16} className="mr-2" />
                  {member.phone}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin size={16} className="mr-2" />
                  {member.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;