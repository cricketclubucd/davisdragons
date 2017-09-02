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

    //navigator.notification.alert(str) ;
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


(function()
{
  const txtEmail = document.getElementById("txtEmail");

  const txtPassword = document.getElementById("txtPassword");

  const  btnLogin = document.getElementById("id_btnLogin");
  btnLogin.addEventListener('click',  e=>{
      const email = txtEmail.value; // get the email
      const password= txtPassword.value;// get the password
    if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }

  const auth = firebase.auth();
  const promise =auth.signInWithEmailAndPassword(email, password);
  promise.catch(function(error) {
  var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
         // Handle Errors here.
      });
     }); // end of first eventListener for login


} ()); // end of  function


















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
