 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
 import {getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

 const firebaseConfig = {
   apiKey: "AIzaSyBUBSvzzjWeQc8I8Q--uCIRviUqoo7h2lM",
   authDomain: "lw-c2a70.firebaseapp.com",
   projectId: "lw-c2a70",
   storageBucket: "lw-c2a70.firebasestorage.app",
   messagingSenderId: "228620418031",
   appId: "1:228620418031:web:57ab438368e4ad9a46141a",
   measurementId: "G-WT051VKB0Q"
 };

 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const submit = document.getElementById("submit");
submit.addEventListener("click",function(event){
    event.preventDefault();
    signInWithPopup(auth,provider)
    .then((result)=>{
        const credential = GoogleAuthProvider.credentialFormResult(result);
        const token = credential.accessToken;
        const user = result.user;
        alert(user)
        window.location.href="success.html"
    })

    .catch((error)=>{
        const errorCode = error.code;
        consterrorMessage = error.message;
        alert(errorMessage)
    });
})