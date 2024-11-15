import React from 'react';
import { Sidebar } from './Sidebar';
import { ResourceManager } from './ResourceManager';
import { Analytics } from './Analytics';
import { Settings } from './Settings';

export function AdminDashboard() {
  const [activeSection, setActiveSection] = React.useState('resources');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 p-8">
        {activeSection === 'resources' && <ResourceManager />}
        {activeSection === 'analytics' && <Analytics />}
        {activeSection === 'settings' && <Settings />}
      </main>
    </div>
  );
}