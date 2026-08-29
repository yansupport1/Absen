/* Absensi Digital: Firebase Web config only initializes the Realtime Database. */
import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase, type Database } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const firebaseEnabled = Boolean(firebaseConfig.apiKey && firebaseConfig.databaseURL && firebaseConfig.projectId && firebaseConfig.appId);
let database: Database | null = null;
export function getFirebaseApp() { if (!firebaseEnabled) return null; try { return getApps().length ? getApp() : initializeApp(firebaseConfig); } catch (error) { console.warn("Firebase app tidak dapat diinisialisasi.", error); return null; } }
export function getFirebaseDatabase() { if (database) return database; const app = getFirebaseApp(); if (!app) return null; try { database = getDatabase(app); return database; } catch (error) { console.warn("Firebase Realtime Database tidak tersedia.", error); return null; } }
