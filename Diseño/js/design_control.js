$(document).ready( function() {


});

function showMenu( status ) {
	var selector = $('#menu');
	if ( status ) {
		selector.animate({
			'left': '0',
		});
	} else {
		selector.animate({
			'left': -selector.width(),
		});
	}
}

function showCart( status ) {
	var selector = $('#cart-mini-list');
	console.log(selector.width());
	if ( status ) {
		selector.animate({
			'right': '0',
		});
	} else {
		selector.animate({
			'right': -selector.width(),
		});
	}
}

function showSearchBar( status ) {
	var selector = $('#search-bar');
	if ( status ) {
		selector.fadeIn();
	} else {
		selector.fadeOut();
	}
}