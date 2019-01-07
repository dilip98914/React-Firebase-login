import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAkjvfHvzy9Mxb2UbWOrINuTLmfV2fMEv4",
    authDomain: "reactjs-project-c83fc.firebaseapp.com",
    databaseURL: "https://reactjs-project-c83fc.firebaseio.com",
    projectId: "reactjs-project-c83fc",
    storageBucket: "reactjs-project-c83fc.appspot.com",
    messagingSenderId: "851954432666"
};


const fire=firebase.initializeApp(config);
export default fire;