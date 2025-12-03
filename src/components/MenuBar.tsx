import { Apple, Wifi, Battery, Volume2, Bell, Search } from 'lucide-react';
import { useState, useEffect, memo } from 'react';

interface MenuBarProps {
  onNotificationsClick: () => void;
}

function MenuBarComponent({ onNotificationsClick }: MenuBarProps) {
  const [currentTime, setCurrentTime] = useState(() => 
    new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  );
  
  const [currentDate, setCurrentDate] = useState(() => 
    new Date().toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    })
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
      setCurrentDate(now.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-7 bg-gray-900/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-[9999]">
      {/* Left side */}
      <div className="flex items-center gap-6">
        <Apple className="w-4 h-4 text-white" />
        <div className="flex items-center gap-4 text-white/70 text-xs">
          <button className="hover:text-white transition-colors">Finder</button>
          <button className="hover:text-white transition-colors">File</button>
          <button className="hover:text-white transition-colors">Edit</button>
          <button className="hover:text-white transition-colors">View</button>
          <button className="hover:text-white transition-colors">Go</button>
          <button className="hover:text-white transition-colors">Window</button>
          <button className="hover:text-white transition-colors">Help</button>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="text-white/70 hover:text-white transition-colors">
          <Search className="w-4 h-4" />
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          <Battery className="w-4 h-4" />
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          <Wifi className="w-4 h-4" />
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          <Volume2 className="w-4 h-4" />
        </button>
        <button 
          className="text-white/70 hover:text-white transition-colors"
          onClick={onNotificationsClick}
        >
          <Bell className="w-4 h-4" />
        </button>
        <div className="text-white/80 text-xs flex items-center gap-2">
          <span>{currentDate}</span>
          <span>{currentTime}</span>
        </div>
      </div>
    </div>
  );
}

export const MenuBar = memo(MenuBarComponent);