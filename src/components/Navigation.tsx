import React from 'react';
import { WrenchIcon, SearchIcon, UserIcon, MenuIcon } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <WrenchIcon className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">AutoDIY</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#guides" className="text-gray-700 hover:text-blue-600 transition-colors">Repair Guides</a>
            <a href="#vehicles" className="text-gray-700 hover:text-blue-600 transition-colors">Vehicles</a>
            <a href="#community" className="text-gray-700 hover:text-blue-600 transition-colors">Community</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <UserIcon className="w-4 h-4 mr-2" />
              Sign In
            </button>
          </div>
          
          <button className="md:hidden p-2">
            <MenuIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}