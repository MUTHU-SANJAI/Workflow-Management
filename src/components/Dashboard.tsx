import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { BarChart3, ArrowUp, Clock, CheckCircle, Plus } from 'lucide-react';

const data = [
  { name: 'Jan', Group1: 50, Group2: 30, Group3: 20, Group4: 10 },
  { name: 'Feb', Group1: 45, Group2: 35, Group3: 25, Group4: 15 },
  { name: 'Mar', Group1: 55, Group2: 40, Group3: 30, Group4: 20 },
  { name: 'Apr', Group1: 40, Group2: 45, Group3: 35, Group4: 25 },
  { name: 'May', Group1: 35, Group2: 50, Group3: 40, Group4: 30 },
];

const taskData = [
  { name: 'High', value: 12 },
  { name: 'Medium', value: 8 },
  { name: 'Low', value: 5 },
];

const Dashboard = () => {
  const projects = [
    {
      name: 'Mobile App',
      progress: 85,
      tasks: 15,
      team: [
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      ],
      color: 'bg-orange-500',
    },
    {
      name: 'Website Redesign',
      progress: 65,
      tasks: 12,
      team: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      ],
      color: 'bg-purple-500',
    },
    {
      name: 'Marketing Campaign',
      progress: 45,
      tasks: 8,
      team: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      ],
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Task Management</h1>
        <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Plus size={20} className="mr-2" />
          Create Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <BarChart3 className="text-purple-600" size={24} />
            </div>
            <span className="flex items-center text-green-500 text-sm">
              <ArrowUp size={16} className="mr-1" />
              12%
            </span>
          </div>
          <h3 className="text-2xl font-bold">128</h3>
          <p className="text-gray-500">Total Tasks</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Clock className="text-orange-600" size={24} />
            </div>
            <span className="flex items-center text-red-500 text-sm">
              <ArrowUp size={16} className="mr-1 transform rotate-180" />
              8%
            </span>
          </div>
          <h3 className="text-2xl font-bold">64</h3>
          <p className="text-gray-500">Pending Tasks</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <span className="flex items-center text-green-500 text-sm">
              <ArrowUp size={16} className="mr-1" />
              24%
            </span>
          </div>
          <h3 className="text-2xl font-bold">86%</h3>
          <p className="text-gray-500">Completion Rate</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Workflow Management</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Group1" stackId="1" stroke="#7c3aed" fill="#7c3aed" />
                <Area type="monotone" dataKey="Group2" stackId="1" stroke="#60a5fa" fill="#60a5fa" />
                <Area type="monotone" dataKey="Group3" stackId="1" stroke="#34d399" fill="#34d399" />
                <Area type="monotone" dataKey="Group4" stackId="1" stroke="#fbbf24" fill="#fbbf24" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Task Priority Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={taskData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#7c3aed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Active Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-2 h-12 ${project.color} rounded-full mr-4`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{project.name}</h3>
                  <span className="text-sm text-gray-500">{project.progress}%</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                    <div
                      className={`${project.color} h-2 rounded-full`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <div className="flex -space-x-2">
                    {project.team.map((member, i) => (
                      <img
                        key={i}
                        src={member}
                        alt=""
                        className="h-6 w-6 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;