  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDbfqt1-mwcH-TwSyd1F6sXRxlcSa3Ac-Y",
    authDomain: "login-signup-firebase-178ea.firebaseapp.com",
    projectId: "login-signup-firebase-178ea",
    storageBucket: "login-signup-firebase-178ea.appspot.com",
    messagingSenderId: "994532995653",
    appId: "1:994532995653:web:7f49a8a6de56f402f2a92c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app);
  
  const auth = getAuth();
  console.log(auth);
  let email=document.getElementById('signUpEmail')
  let password=document.getElementById('signUpPassword')
  let signUpBtn=document.getElementById('signUp')
  signUpBtn.addEventListener('click',()=>{
      createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('User',user);
          window.location.href='login.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            alert('wrong Email');
            const errorMessage = error.message;
            alert('wrong Password');
            window.location.href='createAcc.html';
        });
    })