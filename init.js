if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /init.js');
// TODO: replace config
const firebaseConfig = {
  apiKey: "AIzaSyDvYr8jt-UyC5Y_alIoqt7RmGdlB9RyNuw",
  authDomain: "stadtnavi-ludwigsburg.firebaseapp.com",
  projectId: "stadtnavi-ludwigsburg",
  storageBucket: "stadtnavi-ludwigsburg.appspot.com",
  messagingSenderId: "605813972051",
  appId: "1:605813972051:web:969b3474ccae4c0c42faa6",
  measurementId: "G-8V9C20X6GL"
};
firebase.initializeApp(firebaseConfig);

