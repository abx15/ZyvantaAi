'use client';

import { useEffect, useState } from 'react';
import { getPendingActions, clearAction } from '@/lib/idb';
import { toast } from 'sonner';

export function useBackgroundSync() {
    const [isSyncing, setIsSyncing] = useState(false);

    useEffect(() => {
        const syncData = async () => {
            if (typeof window === 'undefined' || !navigator.onLine) return;

            const pendingActions = await getPendingActions();
            if (pendingActions.length === 0) return;

            setIsSyncing(true);
            toast.info(`Syncing ${pendingActions.length} offline actions...`);

            for (const action of pendingActions) {
                try {
                    // Logic to retry actions based on type
                    // For now, we simulate success or specific action routing
                    console.log('Syncing action:', action);

                    // In a real app, you'd call the corresponding server action here
                    // await processOfflineAction(action);

                    await clearAction(action.id);
                } catch (error) {
                    console.error('Sync failed for action:', action, error);
                }
            }

            setIsSyncing(false);
            toast.success('Offline sync complete');
        };

        window.addEventListener('online', syncData);
        // Initial check
        syncData();

        return () => window.removeEventListener('online', syncData);
    }, []);

    return { isSyncing };
}
