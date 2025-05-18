// backend/firebase.ts
import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

const db = admin.firestore();

export { db };
