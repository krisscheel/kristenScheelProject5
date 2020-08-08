import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCV6MxKgqcAYlaavVFCzRQwwfhh4aUcvp4",
  authDomain: "kristen-scheel-project5.firebaseapp.com",
  databaseURL: "https://kristen-scheel-project5.firebaseio.com",
  projectId: "kristen-scheel-project5",
  storageBucket: "kristen-scheel-project5.appspot.com",
  messagingSenderId: "233635611396",
  appId: "1:233635611396:web:f58311c363c48f20c4c651"
};

firebase.initializeApp(firebaseConfig);

export default firebase;