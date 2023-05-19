import firebase from "firebase"
import "firebase/firestore";
import "firebase/auth";
 const firebaseConfig = {
  apiKey: "AIzaSyDLhc5RBzzhLHLdn800SqQhYv2zdMJaa94",
  authDomain: "loginpage-34bf9.firebaseapp.com",
  projectId: "loginpage-34bf9",
  storageBucket: "loginpage-34bf9.appspot.com",
  messagingSenderId: "601628543017",
  appId: "1:601628543017:web:3f7aa41c044681014bf438",
}; 

firebase.initializeApp(firebaseConfig)

const projectAuth=firebase.auth()
export { projectAuth };