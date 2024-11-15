import React from 'react';
import { ClockIcon, WrenchIcon, StarIcon } from 'lucide-react';

interface Guide {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
  image: string;
  views: number;
}

export function FeaturedGuides() {
  const guides: Guide[] = [
    {
      title: 'Oil Change Guide',
      difficulty: 'Easy',
      duration: '30 mins',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=400',
      views: 15420
    },
    {
      title: 'Brake Pad Replacement',
      difficulty: 'Medium',
      duration: '2 hours',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=400',
      views: 12350
    },
    {
      title: 'Spark Plug Installation',
      difficulty: 'Easy',
      duration: '45 mins',
      image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=400',
      views: 8930
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Repair Guides</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <div key={guide.title} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{guide.title}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <WrenchIcon className="w-4 h-4 mr-1" />
                  {guide.difficulty}
                </span>
                <span className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  {guide.duration}
                </span>
                <span className="flex items-center">
                  <StarIcon className="w-4 h-4 mr-1" />
                  {guide.views.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}