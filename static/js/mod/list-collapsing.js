define([
	'jquery'
], function( $) {

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