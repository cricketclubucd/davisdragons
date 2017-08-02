/*
 * Please see the included LICENSE.md file for license terms and conditions.
 */

window.app = window.app || {} ;         // there should only be one of these...

app.LOG = app.LOG || true; // Set to "true" if you want the console.log messages to appear.

app.consoleLog = function() {
    if( app.LOG ) {
        var args = Array.prototype.slice.call(arguments, 0) ;
        console.log.apply(console, args) ;
    }
} ;

// App init point (runs on custom app.Ready event from init-dev.js).
// Runs after underlying device native code and webview/browser is ready.
// KICK OFF point for the app.
// Customize this function to initialize your application, as needed.

app.initEvents = function() {
    "use strict";
    var fName = "app.initEvents():";
    app.consoleLog(fName, "entry");

    var el, el2, evt;

    if( navigator.msPointerEnabled || !('ontouchend' in window))    // if on Win 8 machine or no touch
        evt = "click";                                             // let touch become a click event
    else                                                            // else, assume touch events available
        evt = "touchend";                                          // not optimum, but works

    el = document.getElementById("id_btnHello");
    el.addEventListener(evt, myEventHandler, false);
    
    el2 = document.getElementById("id_btnSignIn");
    el2.addEventListener(evt, signInHandler, false);

    app.initDebug();
    app.hideSplashScreen();
    
    // app initialization is done
    // app event handlers are ready
    // exit to idle state and wait for app events...

    app.consoleLog(fName, "exit") ;
} ;
document.addEventListener("app.Ready", myEventHandler, false);
document.addEventListener("app.Ready", app.initEvents, false) ;

// Just a bunch of useful debug console.log() messages.
// Runs after underlying device native code and webview/browser is ready.

app.initDebug = function() {
    "use strict" ;
    var fName = "app.initDebug():" ;
    app.consoleLog(fName, "entry") ;

    if( window.device && device.cordova ) {                     // old Cordova 2.x version detection
        app.consoleLog("device.version: " + device.cordova) ;   // print the cordova version string...
        app.consoleLog("device.model: " + device.model) ;
        app.consoleLog("device.platform: " + device.platform) ;
        app.consoleLog("device.version: " + device.version) ;
    }

    if( window.cordova && cordova.version ) {                   // only works in Cordova 3.x
        app.consoleLog("cordova.version: " + cordova.version) ; // print new Cordova 3.x version string...

        if( cordova.require ) {                                 // print included cordova plugins
            app.consoleLog(JSON.stringify(cordova.require('cordova/plugin_list').metadata, null, 1)) ;
        }
    }

    app.consoleLog(fName, "exit") ;
} ;

// Using a splash screen is optional. This function will not fail if none is present.
// This is also a simple study in the art of multi-platform device API detection.

app.hideSplashScreen = function() {
    "use strict" ;
    var fName = "app.hideSplashScreen():" ;
    app.consoleLog(fName, "entry") ;

    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    if( window.intel && intel.xdk && intel.xdk.device ) {           // Intel XDK device API detected, but...
        if( intel.xdk.device.hideSplashScreen )                     // ...hideSplashScreen() is inside the base plugin
            intel.xdk.device.hideSplashScreen() ;
    }

    app.consoleLog(fName, "exit") ;
} ;
