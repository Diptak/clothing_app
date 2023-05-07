// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useCallback } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwAPNO3hiSsc0P7jAaUbD3tGhipzfjIt0",
    authDomain: "crwn-clothing-db-275e3.firebaseapp.com",
    projectId: "crwn-clothing-db-275e3",
    storageBucket: "crwn-clothing-db-275e3.appspot.com",
    messagingSenderId: "830246351062",
    appId: "1:830246351062:web:6a938738d9cc7306b35977"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const  signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{

  if(!email || !password)return;
  return await createUserWithEmailAndPassword(auth, email[0], password[0])
}

export const signInAuthUserWithEmailAndPassword = async (email, password)=>{

  if(!email || !password)return;
  return await signInWithEmailAndPassword(auth, email[0], password[0])
}

export const signOutUser = async () =>{
  await signOut(auth)
}

export const onAuthStateChangedListner = (callback) =>{
  onAuthStateChanged(auth, callback)
}