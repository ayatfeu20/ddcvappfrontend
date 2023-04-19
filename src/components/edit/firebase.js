import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage"


// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6rTn8rdCPVuctMC0wDJrHAysNAdPDEvU",
  authDomain: "ddcvapp-60251.firebaseapp.com",
  projectId: "ddcvapp-60251",
  storageBucket: "ddcvapp-60251.appspot.com",
  messagingSenderId: "703957387676",
  appId: "1:703957387676:web:78ec316153ad97d63ae059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

