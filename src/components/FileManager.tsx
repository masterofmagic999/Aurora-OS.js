import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  FolderOpen, 
  File, 
  Image, 
  Music, 
  Video,
  FileText,
  Download,
  Star,
  Clock,
  Trash2,
  HardDrive,
  Cloud,
  Search,
  Grid3x3,
  List,
  Users,
  Monitor
} from 'lucide-react';

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'file' | 'image' | 'music' | 'video' | 'document';
  size?: string;
  itemCount?: string;
  modified: string;
}

const sidebarSections = {
  favorites: [
    { icon: Star, label: 'AirDrop', badge: null },
    { icon: Clock, label: 'Recents', badge: null },
    { icon: FolderOpen, label: 'Applications', badge: '1 item' },
    { icon: Monitor, label: 'Desktop', badge: '2 items' },
    { icon: FileText, label: 'Documents', badge: '1 item' },
    { icon: Download, label: 'Downloads', badge: '12 items' },
  ],
  icloud: [
    { icon: Cloud, label: 'iCloud Drive', badge: null },
    { icon: Users, label: 'Shared', badge: null },
  ],
  locations: [
    { icon: HardDrive, label: 'BCHMRM-NMX0003', badge: null },
  ],
  tags: [
    { icon: null, label: 'Red', color: 'bg-red-500' },
    { icon: null, label: 'Orange', color: 'bg-orange-500' },
    { icon: null, label: 'Yellow', color: 'bg-yellow-500' },
  ],
};

const fileItems: FileItem[] = [
  { id: '1', name: 'Egnyte - mwgemea', type: 'folder', itemCount: '2 items', modified: 'Today, 2:30 PM' },
  { id: '2', name: 'OneDrive - Interpublic', type: 'folder', modified: 'Yesterday' },
  { id: '3', name: 'Applications', type: 'folder', itemCount: '1 item', modified: 'Dec 1, 2025' },
  { id: '4', name: 'Desktop', type: 'folder', itemCount: '2 items', modified: 'Today, 1:15 PM' },
  { id: '5', name: 'Documents', type: 'folder', itemCount: '1 item', modified: 'Nov 28' },
  { id: '6', name: 'Downloads', type: 'folder', itemCount: '12 items', modified: 'Nov 25' },
  { id: '7', name: 'Movies', type: 'folder', itemCount: '2 items', modified: 'Nov 20' },
  { id: '8', name: 'Music', type: 'folder', itemCount: '1 item', modified: 'Today, 9:00 AM' },
  { id: '9', name: 'Pictures', type: 'folder', itemCount: '4 items', modified: 'Today, 9:00 AM' },
  { id: '10', name: 'Public', type: 'folder', itemCount: '1 item', modified: 'Today, 9:00 AM' },
];

export function FileManager() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const getFolderIcon = () => {
    return (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 18C12 15.7909 13.7909 14 16 14H32L37 21H64C66.2091 21 68 22.7909 68 25V62C68 64.2091 66.2091 66 64 66H16C13.7909 66 12 64.2091 12 62V18Z"
          fill="url(#folder-gradient)"
        />
        <defs>
          <linearGradient id="folder-gradient" x1="40" y1="14" x2="40" y2="66" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="1" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <div className="flex h-full bg-gray-800/40 backdrop-blur-md">
      {/* Sidebar */}
      <div className="w-56 bg-gray-900/30 backdrop-blur-md border-r border-white/10 py-3 px-2 overflow-y-auto">
        {/* Favourites */}
        <div className="mb-4">
          <div className="px-3 py-1 text-xs text-white/40 mb-1">Favourites</div>
          <div className="space-y-0.5">
            {sidebarSections.favorites.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-2.5 px-2.5 py-1.5 text-sm text-white/70 hover:bg-white/5 rounded-md transition-colors group"
              >
                <item.icon className="w-4 h-4 text-white/50 group-hover:text-white/70 flex-shrink-0" />
                <span className="flex-1 text-left truncate">{item.label}</span>
                {item.badge && (
                  <span className="text-xs text-white/40">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* iCloud */}
        <div className="mb-4">
          <div className="px-3 py-1 text-xs text-white/40 mb-1">iCloud</div>
          <div className="space-y-0.5">
            {sidebarSections.icloud.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-2.5 px-2.5 py-1.5 text-sm text-white/70 hover:bg-white/5 rounded-md transition-colors group"
              >
                <item.icon className="w-4 h-4 text-white/50 group-hover:text-white/70 flex-shrink-0" />
                <span className="flex-1 text-left truncate">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="mb-4">
          <div className="px-3 py-1 text-xs text-white/40 mb-1">Locations</div>
          <div className="space-y-0.5">
            {sidebarSections.locations.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-2.5 px-2.5 py-1.5 text-sm text-white/70 hover:bg-white/5 rounded-md transition-colors group"
              >
                <item.icon className="w-4 h-4 text-white/50 group-hover:text-white/70 flex-shrink-0" />
                <span className="flex-1 text-left truncate">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <div className="px-3 py-1 text-xs text-white/40 mb-1">Tags</div>
          <div className="space-y-0.5">
            {sidebarSections.tags.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-2.5 px-2.5 py-1.5 text-sm text-white/70 hover:bg-white/5 rounded-md transition-colors"
              >
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                <span className="flex-1 text-left truncate">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-gray-900/30">
          <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-white/5 rounded-md transition-colors">
              <ChevronLeft className="w-4 h-4 text-white/50" />
            </button>
            <button className="p-1.5 hover:bg-white/5 rounded-md transition-colors">
              <ChevronRight className="w-4 h-4 text-white/50" />
            </button>
            <div className="ml-3 px-3 py-1 bg-gray-700/50 rounded-md text-sm text-white/90">
              robert.dragoiu
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5'
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <button className="p-1.5 hover:bg-white/5 rounded-md transition-colors">
              <Search className="w-4 h-4 text-white/50" />
            </button>
          </div>
        </div>

        {/* Files Grid/List */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-6 gap-6">
            {fileItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/5 transition-colors group ${
                  selectedItem === item.id ? 'bg-white/10' : ''
                }`}
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  {getFolderIcon()}
                </div>
                <div className="w-full text-center">
                  <div className="text-sm text-white/90 truncate px-1">
                    {item.name}
                  </div>
                  {item.itemCount && (
                    <div className="text-xs text-blue-400 mt-0.5">
                      {item.itemCount}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}