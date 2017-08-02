/*
 * Copyright © 2017, Cricket Club at UC Davis.
 * Please see the included LICENSE.md file for license terms and conditions.
 */

window.dev = window.dev || {} ;         // could be predefined in index.html file...

// Use performance counter if it is available, otherwise, use milliseconds since 1970

if( window.performance && performance.now ) {
    dev.timeStamp = function() { return performance.now().toFixed(3) ; } ;
}
else {
    dev.timeStart = Date.now() ;        // feeble zero ref for relative time in ms
    dev.timeStamp = function() { return (Date.now() - dev.timeStart) ; } ;
}

dev.LOG = dev.LOG || true ; // Set to "true" if you want the console.log messages to appear.

dev.consoleLog = function() {
    if( dev.LOG ) {
        var args = Array.prototype.slice.call(arguments, 0) ;
        console.log.apply(console, args) ;
    }
} ;

// Defines some delays constants used throughout for ready detections.
// Each should be smaller than the next; most cases should work as is.
// Lowering dev.BROWSER speeds up detection of browser scenario...
// ...at expense of possible false detects of browser environment...
// ...probably okay to go as low as 3000ms, depends on external libraries, etc.
// dev.NAME = dev.NAME || ## ; allows for override of values in index.html

if( typeof window.cordova !== "undefined" ) // if real cordova.js is present, we should detect a "deviceready"...
    dev.BROWSER = dev.BROWSER || 7000 ;     // ...best if >5 seconds when Cordova is expected to be present

dev.INSURANCE = dev.INSURANCE || 250 ;      // msecs, insurance on registering ready events detected
dev.WINDOW_LOAD = dev.WINDOW_LOAD || 500 ;  // msecs, for combating premature window load events
dev.BROWSER = dev.BROWSER || 500 ;          // msecs, non-Cordova apps don't care about "deviceready" events
dev.FAIL_SAFE = dev.FAIL_SAFE || 10000 ;    // msecs, if all else fails, this saves our bacon :-)



// Used to keep track of time when each of these items was triggered.
// Sorry for the weird names in the isDeviceReady structure, it's done for
// easier debugging and comparison of numbers when displayed in console.log messages.

dev.isDeviceReady = {                   // listed in approximate order expected
    a_startTime______:dev.timeStamp(),  // when we started execution of this module
    b_fnDocumentReady:false,            // detected document.readyState == "complete"
    c_cordova_ready__:false,            // detected cordova device ready event
    d_xdk_ready______:false,            // detected Intel XDK device ready event
    e_fnDeviceReady__:false,            // entered onDeviceReady()
    f_browser_ready__:false             // detected browser container
} ;



// Where the device ready event ultimately ends up, regardless of environment.
// Runs after underlying device native code and browser is initialized.
// Usually not much needed here, just additional "device init" code.
// See initDeviceReady() below for code that kicks off this function.
// This function works with Cordova and Intel XDK webview or in a browser.

// NOTE: Customize this function, if necessary, for low-level init of your app.

dev.onDeviceReady = function() {
    var fName = "dev.onDeviceReady():" ;
    dev.consoleLog(fName, "entry") ;

    // Useful for debug and understanding initialization flow.
    if( dev.isDeviceReady.e_fnDeviceReady__ ) {
        dev.consoleLog(fName, "function terminated") ;
        return ;
    } else {
        dev.isDeviceReady.e_fnDeviceReady__ = dev.timeStamp() ;
    }

    // TODO: change this to use new custom events if I confirm it works in all webviews.
    // All device initialization is done; create and issue custom event named "app.Ready".
    // Using deprecated custom events until I can confirm new method works in all webviews...

    var evt = document.createEvent("Event") ;
    evt.initEvent("app.Ready", false, false) ;
    document.dispatchEvent(evt) ;

    dev.consoleLog(fName, dev.isDeviceReady) ;
    dev.consoleLog(fName, "exit") ;
} ;

// The following is not fool-proof, we're mostly interested in detecting one
// or both events to insure device init is finished, detecting either will do.
// Even though the timing should indicate which container, it does not always work.

// If this event is called first, we should be in the Cordova container.

dev.onDeviceReadyCordova = function() {
    dev.isDeviceReady.c_cordova_ready__ = dev.timeStamp() ;
    var fName = "dev.onDeviceReadyCordova():" ;
    dev.consoleLog(fName, dev.isDeviceReady.c_cordova_ready__) ;
    window.setTimeout(dev.onDeviceReady, dev.INSURANCE) ;
} ;

// If this event is called first, we should be in the legacy Intel XDK container.

