   (function(){
    const config = 
    {
        apiKey: "AIzaSyD6anW3vwA6GRjWrrdz2L43QEqOVecGrgo",
        authDomain: "davisdragons-b41c9.firebaseapp.com",
        databaseURL: "https://davisdragons-b41c9.firebaseio.com",
        projectId: "davisdragons-b41c9",
        storageBucket: "",
        messagingSenderId: "881322195809"
      };
      firebase.initializeApp(config);
        
    const id_txtEmail= document.getElementById('id_txtEmail');
    const id_txtPassword= document.getElementById('id_txtPassword');
    const id_btnSubmit= document.getElementById('id_btnSubmit');
    const id_btnSignUp= document.getElementById('id_btnSignUp');
    // Add login event
    id_btnSubmit.addEventListener('click', e=> {
    // Get email and password
    const email= id_txtEmail.value;
    const password = id_txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));

    }); // end of eventListener for login button


  }());


   









function signInAction()
{
   var myButton = document.getElementById("id_btnUmp");
        myButton.addEventListener("click", umpireHandler, false);

}

function umpireHandler()
{

    "use strict";

    window.location = "UmpireScreen.html";


}

const 
