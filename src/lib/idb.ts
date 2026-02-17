import { openDB } from 'idb';

const DB_NAME = 'zyvanta-offline';
const STORE_NAME = 'pending-actions';

export async function initDB() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
            }
        },
    });
}

export async function saveAction(action: { type: string; data: unknown; timestamp: number }) {
    const db = await initDB();
    return db.add(STORE_NAME, action);
}

export async function getPendingActions() {
    const db = await initDB();
    return db.getAll(STORE_NAME);
}

export async function clearAction(id: number) {
    const db = await initDB();
    return db.delete(STORE_NAME, id);
}
