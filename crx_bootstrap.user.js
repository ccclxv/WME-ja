// ==UserScript==
// @name                WME Junction Angle info
// @namespace           http://userscripts.org/users/508112
// @description         Show the angle between two selected (and connected) segments
// @include             /^https://(editor-beta|www)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/.*$/
// @updateURL           https://github.com/milkboy/WME-ja/raw/master/wme_junctionangle.user.js
// @version             1.12.0
// @grant               GM_getResourceURL
// @copyright           2016 Michael Wikberg <michael@wikberg.fi>
// @run_at              document_start
// ==/UserScript==

var getURL;
//Get local file if installed as chrome extension
if(window.navigator.vendor.match(/Google/)) {
  getURL = function(path) { return chrome.extension.getURL(path); };
}
else {
  getURL = function(path) { return GM_getResourceURL(path); }
}

var ja_script = document.createElement('script');
ja_script.type = "text/javascript";
ja_script.src = getURL("wme_junctionangle.user.js");
ja_script.async = false;
ja_script.onload = function() { };

//append real code into document
document.head.appendChild(ja_script);
//console.log("Bootstrapped CRX...");
