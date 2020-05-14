// import firebase from 'firebase/app';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Replace this with your own config details
  var firebaseConfig = {
    apiKey: "AIzaSyBoVmOiaBdJyCj_Wa7zjg5MlSG_NdJq8OM",
    authDomain: "redux-firebse.firebaseapp.com",
    databaseURL: "https://redux-firebse.firebaseio.com",
    projectId: "redux-firebse",
    storageBucket: "redux-firebse.appspot.com",
    messagingSenderId: "1084338702282",
    appId: "1:1084338702282:web:d012ece5762711eb237133",
    measurementId: "G-1H8FHDRG6T"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 