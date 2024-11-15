import React from 'react';
import { CarIcon, ChevronRightIcon } from 'lucide-react';

export function VehicleSelector() {
  const popularBrands = [
    { name: 'Toyota', image: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&w=100&h=100' },
    { name: 'Honda', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=100&h=100' },
    { name: 'Ford', image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=100&h=100' },
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Your Vehicle</h2>
      
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by make, model, or year..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <CarIcon className="absolute right-3 top-3 text-gray-400" />
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {popularBrands.map((brand) => (
            <button
              key={brand.name}
              className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="ml-2 text-sm font-medium text-gray-700">{brand.name}</span>
              <ChevronRightIcon className="w-4 h-4 ml-auto text-gray-400" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}