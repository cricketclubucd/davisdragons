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
