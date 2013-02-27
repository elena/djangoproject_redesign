// Threespot Micro Framework - https://github.com/Threespot/TSM-micro-js
tsm=function(e,t){return e={},t={define:function(){var t=arguments,n=function(e,n){for(n=0;n<t.length;n++)if(typeof t[n]===e)return t[n]},r=n("string"),i=n("object"),s=n("function");if(!r||!s)throw"invalid definition";return e[r]={d:i instanceof Array?i:[],f:s},this},require:function(n,r){var i=this,s=null,o,u,a;n instanceof Array||(n=[n]);for(a=0;a<n.length;a++){o=n[a];if(o==="tsm")n[a]=t;else{if(!i.hasOwnProperty.call(e,o))throw o+" is undefined";u=e[o];if(!u.e){if(u.p)throw"circular reference to "+o;u.p=1,i.require(u.d,function(){u.e=u.f.apply(s,arguments)}),u.p=0}n[a]=u.e}}r&&r.apply&&r.apply(s,n)},observable:function(e){var t={};return e.on=function(n,r,i){return(t[n]=t[n]||[]).push({h:r,c:i}),e},e.off=function(n,r,i){for(var s=t[n],o=0,u;s&&r&&(u=s[o]);o++)u.h===r&&(!i||u.c===i)&&s.splice(o--,1);return s&&!o&&(s.length=0),s||(t={}),e},e.emit=function(n){for(var r=t[n],i=0,s;r&&(s=r[i++]);)s.h.apply(s.c,r.slice.call(arguments,1));return e},e},delegate:function(e,t){return function(){e.call(t,arguments)}},scope:function(e){return e.define=this.define,e.require=this.require,e}},typeof define=="function"&&typeof define.amd=="object"&&(t.define=define,t.require=require,define(t)),t}();(function(e){"use strict";tsm.define("Zepto",function(){return window.$});tsm.define("MobileMenu",["Zepto","tsm"],function(e,t){var n=function(t){this.menu=e(t);this.init()};n.prototype={init:function(){this.menu.addClass("nav-menu-on");this.button=e('<a class="menu-button"><i class="icon-reorder"></i><span>Menu</span></a>').insertBefore(this.menu);this.button.on("click",t.delegate(this.toggleMenu,this))},toggleMenu:function(){this.menu.toggleClass("active")}};return new n(".nav-menu")});tsm.define("main",["tsm"],function(e){e.require("MobileMenu")});tsm.require("main")})();