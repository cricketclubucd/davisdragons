Davis Dragons® Official App - Apache Cordova Project
======================================================

See [LICENSE.md](<LICENSE.md>) for license terms and conditions.

Project File Information
------------------------

The `icon.png` and `screenshot.png` files are not required by your project.
They are included for use by the Intel XDK template/demo panel and have no use
within a real app. You can safely delete them from your project directory.

The `cordova.js` script is needed to provide your app with access to Cordova
APIs. To add Cordova APIs to your application you must add the corresponding
Cordova plugins. See the *Plugins* section on the **Projects** tab.

Project Details
---------------

Use this project as a starting point for an Intel XDK or Apache Cordova hybrid
mobile app. One key file (`init-dev.js`) contains the initialization code
needed to manage the "ready" event. This file manages the Cordova
"deviceready" event and the standard browser "documentready" event init events
in a way that allows you to run your app in either a Cordova or web app
environment. This init code works:

* within the the Intel XDK Simulate tab (and old Emulate tab)

* in the Intel XDK App Preview application (Test tab)

* when you run your app inside a standard Browser

* in an app built using Apache Cordova (aka Cordova CLI) of PhoneGap

When `init-dev.js` completes execution it issues a custom `app.Ready` event.
Use this event to start your application, rather than waiting on "deviceready"
or "documentready" or "windowload" or similar events. You should not have to
modify anything in `init-dev.js` to use this code. Also, `init-dev.js` has
been written so that it is not dependent on any external libraries or specific
webviews. It has been tested with the following webviews and browsers:

* Android 2.3, 4.0-4.3, 4.4, 5.x, 6.x and 7.x

* iOS 6, 7, 8, 9 and 10

* Windows 8 Phone, Windows 8.x and Windows 10

* Crosswalk

* Chrome Desktop Browser

* Internet Explorer 10 and 11 and Microsoft Edge

This blank project works well for converting an existing web app into a hybrid
app. One of the biggest issues encountered when porting a web app to a hybrid
app is resolving the init sequence of the web app with the init sequence
required of a hybrid HTML5 app. This gets especially difficult when large
third-party libraries are part of the app. Due to the additional burden of
initializing the underlying native code layer, developers sometimes have trouble
getting their code that runs in a desktop browser to initialize in an HTML5
hybrid webview. Frequently this is due to the significant difference in
resources between the desktop browser and the mobile webview (e.g., less memory,
lower performance and a reduced feature set).

There are many comments in the files in this project. Please read those comments
for details and further documentation. In particular, see the comments in the
`index.html` file for recommendations on how to load your third-party libraries
relative to your application code and the special Cordova library.

There are a large number of `console.log()` messages contained within
`init-dev.js`. They can be used to debug initialization problems and understand
how the file works. It is highly recommended that you leave those
`console.log()` messages in that file, they will not unduly slow down or burden
your application. Set `dev.LOG = true` to enable the `console.log()` messages in
`init-dev.js` and set it to false for release code, it is normally set to false.

BTW: the "`dev`” prefix refers to "device" in this context, not "develop,"
because it grew out of a desire to build a more reliable and flexible "device
ready" detector.

init-dev.js
---------------------------------------------
// This file is optional.
// It is only required if you choose to use the app.Ready event it generates.
// Note the reference that includes it in the index.html file.


/*
 * NOTE: In most cases, you can leave the code in this file alone and use it as is.
 *
 * The functions in this file are designed to reliably detect various "ready" events
 * within a variety of containers (Intel XDK "legacy" container, Cordova 3.x container,
 * standard browser, App Preview, Crosswalk, etc.). It "unifies" the commonly used
 * ready events and is very helpful for moving a "web app" to a "hybrid app" scenario.
 *
 * This file has no dependencies. It will generate a custom "app.Ready" event
 * that you should use once to start your application, rather than waiting on a
 * "device ready" or "document ready" or "window load" or similar events.
 *
 * You should not have to modify anything in this file to use it. See the example
 * index.html file that accompanies this file (in its sample repo location) for
 * recommendations on the best placement of this file relative to other files and
 * for recommendations regarding the loading of other JavaScript files.
 *
 * There are a large number of console.log messages contained within this file.
 * They can be used to debug initialization problems and understand how it works.
 * It is highly recommended that you leave them in your app, they will not unduly
 * slow down or burden your application.
 *
 * There are many comments in this file and the accompanying index.html file.
 * Please read the comments within for details and further documentation.
 *
 * BTW: "dev" means "device" in this context, not "develop," because it grew out
 * of a desire to build a more reliable and flexible "device ready" detector.
 */

/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false, dev:false, performance:false */

/*
 * The following is an excerpt from the 3.3.0 cordova.js file and is useful for understanding
 * Cordova events. The order of events during page load and Cordova startup is as follows:
 *
 * onDOMContentLoaded*         Internal event that is received when the web page is loaded and parsed.
 * onNativeReady*              Internal event that indicates the Cordova native side is ready.
 * onCordovaReady*             Internal event fired when all Cordova JavaScript objects have been created.
 * onDeviceReady*              User event fired to indicate that Cordova is ready
 * onResume                    User event fired to indicate a start/resume lifecycle event
 * onPause                     User event fired to indicate a pause lifecycle event
 * onDestroy*                  Internal event fired when app is being destroyed (User should use window.onunload event, not this one).
 *
 * The events marked with an * are sticky. Once they have fired, they will stay in the fired state.
 * All listeners that subscribe after the event is fired will be executed right away.
 *
 * The only Cordova events that user code should register for are:
 *      deviceready           Cordova native code is initialized and Cordova APIs can be called from JavaScript
 *      pause                 App has moved to background
 *      resume                App has returned to foreground
 *
 * Listeners can be registered as:
 *      document.addEventListener("deviceready", myDeviceReadyListener, false);
 *      document.addEventListener("resume", myResumeListener, false);
 *      document.addEventListener("pause", myPauseListener, false);
 *
 * The DOM lifecycle events should be used for saving and restoring state
 *      window.onload
 *      window.onunload
 *
 */
 
 init-app.js
 -----------------------------------------------------------------------
 
