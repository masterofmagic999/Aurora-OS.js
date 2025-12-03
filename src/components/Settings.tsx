import { Palette, Monitor, Bell, Shield, Wifi, User, HardDrive } from 'lucide-react';
import { useState } from 'react';
import { useAppContext } from './AppContext';

const settingsSections = [
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'displays', label: 'Displays', icon: Monitor },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'network', label: 'Network', icon: Wifi },
  { id: 'security', label: 'Security & Privacy', icon: Shield },
  { id: 'users', label: 'Users & Groups', icon: User },
  { id: 'storage', label: 'Storage', icon: HardDrive },
];

const presetColors = [
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Green', value: '#10b981' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Cyan', value: '#06b6d4' },
];

export function Settings() {
  const [activeSection, setActiveSection] = useState('appearance');
  const { accentColor, setAccentColor } = useAppContext();
  const [customColor, setCustomColor] = useState(accentColor);

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomColor(value);
    setAccentColor(value);
  };

  return (
    <div className="flex h-full bg-gray-800/40 backdrop-blur-md">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900/30 backdrop-blur-md border-r border-white/10 py-4 px-3 overflow-y-auto">
        <div className="space-y-1">
          {settingsSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                activeSection === section.id
                  ? 'bg-white/10 text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <section.icon className="w-5 h-5" />
              <span className="text-sm">{section.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8">
        {activeSection === 'appearance' && (
          <div className="max-w-3xl">
            <h2 className="text-2xl text-white mb-6">Appearance</h2>
            
            {/* Accent Color Section */}
            <div className="bg-gray-900/40 rounded-xl p-6 mb-6 border border-white/5">
              <h3 className="text-lg text-white mb-4">Accent Color</h3>
              <p className="text-sm text-white/60 mb-6">
                Choose an accent color to personalize your desktop experience
              </p>

              {/* Preset Colors */}
              <div className="mb-6">
                <label className="text-sm text-white/80 mb-3 block">Preset Colors</label>
                <div className="grid grid-cols-4 gap-3">
                  {presetColors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => {
                        setAccentColor(color.value);
                        setCustomColor(color.value);
                      }}
                      className={`relative h-12 rounded-lg transition-all ${
                        accentColor === color.value
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800/40'
                          : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value }}
                    >
                      {accentColor === color.value && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Color */}
              <div>
                <label className="text-sm text-white/80 mb-3 block">Custom Color</label>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <input
                      type="color"
                      value={customColor}
                      onChange={handleCustomColorChange}
                      className="w-16 h-16 rounded-lg cursor-pointer border-2 border-white/20"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={customColor}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCustomColor(value);
                        if (/^#[0-9A-F]{6}$/i.test(value)) {
                          setAccentColor(value);
                        }
                      }}
                      placeholder="#3b82f6"
                      className="w-full px-4 py-2 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <p className="text-xs text-white/40 mt-1">
                      Enter a hex color code (e.g., #3b82f6)
                    </p>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <label className="text-sm text-white/80 mb-3 block">Preview</label>
                <div className="flex gap-3">
                  <button
                    className="px-4 py-2 rounded-lg text-white transition-all"
                    style={{ backgroundColor: accentColor }}
                  >
                    Primary Button
                  </button>
                  <button
                    className="px-4 py-2 rounded-lg transition-all border-2"
                    style={{ borderColor: accentColor, color: accentColor }}
                  >
                    Outlined Button
                  </button>
                </div>
              </div>
            </div>

            {/* Theme Section */}
            <div className="bg-gray-900/40 rounded-xl p-6 border border-white/5">
              <h3 className="text-lg text-white mb-4">Theme</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 rounded-lg bg-gray-900/50 border-2 border-white/20 hover:border-white/40 transition-all">
                  <div className="w-full h-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded mb-3" />
                  <span className="text-white text-sm">Dark</span>
                </button>
                <button className="p-4 rounded-lg bg-gray-900/50 border border-white/10 hover:border-white/20 transition-all opacity-50 cursor-not-allowed">
                  <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-gray-300 rounded mb-3" />
                  <span className="text-white/60 text-sm">Light (Coming Soon)</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'displays' && (
          <div className="max-w-3xl">
            <h2 className="text-2xl text-white mb-6">Displays</h2>
            <div className="bg-gray-900/40 rounded-xl p-6 border border-white/5">
              <p className="text-white/60">Display settings coming soon...</p>
            </div>
          </div>
        )}

        {activeSection === 'notifications' && (
          <div className="max-w-3xl">
            <h2 className="text-2xl text-white mb-6">Notifications</h2>
            <div className="bg-gray-900/40 rounded-xl p-6 border border-white/5">
              <p className="text-white/60">Notification settings coming soon...</p>
            </div>
          </div>
        )}

        {activeSection === 'network' && (
          <div className="max-w-3xl">
            <h2 className="text-2xl text-white mb-6">Network</h2>
            <div className="bg-gray-900/40 rounded-xl p-6 border border-white/5">
              <p className="text-white/60">Network settings coming soon...</p>
            </div>
          </div>
        )}

        {activeSection === 'security' && (
          <div className="max-w-3xl">
            <h2 className="text-2xl text-white mb-6">Security & Privacy</h2>
            <div className="bg-gray-900/40 rounded-xl p-6 border border-white/5">
              <p className="text-white/60">Security settings coming soon...</p>
            </div>
          </div>
        )}

        {activeSection === 'users' && (
          <div className="max-w-3xl">
            <h2 className="text-2xl text-white mb-6">Users & Groups</h2>
            <div className="bg-gray-900/40 rounded-xl p-6 border border-white/5">
              <p className="text-white/60">User settings coming soon...</p>
            </div>
          </div>
        )}

        {activeSection === 'storage' && (
          <div className="max-w-3xl">
            <h2 className="text-2xl text-white mb-6">Storage</h2>
            <div className="bg-gray-900/40 rounded-xl p-6 border border-white/5">
              <p className="text-white/60">Storage settings coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
