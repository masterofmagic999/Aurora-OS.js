
import { toast } from 'sonner';
import { soundManager } from './sound';
import { SystemToast } from '../components/ui/notifications/SystemToast';
import { type LucideIcon } from 'lucide-react';
import { Bell } from 'lucide-react';

type NotificationType = 'success' | 'warning' | 'error';

// Store reference to notification context addNotification function
let addNotificationToCenter: ((notification: {
    icon: LucideIcon;
    title: string;
    message: string;
    time: string;
    color: string;
    appType?: string;
    appData?: any;
}) => void) | null = null;

// Function to register the notification center
export const registerNotificationCenter = (addFn: typeof addNotificationToCenter) => {
    addNotificationToCenter = addFn;
};

// Map notification types to colors
const typeToColor: Record<NotificationType, string> = {
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
};

export const notify = {
    system: (type: NotificationType, source: string, message: string, options?: { appType?: string; appData?: any }) => {
        // Play sound
        soundManager.play(type);

        // Show toast
        toast.custom(() => (
            <SystemToast type={type} source={source} message={message} />
        ), {
            position: 'bottom-right',
            duration: 4000,
        });

        // Add to notification center if registered
        if (addNotificationToCenter) {
            addNotificationToCenter({
                icon: Bell,
                title: source,
                message: message,
                time: 'Just now',
                color: typeToColor[type],
                appType: options?.appType,
                appData: options?.appData,
            });
        }
    },
};
