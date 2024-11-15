import React, { useState } from 'react';
import { BookOpenIcon, FileTextIcon, VideoIcon, DownloadIcon, PlusCircleIcon, LogInIcon } from 'lucide-react';
import { AdminDashboard } from './admin/AdminDashboard';

interface BrandResource {
  brand: string;
  logo: string;
  description: string;
  resources: {
    manuals: number;
    videos: number;
    guides: number;
  };
}

export function BrandResources() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authType, setAuthType] = useState<'login' | 'register'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const brands: BrandResource[] = [
    {
      brand: 'Toyota',
      logo: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&w=150',
      description: 'Official repair manuals, diagnostic guides, and maintenance schedules for all Toyota models.',
      resources: {
        manuals: 245,
        videos: 180,
        guides: 320,
      },
    },
    {
      brand: 'Honda',
      logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=150',
      description: 'Comprehensive repair documentation and technical resources for Honda vehicles.',
      resources: {
        manuals: 198,
        videos: 150,
        guides: 275,
      },
    },
    {
      brand: 'Ford',
      logo: 'https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=150',
      description: 'Factory service information and repair procedures for all Ford cars and trucks.',
      resources: {
        manuals: 312,
        videos: 220,
        guides: 405,
      },
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowAuthModal(false);
  };

  if (isAuthenticated) {
    return <AdminDashboard />;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Official Brand Resources</h2>
            <p className="text-gray-600 max-w-2xl">
              Access official repair documentation, service manuals, and technical guides directly from manufacturers.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => {
                setAuthType('login');
                setShowAuthModal(true);
              }}
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 active:scale-95"
            >
              <LogInIcon className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Brand Login
            </button>
            <button 
              onClick={() => {
                setAuthType('register');
                setShowAuthModal(true);
              }}
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-50 active:scale-95"
            >
              <PlusCircleIcon className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Register Brand
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div key={brand.brand} className="bg-gray-50 rounded-xl p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <img
                  src={brand.logo}
                  alt={`${brand.brand} logo`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{brand.brand}</h3>
                  <p className="text-sm text-gray-500">Official Partner</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{brand.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center transform transition-transform hover:scale-105">
                  <BookOpenIcon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="block text-lg font-semibold text-gray-900">{brand.resources.manuals}</span>
                  <span className="text-sm text-gray-500">Manuals</span>
                </div>
                <div className="text-center transform transition-transform hover:scale-105">
                  <VideoIcon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="block text-lg font-semibold text-gray-900">{brand.resources.videos}</span>
                  <span className="text-sm text-gray-500">Videos</span>
                </div>
                <div className="text-center transform transition-transform hover:scale-105">
                  <FileTextIcon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="block text-lg font-semibold text-gray-900">{brand.resources.guides}</span>
                  <span className="text-sm text-gray-500">Guides</span>
                </div>
              </div>

              <button className="w-full group relative inline-flex items-center justify-center px-4 py-2 bg-white border border-blue-600 text-blue-600 font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-50 active:scale-95">
                <DownloadIcon className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" />
                Access Resources
              </button>
            </div>
          ))}
        </div>

        {showAuthModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
              <h3 className="text-2xl font-bold mb-6">
                {authType === 'login' ? 'Brand Login' : 'Register Your Brand'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your brand name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>
                {authType === 'register' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                )}
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors active:scale-95"
                  >
                    {authType === 'login' ? 'Login' : 'Register'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAuthModal(false)}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors active:scale-95"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}