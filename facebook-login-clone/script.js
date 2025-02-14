
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBLrHJxx9RVi22ycZCjlVCUiF1DCKyOwck",
    authDomain: "proj1-6b829.firebaseapp.com",
    projectId: "proj1-6b829",
    storageBucket: "proj1-6b829.firebasestorage.app",
    messagingSenderId: "59916802315",
    appId: "1:59916802315:web:ecbdbde46d6910a9cf6a0e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  SubmitData.addEventListener('click',(e) =>{

  });