import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBa0DQG1qgLHF76O6vrcRvKCxoH1jpHwPQ',
  authDomain: 'clone-1b28a.firebaseapp.com',
  databaseURL: 'https://clone-1b28a.firebaseio.com',
  projectId: 'clone-1b28a',
  storageBucket: 'clone-1b28a.appspot.com',
  messagingSenderId: '975008632674',
  appId: '1:975008632674:web:83867877d21c30e50ee63b',
  measurementId: 'G-Z6RF30QSPP',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