dev.onDeviceReadyXDK = function() {
    dev.isDeviceReady.d_xdk_ready______ = dev.timeStamp() ;
    var fName = "dev.onDeviceReadyXDK():" ;
    dev.consoleLog(fName, dev.isDeviceReady.d_xdk_ready______) ;
    window.setTimeout(dev.onDeviceReady, dev.INSURANCE) ;
} ;

// This is a faux onDeviceReady for browser scenario, mostly for code symmetry and fail-safe.

dev.onDeviceReadyBrowser = function() {
    dev.isDeviceReady.f_browser_ready__ = dev.timeStamp() ;
    var fName = "dev.onDeviceReadyBrowser():" ;
    dev.consoleLog(fName, dev.isDeviceReady.f_browser_ready__) ;
    window.setTimeout(dev.onDeviceReady, dev.INSURANCE) ;
} ;

// Runs after document is loaded, and sets up wait for native (device) init to finish.
// If we're running in a browser we're ready to go when document is loaded, but...
// if we're running on a device we need to wait for native code to finish its init.

dev.initDeviceReady = function() {
    var fName = "dev.initDeviceReady():" ;
    dev.consoleLog(fName, "entry") ;

    // Useful for debug and understanding initialization flow.
    if( dev.isDeviceReady.b_fnDocumentReady ) {
        dev.consoleLog(fName, "function terminated") ;
        return ;
    } else {
        dev.isDeviceReady.b_fnDocumentReady = dev.timeStamp() ;
    }

    document.addEventListener("intel.xdk.device.ready", dev.onDeviceReadyXDK, false) ;
    document.addEventListener("deviceready", dev.onDeviceReadyCordova, false) ;
    window.setTimeout(dev.onDeviceReadyBrowser, dev.BROWSER) ;

    // Last one, above, is fail-safe, in case we got no device ready event from Cordova or Intel XDK.
    // Cordova will timeout after five seconds, so we use a longer timeout to be conservative.
    // Very end of this file includes a "fail-safe, fail-safe" in case all else fails!

    // TODO: might want to double-check for Cordova deviceready, shouldn't be required...
    // "if" logic (below) needs further investigation in Cordova, legacy and debug containers
    // 0 = Non-sticky, 1 = Sticky non-fired, 2 = Sticky fired.
    // if( window.channel && channel.onCordovaReady && (channel.onCordovaReady.state === 2) )
    //     dev.onDeviceReadyCordova() ;

    dev.consoleLog(fName, "navigator.vendor:", navigator.vendor) ;
    dev.consoleLog(fName, "navigator.platform:", navigator.platform) ;
    dev.consoleLog(fName, "navigator.userAgent:", navigator.userAgent) ;

    dev.consoleLog(fName, "exit") ;
} ;



// Wait for document ready before looking for device ready.
// This insures the app does not start running until DOM is ready and...
// ...makes it easier to deal with both in-browser and on-device scenarios and...
// ...makes it easier to init device-dependent and device-independent code in one place.

// NOTE: document.readyState seems to be more reliable, but seems not to be omnipresent.
// NOTE: Delay after "load" event is added because some webviews appear to trigger prematurely.
// NOTE: Looks like overkill, we are trying to capture any and all doc ready events.
// Parts derived from http://dean.edwards.name/weblog/2006/06/again/

if( document.readyState ) {
    dev.consoleLog("document.readyState:", document.readyState) ;
    document.onreadystatechange = function () {
        dev.consoleLog("document.readyState:", document.readyState) ;
        if( (document.readyState === "complete") || (document.readyState === "loaded") ) {
            dev.initDeviceReady() ;
        }
    } ;
}

if( document.addEventListener ) {
    dev.consoleLog("document.addEventListener:", dev.timeStamp()) ;
    document.addEventListener("DOMContentLoaded", dev.initDeviceReady, false) ;
}

if( window.addEventListener ) {
    dev.consoleLog("window.addEventListener:", dev.timeStamp()) ;
    window.addEventListener("load", dev.initDeviceReady, false) ;
} else if( window.attachEvent ) {
    dev.consoleLog("window.attachEvent:", dev.timeStamp()) ;
    window.attachEvent("onload", dev.initDeviceReady) ;
}

// window.addEventListener("load", function(){window.setTimeout(dev.initDeviceReady,dev.WINDOW_LOAD);}.bind(dev), false) ;
// window.onload = function(){window.setTimeout(dev.initDeviceReady,dev.WINDOW_LOAD);}.bind(dev) ;
// window.onload = dev.initDeviceReady ;

window.setTimeout(dev.initDeviceReady, dev.FAIL_SAFE) ;     // fail-safe fail-safe, just in case we miss all events!
dev.consoleLog("end init-dev.js:", dev.timeStamp()) ;       // debug marker to indicate finished reading init-dev.js
