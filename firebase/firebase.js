// The functions from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {getReactNativePersistence, initializeAuth} from 'firebase/auth/react-native';

import { getFirestore }  from "@firebase/firestore"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJGGXyhtb_gQ-_kFup5-HD73NLGXP1-Ec",
  authDomain: "wornn-fee24.firebaseapp.com",
  projectId: "wornn-fee24",
  storageBucket: "wornn-fee24.appspot.com",
  messagingSenderId: "1026061010335",
  appId: "1:1026061010335:web:f82c2c0d5fb148040029aa"
};

// Initialize Firebase
let app;
if ( getApps().length === 0 ) {
  // if app not initialised yet, create one
    app = initializeApp(firebaseConfig) 
} else {
  // if app already initialised, dont create a new, use the app
    app = getApp()
}

// Initialize Firebase Authentication and get a reference to the service
// below code used instead of getAuth(app)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

//Returns the existing Firestore instance that is associated with the provided FirebaseApp. If no instance exists, initializes a new instance with default settings.
const db = getFirestore(app)

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app)

export {auth, db, storage}

