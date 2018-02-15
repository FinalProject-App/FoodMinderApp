import * as firebase from 'firebase';


const prodConfig = {
    apiKey: "AIzaSyCjtTk8jHl3RzpRvJYPJNd0WUil2eGPul0",
    authDomain: "foodminder-99f48.firebaseapp.com",
    databaseURL: "https://foodminder-99f48.firebaseio.com",
    projectId: "foodminder-99f48",
    storageBucket: "foodminder-99f48.appspot.com",
    messagingSenderId: "1021608740878"
  };

  const devConfig = {
    apiKey: "AIzaSyCjtTk8jHl3RzpRvJYPJNd0WUil2eGPul0",
    authDomain: "foodminder-99f48.firebaseapp.com",
    databaseURL: "https://foodminder-99f48.firebaseio.com",
    projectId: "foodminder-99f48",
    storageBucket: "foodminder-99f48.appspot.com",
    messagingSenderId: "1021608740878"
  };
  
  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();

const auth = firebase.auth();

export{
  db,
	auth,
};