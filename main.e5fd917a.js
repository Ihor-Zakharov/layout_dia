parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){function t(e){e.classList.add("hidden")}function n(e){e.classList.remove("hidden")}var r=document.getElementById("menu"),o=document.getElementById("menu-open-button"),i=document.getElementById("close-menu-button"),c=document.getElementById("hire-us"),d=document.getElementById("menu__nav").childNodes,a=document.body;function s(e){e.addEventListener("click",function(){t(i),n(o),t(r),a.classList.remove("page__body--with_menu")})}t(i),t(r),o.addEventListener("click",function(){t(o),n(i),n(r),a.classList.add("page__body--with_menu")}),s(i),s(c);for(var u=0,l=e(d);u<l.length;u++){s(l[u])}}function d(){var e=[{url:"".concat("../images/slider","/1.jpg")},{url:"".concat("../images/slider","/2.jpg")},{url:"".concat("../images/slider","/3.jpg")}].length,t=1,n=document.querySelector(".slider"),r=document.getElementById("arrow-left"),o=document.getElementById("arrow-right");function i(e,t){n.classList.remove("slider--slide_".concat(e)),n.classList.add("slider--slide_".concat(t))}r.addEventListener("click",function(){var n=t;--t<1&&(t=e),i(n,t)}),o.addEventListener("click",function(){var n=t;++t>e&&(t=1),i(n,t)});var c="slider--slide_".concat(t);n.classList.add(c)}function a(){var e=document.getElementById("contact-us-form");e.addEventListener("submit",function(t){t.preventDefault(),e.reset()})}window.addEventListener("load",function(){c(),d(),a()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e5fd917a.js.map