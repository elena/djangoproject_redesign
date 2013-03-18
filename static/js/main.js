requirejs.config({
	paths: {
		"jquery": "lib/jquery",
		"jquery.inview": "lib/jquery.inview"
	}
});

define(function(){

	var mods = [
		'mod/mobile-menu' 
	]; 

	function has( id ) { //id function
		return document.getElementById(id); 
	}

	if (has('list-feature')) { //feature list
		mods.push('mod/list-feature');
	}

	if (has('list-collapsing')) { //collapsing list
		mods.push('mod/list-collapsing');
	}

	require(mods);

});