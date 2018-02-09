import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCjtTk8jHl3RzpRvJYPJNd0WUil2eGPul0",
    authDomain: "foodminder-99f48.firebaseapp.com",
    databaseURL: "https://foodminder-99f48.firebaseio.com",
    projectId: "foodminder-99f48",
    storageBucket: "foodminder-99f48.appspot.com",
    messagingSenderId: "1021608740878"
  };
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
export{
	auth,
};