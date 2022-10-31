// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  doc,
  getDocs,
  getFirestore,
  collection,
  addDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCwSbWdjYIHEypuYyQFS4os6crDeO1Vv2k',
  authDomain: 'ciiclobackend.firebaseapp.com',
  projectId: 'ciiclobackend',
  storageBucket: 'ciiclobackend.appspot.com',
  messagingSenderId: '273119135933',
  appId: '1:273119135933:web:f566522d98a8f959934fd4',
  measurementId: 'G-GPLLJVSEZR',
  // The value of `databaseURL` depends on the location of the database
  databaseURL: 'https://ciiclobackend-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireBaseApp);
const appData = getFirestore(fireBaseApp);

async function getBooking() {
  // const querySnapshot = await getDocs(collection(appData, 'booked-trips'));
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.data());
  // });
  // const docRef = await addDoc(collection(appData, 'booked-trips'), {
  //   first: 'Alan',
  //   middle: 'Mathison',
  //   last: 'Turing',
  //   born: 1912
  // });
}

async function addBooking(bookingData) {
  try {
    const docRef = await addDoc(
      collection(appData, 'booked-trips'),
      bookingData
    );
    return docRef.id;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export { fireBaseApp, analytics, getBooking, addBooking };
