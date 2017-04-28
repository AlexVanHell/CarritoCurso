$(document).ready( function() {

	$('html, body').click( function() {
		showMenu( false );
	});

	$('#menu, #menu_button').click( function( event ) {
		event.stopPropagation();
	});

});

function showMenu( status ) {
	var selector = $('#menu');
	if ( status ) {
		selector.animate({
			'left': '0',
		}, 800);
	} else {
		selector.animate({
			'left': '-100%',
		}, 800);
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