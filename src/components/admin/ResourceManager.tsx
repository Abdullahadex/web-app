import React, { useState } from 'react';
import { 
  PlusIcon, 
  FileTextIcon, 
  VideoIcon, 
  BookOpenIcon,
  SearchIcon,
  FilterIcon
} from 'lucide-react';

export function ResourceManager() {
  const [resourceType, setResourceType] = useState('all');
  
  const resources = [
    {
      id: 1,
      title: 'Basic Maintenance Guide',
      type: 'manual',
      date: '2024-03-15',
      views: 1234,
      status: 'published'
    },
    {
      id: 2,
      title: 'Oil Change Tutorial',
      type: 'video',
      date: '2024-03-14',
      views: 2345,
      status: 'published'
    },
    {
      id: 3,
      title: 'Brake System Overview',
      type: 'guide',
      date: '2024-03-13',
      views: 3456,
      status: 'draft'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'manual': return BookOpenIcon;
      case 'video': return VideoIcon;
      case 'guide': return FileTextIcon;
      default: return FileTextIcon;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Resource Management</h1>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <PlusIcon className="w-5 h-5 mr-2" />
          Add Resource
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <select
            value={resourceType}
            onChange={(e) => setResourceType(e.target.value)}
            className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="manual">Manuals</option>
            <option value="video">Videos</option>
            <option value="guide">Guides</option>
          </select>
          <FilterIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {resources.map((resource) => {
                const Icon = getIcon(resource.type);
                return (
                  <tr key={resource.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Icon className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="font-medium text-gray-900">{resource.title}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 capitalize">{resource.type}</td>
                    <td className="px-6 py-4">{resource.date}</td>
                    <td className="px-6 py-4">{resource.views.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        resource.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {resource.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}