const firebaseConfig = {
  apiKey: process.env.REACT_aPP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_aPP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_aPP_FIREBASE_DB_URL,
  projectId: process.env.REACT_aPP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);