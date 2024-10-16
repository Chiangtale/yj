import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyBdxz_Ri5wK-df4wL2ZFNcAG5bwSI9b2-Y",
  authDomain: "chiangtale.firebaseapp.com",
  projectId: "chiangtale",
  storageBucket: "chiangtale.appspot.com",
  messagingSenderId: "570297251521",
  appId: "1:570297251521:web:56acf621178e87f552c640",
  measurementId: "G-QDWJTMP70D"

};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
