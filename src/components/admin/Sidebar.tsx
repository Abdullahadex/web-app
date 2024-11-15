import React from 'react';
import { 
  FolderIcon, 
  BarChart2Icon, 
  SettingsIcon, 
  LogOutIcon,
  HomeIcon
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const menuItems = [
    { id: 'resources', icon: FolderIcon, label: 'Resources' },
    { id: 'analytics', icon: BarChart2Icon, label: 'Analytics' },
    { id: 'settings', icon: SettingsIcon, label: 'Settings' }
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <HomeIcon className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold">Brand Portal</span>
        </div>
      </div>
      
      <nav className="mt-6">
        {menuItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`w-full flex items-center space-x-3 px-6 py-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
              activeSection === id ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : ''
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="font-medium">{label}</span>
          </button>
        ))}
        
        <button className="w-full flex items-center space-x-3 px-6 py-4 text-red-600 hover:bg-red-50 transition-colors mt-auto">
          <LogOutIcon className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </aside>
  );
}