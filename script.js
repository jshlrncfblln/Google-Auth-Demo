
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { GoogleAuthProvider, getAuth, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  

  const provider = new GoogleAuthProvider();

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCyxdj_suoNiG8zLxNZMpAFCAltojHHVyo",
    authDomain: "authentication-demo-2b062.firebaseapp.com",
    projectId: "authentication-demo-2b062",
    storageBucket: "authentication-demo-2b062.appspot.com",
    messagingSenderId: "192740302855",
    appId: "1:192740302855:web:ebf6c1e7afaf8f7069caa2",
    measurementId: "G-88NW0XVJ7H"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
  });

  googleBtn.addEventListener('click' , (e) => {

  } )