import { ChevronLeft, ChevronRight, RotateCw, Home, Star, Lock, X } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from '../AppContext';

const mockTabs = [
  { id: 1, title: 'Welcome to Browser', url: 'browser://welcome', active: true },
  { id: 2, title: 'New Tab', url: 'browser://newtab', active: false },
];

const quickLinks = [
  { id: 1, name: 'GitHub', color: 'bg-gray-900' },
  { id: 2, name: 'Figma', color: 'bg-purple-600' },
  { id: 3, name: 'YouTube', color: 'bg-red-600' },
  { id: 4, name: 'Twitter', color: 'bg-blue-400' },
  { id: 5, name: 'LinkedIn', color: 'bg-blue-700' },
  { id: 6, name: 'Dribbble', color: 'bg-pink-500' },
];

export function Browser() {
  const [tabs, setTabs] = useState(mockTabs);
  const [url, setUrl] = useState('browser://welcome');
  const { accentColor } = useAppContext();

  return (
    <div className="flex flex-col h-full bg-gray-800/40 backdrop-blur-md">
      {/* Tab Bar */}
      <div className="h-9 bg-gray-900/40 backdrop-blur-md border-b border-white/10 flex items-center px-2 gap-1">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`h-7 px-3 rounded-t-lg flex items-center gap-2 min-w-0 max-w-xs ${
              tab.active ? 'bg-gray-800/60' : 'bg-gray-900/30 hover:bg-gray-900/50'
            }`}
          >
            <span className="text-white/80 text-xs truncate flex-1">{tab.title}</span>
            <button className="text-white/40 hover:text-white/80 transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
        <button className="h-7 px-2 text-white/60 hover:text-white/90 transition-colors">+</button>
      </div>

      {/* Navigation Bar */}
      <div className="h-12 bg-gray-900/30 backdrop-blur-md border-b border-white/10 flex items-center px-3 gap-2">
        <div className="flex items-center gap-1">
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-white/70">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-white/70">
            <ChevronRight className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-white/70">
            <RotateCw className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-white/70">
            <Home className="w-4 h-4" />
          </button>
        </div>

        {/* URL Bar */}
        <div className="flex-1 flex items-center gap-2 bg-gray-900/50 rounded-lg px-3 py-1.5 border border-white/10">
          <Lock className="w-3.5 h-3.5 text-white/50" />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-transparent text-white text-sm focus:outline-none"
          />
          <Star className="w-3.5 h-3.5 text-white/50 hover:text-white/80 cursor-pointer" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl text-white mb-2">Welcome</h1>
          <p className="text-white/60 mb-8">Your favorite sites</p>

          <div className="grid grid-cols-3 gap-4">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                className="h-32 rounded-xl bg-gray-900/40 border border-white/10 hover:border-white/20 transition-all flex flex-col items-center justify-center gap-3 group"
              >
                <div className={`w-12 h-12 ${link.color} rounded-lg group-hover:scale-110 transition-transform`} />
                <span className="text-white/80 text-sm">{link.name}</span>
              </button>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="mt-12">
            <h2 className="text-xl text-white mb-4">Recent Activity</h2>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg bg-gray-900/40 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                >
                  <div className="text-white text-sm mb-1">Example Website {i}</div>
                  <div className="text-white/40 text-xs">https://example{i}.com</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
