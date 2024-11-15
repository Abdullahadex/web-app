import React from 'react';
import { 
  TrendingUpIcon, 
  UsersIcon, 
  EyeIcon, 
  DownloadIcon 
} from 'lucide-react';

export function Analytics() {
  const stats = [
    {
      id: 1,
      name: 'Total Views',
      value: '245,678',
      change: '+12.5%',
      icon: EyeIcon
    },
    {
      id: 2,
      name: 'Resource Downloads',
      value: '45,239',
      change: '+8.2%',
      icon: DownloadIcon
    },
    {
      id: 3,
      name: 'Active Users',
      value: '12,543',
      change: '+15.3%',
      icon: UsersIcon
    },
    {
      id: 4,
      name: 'Engagement Rate',
      value: '68.7%',
      change: '+5.4%',
      icon: TrendingUpIcon
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Analytics Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
                <span className="text-sm text-gray-600"> vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Resource Performance</h2>
        <div className="h-64 flex items-center justify-center text-gray-500">
          Chart placeholder - Would implement with a charting library like recharts
        </div>
      </div>
    </div>
  );
}