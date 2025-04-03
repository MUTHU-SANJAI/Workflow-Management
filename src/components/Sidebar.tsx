import React from 'react';
import { Home, MessageSquare, BarChart3, Calendar, Users, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Dashboard' },
    { id: 'chat', icon: MessageSquare, label: 'Chat' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'team', icon: Users, label: 'Team' },
  ];

  return (
    <div className="bg-white w-20 flex-shrink-0 border-r border-gray-200 flex flex-col items-center py-4 space-y-8">
      <div className="h-12 w-12 rounded-lg bg-purple-600 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">T</span>
      </div>
      
      {menuItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => setActiveTab(id)}
          className={`p-3 rounded-xl ${
            activeTab === id
              ? 'bg-purple-100 text-purple-600'
              : 'text-gray-400 hover:bg-gray-100'
          }`}
          title={label}
        >
          <Icon size={24} />
        </button>
      ))}

      <div className="mt-auto">
        <button
          className="p-3 text-gray-400 hover:bg-gray-100 rounded-xl"
          title="Settings"
        >
          <Settings size={24} />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;