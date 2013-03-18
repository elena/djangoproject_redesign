// Threespot Micro Framework (https://github.com/Threespot/TSM-micro-js)
tsm=function(e,t){return e={},t={define:function(){var t=arguments,n=function(e,n){for(n=0;n<t.length;n++)if(typeof t[n]===e)return t[n]},r=n("string"),i=n("object"),s=n("function");if(!r||!s)throw"invalid definition";return e[r]={d:i instanceof Array?i:[],f:s},this},require:function(n,r){var i=this,s=null,o,u,a;n instanceof Array||(n=[n]);for(a=0;a<n.length;a++){o=n[a];if(o==="tsm")n[a]=t;else{if(!i.hasOwnProperty.call(e,o))throw o+" is undefined";u=e[o];if(!u.e){if(u.p)throw"circular reference to "+o;u.p=1,i.require(u.d,function(){u.e=u.f.apply(s,arguments)}),u.p=0}n[a]=u.e}}r&&r.apply&&r.apply(s,n)},observable:function(e){var t={};return e.on=function(n,r,i){return(t[n]=t[n]||[]).push({h:r,c:i}),e},e.off=function(n,r,i){for(var s=t[n],o=0,u;s&&r&&(u=s[o]);o++)u.h===r&&(!i||u.c===i)&&s.splice(o--,1);return s&&!o&&(s.length=0),s||(t={}),e},e.emit=function(n){for(var r=t[n],i=0,s;r&&(s=r[i++]);)s.h.apply(s.c,r.slice.call(arguments,1));return e},e},delegate:function(e,t){return function(){e.call(t,arguments)}},scope:function(e){return e.define=this.define,e.require=this.require,e}},typeof define=="function"&&typeof define.amd=="object"&&(t.define=define,t.require=require,define(t)),t}();

// jQuery Inview (https://github.com/protonet/jquery.inview)
(function(d){var p={},e,a,h=document,i=window,f=h.documentElement,j=d.expando;d.event.special.inview={add:function(a){p[a.guid+"-"+this[j]]={data:a,$element:d(this)}},remove:function(a){try{delete p[a.guid+"-"+this[j]]}catch(d){}}};d(i).bind("scroll resize",function(){e=a=null});!f.addEventListener&&f.attachEvent&&f.attachEvent("onfocusin",function(){a=null});setInterval(function(){var k=d(),j,n=0;d.each(p,function(a,b){var c=b.data.selector,d=b.$element;k=k.add(c?d.find(c):d)});if(j=k.length){var b;
if(!(b=e)){var g={height:i.innerHeight,width:i.innerWidth};if(!g.height&&((b=h.compatMode)||!d.support.boxModel))b="CSS1Compat"===b?f:h.body,g={height:b.clientHeight,width:b.clientWidth};b=g}e=b;for(a=a||{top:i.pageYOffset||f.scrollTop||h.body.scrollTop,left:i.pageXOffset||f.scrollLeft||h.body.scrollLeft};n<j;n++)if(d.contains(f,k[n])){b=d(k[n]);var l=b.height(),m=b.width(),c=b.offset(),g=b.data("inview");if(!a||!e)break;c.top+l>a.top&&c.top<a.top+e.height&&c.left+m>a.left&&c.left<a.left+e.width?
(m=a.left>c.left?"right":a.left+e.width<c.left+m?"left":"both",l=a.top>c.top?"bottom":a.top+e.height<c.top+l?"top":"both",c=m+"-"+l,(!g||g!==c)&&b.data("inview",c).trigger("inview",[!0,m,l])):g&&b.data("inview",!1).trigger("inview",[!1])}}},250)})(jQuery);


// Deliberately undefine jQuery within this scope
(function($) { 
	"use strict";
	
	tsm.define('jQuery', function() {
		return window.$;
	});

	tsm.define('MobileMenu', ['jQuery', 'tsm'], function( $, tsm ) {

		var MobileMenuExport = function(menu) {
			this.menu = $(menu);
			this.init();
		};
		
		MobileMenuExport.prototype = {

			init: function(){
				this.menu.addClass('nav-menu-on'); 
				this.button = $('<div class="menu-button"><i class="icon-reorder"></i><span>Menu</span></div>');
				this.button.insertBefore(this.menu);
				this.button.on( 'click', tsm.delegate(this.toggleMenu, this) );
			},

			toggleMenu: function() {
				this.menu.toggleClass('active');
			}
		};

		// Export a single instance of our module:
		return new MobileMenuExport('[role="banner"] [role="navigation"]');
	});

	tsm.define('FeatureAnimations', ['jQuery', 'tsm'], function( $, tsm ) {

		var FeatureAnimation = function(list) {
			this.list = $(list);
			this.init();
		};
		
		FeatureAnimation.prototype = {

			init: function(){
				this.icons = this.list.find('dt i'); //go get icons

				this.icons.bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
					if (isInView && visiblePartY != 'top' && visiblePartY != 'bottom') { // element completely visible
						$(this).addClass('inview'); //new clss
					} 
				});
					
			}
		};

		// Export a single instance of our module:
		return new FeatureAnimation('.list-features');
	});

	tsm.define('CollapsingList', ['jQuery', 'tsm'], function( $, tsm ) {

		var CollapsingList = function(list) {
			this.list = $(list);
			this.init();
		};
		
		CollapsingList.prototype = {
			init: function(){				
				this.headings = this.list.find('> li > h2'); //get headings
				this.list.addClass('active'); //activate the list styles w/ class
				this.headings.append(' <i class="icon-plus"></i>').attr('tabindex', '0');
				this.headings.on( 'click', function() {
					var self = $(event.target)
							parent = self.closest('li'); //store target as var

					if (parent.hasClass('active')) { //if currently active
						self.find('i').removeClass().addClass('icon-plus'); //change icon to a plus
					} else {
						self.find('i').removeClass().addClass('icon-minus'); //otherwise to a minus
					}
					parent.toggleClass('active'); //toggle active class
				});
			}
		};

		//return a new module for each class detected
		$('.list-collapsing').each(function(){
			return new CollapsingList(this);
		});
	});

	tsm.define("main", ["tsm"], function( tsm ) {
		tsm.require( ["MobileMenu", "FeatureAnimations", "CollapsingList"] );
	});

	tsm.require('main');

}()); // end wrapper function