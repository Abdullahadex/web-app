import React from 'react';
import { MessageSquareIcon, UsersIcon, HelpCircleIcon } from 'lucide-react';

export function CommunitySection() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Join Our Community</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <MessageSquareIcon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Discussion Forums</h3>
            <p className="text-gray-600">Connect with other DIY enthusiasts and share your experiences.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <UsersIcon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Community</h3>
            <p className="text-gray-600">Get advice from certified mechanics and experienced DIYers.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <HelpCircleIcon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Q&A Section</h3>
            <p className="text-gray-600">Find answers to common questions or ask your own.</p>
          </div>
        </div>
      </div>
    </div>
  );
}