// This file is a suggested initialization place for your code.
// It is completely optional and not required.
// It implements a Cordova "hide splashscreen" function, that may be useful.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false, app:false, dev:false */
/*global myEventHandler:false, cordova:false, device:false */

function = initEvents(): 
    // NOTE: initialize your third-party libraries and event handlers
    // NOTE: initialize your application code
    // NOTE: initialize your app event handlers, see app.js for a simple event handler example
    // TODO: configure following to work with both touch and click events (mouse + touch)
    // NOTE: ...you can put other miscellaneous init stuff in this function...
    // NOTE: ...and add whatever else you want to do now that the app has started...
    // NOTE: ...or create your own init handlers outside of this file that trigger off the "app.Ready" event...

function = hideSplashScreen():
    // see https://github.com/01org/appframework/blob/master/documentation/detail/%24.ui.launch.md
    // Do the following if you disabled App Framework autolaunch (in index.html, for example)
    // $.ui.launch() ;


app.js
-------------------------------------------------------------
// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */


// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.


index.html
--------------------------------------------------------------------------------------
<!-- See explanation at the bottom of this file for info regarding placement of JS libraries. -->
    <!-- These library references (below) are just examples to give you the general idea... -->
    <!-- <script src="lib/mc/hammer.js"></script> -->
    <!-- <script src="lib/ft/fastclick.js"></script> -->
    <!-- <script src="lib/jq/jquery.js"></script> -->
    
To use this template as a starter app, start with init-app.js and app.js for your JavaScript code.
See the README.md file for more details and the comments inside index.html, app.js and init-app.js.
<!-- IMPORTANT: Do not include a weinre script tag as part of your release builds! -->
Recommended JavaScript library load order for hybrid Cordova apps:

* "Device-Independent" JavaScript libraries.
* optional: weinre debug script tag for remote console debug (see notes).
* Intel XDK device JavaScript library.
* Cordova/PhoneGap device JavaScript library.
* "Device-Dependent" JavaScript libraries.
* Application JavaScript <script> tags and libraries.
* optional: weinre debug script tag for remote console debug (see notes).
    
    In complex projects, the JavaScript load order is important. You must
    insure that the underlying device API native code finishes its init, which
    usually takes longer than the webview init...

    VERY IMPORTANT: notice that all of the libraries used in this project are
    located within the app's local directories, which means they will get
    bundled with the app. They are NOT being pulled in over the net. In most
    cases, this is what you should be doing when you build a hybrid mobile
    app. This insures that you always use the JS code that you debugged
    against AND that you are not requiring a data connection (network
    connection) to get the app started. If your app startup required a data
    connection to initialize and start interaction with the user, lack of a
    reliable network connection could be disasterous. Not to mention it
    generally results in a slower load time. Loading locally is much
    friendlier to your end user's data plan and their device battery.  :-)

    NOTE: do not use a directory prefix with the cordova.js file - it is
    inserted automatically by the build system, simulator and other tools and
    is assumed to be in the index.html source directory. You will not find
    this JS file anywhere in your project, it is a "phantom" library. If you
    do see copies of this file as part of your project it should be removed to
    avoid confusion and problems.

    LIBRARY NOTE: If you are using a large number of JavaScript libraries,
    especially third-party libraries (like jQuery, {{ mustache }}, Underscore,
    etc.) that are "independent" of the device APIs provided by the Cordova
    library and plugins - and they are independent of your app code - your
    app initialization will be most successful if you load these libraries
    BEFORE the Cordova JS file, in the <head> section of your index.html file.
    Obviously, any code that depends on Cordova APIs must be loaded AFTER the
    cordova.js library.

    Libraries that are "independent" of the device APIs are libraries that you
    could use in a desktop browser. "Dependent" libraries are, most likely,
    your own code that you've written specifically to work with the Cordova
    device APIs. In some cases, if your device-dependent code requires access
    to device-independent code to get started, you may have to use something
    like CommonJS to force the device-dependent code to wait for the
    device-independent code to initialize, otherwise you may have trouble
    getting your app started.

    Because of this added dependency on the underlying native code (device)
    initialization, you should not use the "document ready" event to start
    your application. You should wait for the cordova "deviceready" event
    before you begin your application (if it uses any Cordova device APIs); in
    practice, it is best to wait for both. (See the init-dev.js file in this
    template for an example of how to wait for both, it generates a custom
    "app.Ready" event that you can wait for and just forget about the other
    events.)

    NOTE: *any* library that redefines addEventListener() or fiddles with
    outstanding events may interfere with capturing the Cordova "deviceready"
    event and should, therefore, be placed *BEFORE* the Cordova JS library in
    the load order.

    ALSO: if you use weinre for debugging, you may have to experiment with the
    placement of the weinre script. Some recommended locations are shown
    within this app. If these locations do not work, you may have to
    experiment. The optimum placement can be app-specific, primarily as a
    function of the included JavaScript libraries and your initialization.

app.css
-----------------------------------------------------------------------------------
Stylesheet for the app, currently contains some sample code for Windows compatibility, 
and basic code for the template so far.
