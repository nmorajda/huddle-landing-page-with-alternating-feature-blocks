!function(e){function t(t){for(var r,i,l=t[0],a=t[1],s=t[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var a=n[l];0!==o[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=a;c.push([79,1]),n()}({67:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);n(12),n(17),n(67);var r=n(55),o=n.n(r),c=(n(49),n(51),n(52),n(53),n(54),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if("function"!=typeof e)throw new TypeError("Expected a function");return function(){for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];t&&clearTimeout(t),t=setTimeout((function(){e.apply(null,o)}),n)}});function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.settings=l(l({},{elemSelector:".header",scrollTop:120}),t)}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this.settings,t=e.elemSelector,n=e.scrollTop,r=document.querySelector(t);window.addEventListener("scroll",c((function(){document.body.scrollTop>n||document.documentElement.scrollTop>n?r.classList.add("is-sticky"):r.classList.remove("is-sticky")}),0))}}])&&s(t.prototype,n),r&&s(t,r),e}();n(78);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);this.settings=d(d({},{elemClass:"js-move-to-top",scrollTop:200}),t)}var t,n,r;return t=e,(n=[{key:"render",value:function(){var e=this.settings,t=e.elemClass,n=e.scrollTop,r=document.querySelector("#moveToTop");r.classList.add(t),window.addEventListener("scroll",c((function(){document.body.scrollTop>n||document.documentElement.scrollTop>n?r.classList.remove("is-hidden"):r.classList.add("is-hidden")}),300)),r.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}))}}])&&b(t.prototype,n),r&&b(t,r),e}();window.addEventListener("DOMContentLoaded",(function(){var e=document.body,t=document.querySelector(".btn-toggle"),n=document.querySelector(".header"),r=document.querySelectorAll(".has-dropdown"),c=document.querySelectorAll(".js-email"),i="biuro",l="@",a="abmstudio.pl";c.forEach((function(e){e.innerHTML=i+l+a})),(new u).init();new o.a({elements_selector:".lazy",load_delay:300});new v({scrollTop:400}).render();t&&t.addEventListener("click",(function(){e.classList.toggle("overflow-hidden"),t.classList.toggle("btn-toggle--active"),n.classList.toggle("mobile-nav--active")})),document.addEventListener("click",(function(e){if(e.target.closest(".has-dropdown")){e.preventDefault();var t=e.target.closest(".has-dropdown");r.forEach((function(e){e!==t&&e.classList.remove("is-active")})),t.classList.toggle("is-active")}})),document.body.addEventListener("click",(function(r){(r.target.classList.contains("header__nav__link")||r.target.classList.contains("overlay"))&&(e.classList.remove("overflow-hidden"),t.classList.remove("btn-toggle--active"),n.classList.remove("mobile-nav--active"))}))}))}});