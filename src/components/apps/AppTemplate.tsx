import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface AppTemplateProps {
  sidebar?: {
    sections: {
      title: string;
      items: {
        id: string;
        label: string;
        icon: LucideIcon;
        badge?: string;
      }[];
    }[];
  };
  toolbar?: ReactNode;
  content: ReactNode;
  hasSidebar?: boolean;
}

export function AppTemplate({ sidebar, toolbar, content, hasSidebar = true }: AppTemplateProps) {
  return (
    <div className="flex flex-col h-full bg-gray-800/40 backdrop-blur-md">
      {/* Toolbar */}
      {toolbar && (
        <div className="h-12 bg-gray-900/30 backdrop-blur-md border-b border-white/10 flex items-center px-4">
          {toolbar}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        {hasSidebar && sidebar && (
          <div className="w-56 bg-gray-900/30 backdrop-blur-md border-r border-white/10 py-3 px-2 overflow-y-auto">
            {sidebar.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-4' : ''}>
                {section.title && (
                  <div className="px-3 py-1 text-xs text-white/40 mb-1">{section.title}</div>
                )}
                <div className="space-y-0.5">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      className="w-full flex items-center gap-2.5 px-2.5 py-1.5 text-sm text-white/70 hover:bg-white/5 rounded-md transition-colors group"
                    >
                      <item.icon className="w-4 h-4 text-white/50 group-hover:text-white/70 flex-shrink-0" />
                      <span className="flex-1 text-left truncate">{item.label}</span>
                      {item.badge && (
                        <span className="text-xs text-white/40">{item.badge}</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {content}
        </div>
      </div>
    </div>
  );
}
