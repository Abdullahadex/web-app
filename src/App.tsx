import React from 'react';
import { Navigation } from './components/Navigation';
import { VehicleSelector } from './components/VehicleSelector';
import { FeaturedGuides } from './components/FeaturedGuides';
import { CommunitySection } from './components/CommunitySection';
import { BrandResources } from './components/BrandResources';
import { ArrowRightIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Ultimate DIY Auto Repair Resource
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Step-by-step guides, expert advice, and a supportive community to help you maintain and repair your vehicle.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center">
              Get Started
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <FeaturedGuides />
          </div>
          <div>
            <VehicleSelector />
          </div>
        </div>
        
        <BrandResources />
        <CommunitySection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About AutoDIY</h3>
              <p className="text-sm">Empowering car owners with knowledge and tools for successful DIY repairs.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Repair Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vehicle Database</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Forums</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 AutoDIY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;