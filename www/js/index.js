/*
 * Please see the included LICENSE.md file for license terms and conditions.
 */

var bodyObj, className, index;

trbackgroundObj = document.getElementById('trbackground');
index = 1;
className = [
    'welcome',
    'signIn'
];

function myEventHandler() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!" ;
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

    navigator.notification.alert(str) ;
}

function updateIndex()
{
	if(index === 0)
	{
		index = 1;
    }
    else
    {
	    index = 0;
	}
}

function signInHandler()
{
    trbackgroundObj.className = className[index];
    updateIndex();
    

}

(function () 
{
    
    const id_txtEmail= document.getElementById('id_txtEmail');
    const id_txtPassword= document.getElementById('id_txtPassword');
    const id_btnSubmit= document.getElementById('id_btnSubmit');
    const id_btnSignUp= document.getElementById('id_btnSignUp');
    // Add login event
    id_btnSubmit.addEventListener('click', e=> {
    // Get email and password
    const email= id_txtEmail.value;
    const password = id_txtPassword.value;
    if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
    if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
    const auth = firebase.auth();
    //Sign in
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } 
          else {
            alert(errorMessage);
          }
    console.log(error);
    navigationHandler('memberScreen.html');

    }); // end of eventListener for login button
    id_btnSignUp.addEventListener('click', e=> {
    //get email and password
    //check for real email
 
    const email= id_txtEmail.value;
    const password = id_txtPassword.value;
    const auth = firebase.auth();
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
    //Sign in
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
    });
        
    




    }); //create

    






});
//add a realtime listener


firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser)
    {
      console.log(firebaseUser);
    }
    else
    {
      console.log("not logged in");
    }

    });

function sendEmailVerification() {
    
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
       
        alert('Email Verification Sent!');
        
      });
      
    }
}());
    
        
    


  


   







function memberHandler()
{

    "use strict";

    window.location = "memberScreen.html";
}


function userHandler()
{

    "use strict";

    window.location = "userScreen.html";
}

function navigationHandler(str)
{
	"use strict";

	window.location = str;
}

function toggle_sidebar()
{
    var sidebar = document.getElementById("sidebar");

    console.log(sidebar.style.left);

    if(sidebar.style.left == "-200px")
    {
        sidebar.style.left = "0px";
        document.addEventListener('click', toggle_sidebar, true); // Closing the sidebar
    }
    else
    {
        sidebar.style.left = "-200px";
    }
}


// ...additional event handlers here...
