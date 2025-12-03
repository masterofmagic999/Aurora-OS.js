import { FolderOpen, Settings, Mail, Calendar, Image, Music, Video, Terminal, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect, useMemo, memo } from 'react';
import type { WindowState } from '../App';

interface DockProps {
  onOpenApp: (appType: string) => void;
  onRestoreWindow: (windowId: string) => void;
  windows: WindowState[];
}

const dockApps = [
  { id: 'finder', icon: FolderOpen, label: 'Finder', color: 'from-blue-500 to-blue-600' },
  { id: 'mail', icon: Mail, label: 'Mail', color: 'from-blue-400 to-blue-500' },
  { id: 'calendar', icon: Calendar, label: 'Calendar', color: 'from-red-500 to-red-600' },
  { id: 'photos', icon: Image, label: 'Photos', color: 'from-pink-500 to-rose-600' },
  { id: 'music', icon: Music, label: 'Music', color: 'from-purple-500 to-purple-600' },
  { id: 'videos', icon: Video, label: 'Videos', color: 'from-orange-500 to-orange-600' },
  { id: 'messages', icon: MessageSquare, label: 'Messages', color: 'from-green-500 to-green-600' },
  { id: 'browser', icon: Globe, label: 'Browser', color: 'from-cyan-500 to-blue-600' },
  { id: 'terminal', icon: Terminal, label: 'Terminal', color: 'from-gray-700 to-gray-900' },
  { id: 'settings', icon: Settings, label: 'Settings', color: 'from-gray-500 to-gray-600' },
];

function DockComponent({ onOpenApp, onRestoreWindow, windows }: DockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredMinimized, setHoveredMinimized] = useState<string | null>(null);
  const [shouldHide, setShouldHide] = useState(false);

  // Get minimized windows - memoized
  const minimizedWindows = useMemo(() => 
    windows.filter(w => w.isMinimized), 
    [windows]
  );

  // Memoize intersection calculation
  const hasIntersection = useMemo(() => {
    // Check if any window is maximized
    const hasMaximizedWindow = windows.some(w => w.isMaximized && !w.isMinimized);
    
    if (hasMaximizedWindow) {
      return true;
    }

    // Check if any window intersects with the dock area
    // Dock is at left: 16px, width: ~64px, vertically centered
    const dockBounds = {
      left: 16,
      right: 80, // 16 + 64
      top: window.innerHeight / 2 - 300, // Approximate dock height ~600px
      bottom: window.innerHeight / 2 + 300,
    };

    return windows.some(w => {
      if (w.isMinimized) return false;
      
      const windowBounds = w.isMaximized 
        ? { left: 0, right: window.innerWidth, top: 28, bottom: window.innerHeight }
        : { 
            left: w.position.x, 
            right: w.position.x + w.size.width,
            top: w.position.y,
            bottom: w.position.y + w.size.height,
          };

      return !(
        windowBounds.right < dockBounds.left ||
        windowBounds.left > dockBounds.right ||
        windowBounds.bottom < dockBounds.top ||
        windowBounds.top > dockBounds.bottom
      );
    });
  }, [windows]);

  useEffect(() => {
    setShouldHide(hasIntersection);
  }, [hasIntersection]);

  return (
    <div className="absolute left-4 top-1/2 -translate-y-1/2 z-[9998]">
      <motion.div 
        className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: shouldHide ? -80 : 0, 
          opacity: shouldHide ? 0 : 1 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-col gap-2">
          {/* App Icons */}
          {dockApps.map((app, index) => (
            <motion.button
              key={app.id}
              className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onOpenApp(app.id)}
              whileHover={{ scale: 1.1, x: 8 }}
              whileTap={{ scale: 0.95 }}
            >
              <app.icon className="w-6 h-6" />
              
              {hoveredIndex === index && (
                <motion.div
                  className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-md text-white text-xs rounded-lg whitespace-nowrap border border-white/20"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {app.label}
                </motion.div>
              )}
            </motion.button>
          ))}

          {/* Separator if there are minimized windows */}
          {minimizedWindows.length > 0 && (
            <div className="h-px bg-white/20 my-1" />
          )}

          {/* Minimized Windows */}
          {minimizedWindows.map((window) => (
            <motion.button
              key={window.id}
              className="relative w-12 h-12 rounded-xl bg-gray-700/50 backdrop-blur-md flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all border border-white/20"
              onMouseEnter={() => setHoveredMinimized(window.id)}
              onMouseLeave={() => setHoveredMinimized(null)}
              onClick={() => onRestoreWindow(window.id)}
              whileHover={{ scale: 1.1, x: 8 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <div className="text-xs text-center overflow-hidden px-1">
                {window.title.charAt(0)}
              </div>
              
              {/* Active indicator */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />

              {hoveredMinimized === window.id && (
                <motion.div
                  className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900/90 backdrop-blur-md text-white text-xs rounded-lg whitespace-nowrap border border-white/20"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {window.title}
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export const Dock = memo(DockComponent);