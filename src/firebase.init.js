
import {getAuth} from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBhS1D02UqgU8iCzJk5GnzssiblWNDAZBo",
  authDomain: "dorctors-services.firebaseapp.com",
  projectId: "dorctors-services",
  storageBucket: "dorctors-services.appspot.com",
  messagingSenderId: "293071047700",
  appId: "1:293071047700:web:6158ca894147576d236b01"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth