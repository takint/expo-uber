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

const firebaseConfig = {};

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
  // try {
  //   const docRef = await addDoc(
  //     collection(appData, 'booked-trips'),
  //     bookingData
  //   );
  //   return docRef.id;
  // } catch (e) {
  //   console.log(e);
  //   return null;
  // }
}

export { fireBaseApp, analytics, getBooking, addBooking };
