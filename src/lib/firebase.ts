import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, getDocFromServer, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore with exact database ID
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Auth
export const auth = getAuth(app);

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Test Firestore connection on boot as mandated by skill
export async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline or initializing.');
    }
  }
}
testConnection();

// Sync user profile upon Google Sign-In
export async function syncUserProfile(user: User) {
  try {
    const userRef = doc(db, 'users', user.uid);
    const existingDoc = await getDoc(userRef);

    if (!existingDoc.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName || 'Home Cook',
        email: user.email || '',
        photoURL: user.photoURL || '',
        createdAt: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.error('Failed to sync user profile:', err);
  }
}

// Sign in with Google using popup
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    if (result.user) {
      await syncUserProfile(result.user);
    }
    return result.user;
  } catch (error: any) {
    console.error('Google Auth Error:', error);
    throw error;
  }
}

// Sign out
export async function logoutUser() {
  await signOut(auth);
}
