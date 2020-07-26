var firebaseConfig = {
    apiKey: "AIzaSyCBQTv0JVUPAk1pFtx-9Xvco2K9JFMhYAc",
    authDomain: "dreamstop-de8b9.firebaseapp.com",
    databaseURL: "https://dreamstop-de8b9.firebaseio.com",
    projectId: "dreamstop-de8b9",
    storageBucket: "dreamstop-de8b9.appspot.com",
    messagingSenderId: "664980097957",
    appId: "1:664980097957:web:f508655c873004c666364c"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()