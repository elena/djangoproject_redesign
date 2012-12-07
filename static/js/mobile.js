window.MobileMenu = (window.MobileMenu || {});

MobileMenu.Menu = (function() {
	
	var MenuExport = function(menu) {
		this.menu = $(menu);
		this.init();
	};
	
	MenuExport.prototype = {

		init: function(){
			this.menu.attr('data-test', 'testing');
		},
	
		method: function() {
			// Anyone can call this.
		}
	
	};

	// Export a single instance of our module:
	return new MenuExport('.nav-menu');

}());