import React, { useState } from 'react';
import { Send, Search, Plus, Hash } from 'lucide-react';

const Chat = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      message: 'Hey team, how\'s the progress on the mobile app?',
      time: '10:30 AM',
      isOwn: true,
    },
    {
      id: 2,
      sender: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      message: 'We\'re on track! The UI components are almost done.',
      time: '10:32 AM',
      isOwn: false,
    },
    {
      id: 3,
      sender: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      message: 'Great progress! I\'ve just pushed the latest changes.',
      time: '10:35 AM',
      isOwn: false,
    },
  ]);

  const channels = [
    { id: 1, name: 'general', unread: 2 },
    { id: 2, name: 'design', unread: 0 },
    { id: 3, name: 'development', unread: 5 },
    { id: 4, name: 'marketing', unread: 1 },
  ];

  return (
    <div className="flex h-full">
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Plus size={20} className="mr-2" />
            New Chat
          </button>
          
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search channels..."
              className="w-full pl-8 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
          </div>
        </div>

        <div className="px-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Channels
          </h3>
          <div className="space-y-1">
            {channels.map(channel => (
              <button
                key={channel.id}
                className="w-full flex items-center px-2 py-1.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <Hash size={16} className="mr-2 text-gray-400" />
                <span className="flex-1 text-left">{channel.name}</span>
                {channel.unread > 0 && (
                  <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {channel.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex ${message.isOwn ? 'flex-row-reverse' : 'flex-row'} items-end max-w-lg`}>
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="h-8 w-8 rounded-full"
                />
                <div className={`mx-2 ${message.isOwn ? 'bg-purple-600 text-white' : 'bg-gray-100'} rounded-lg px-4 py-2`}>
                  <p className="text-sm">{message.message}</p>
                  <span className={`text-xs ${message.isOwn ? 'text-purple-200' : 'text-gray-500'} mt-1`}>
                    {message.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
            <button className="p-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;