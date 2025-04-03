import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Analytics from './components/Analytics';
import Calendar from './components/Calendar';
import Team from './components/Team';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'chat' && <Chat />}
          {activeTab === 'analytics' && <Analytics />}
          {activeTab === 'calendar' && <Calendar />}
          {activeTab === 'team' && <Team />}
        </main>
      </div>
    </div>
  );
}

export default App;