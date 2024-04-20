
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBKJlnweycHGEDQmXOVr8-i561xK4i5hLA",
    authDomain: "auth-11f40.firebaseapp.com",
    projectId: "auth-11f40",
    storageBucket: "auth-11f40.appspot.com",
    messagingSenderId: "664619170452",
    appId: "1:664619170452:web:f37136897170388f0e9281"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider(app);
  const auth = getAuth(app);

  document.getElementById('googleBtn').addEventListener('click', (e) => {
    signInWithRedirect(auth, provider);  
});

        // Listen for redirection result
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                
                // Redirect to dashboard
                window.location.href = "welcome.html"; // Change "dashboard.html" to your actual dashboard URL
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