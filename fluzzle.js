Fluzzle = Object.create();

//Basic operations for the user

//switch panels
Fluzzle.goToPanel = function(panelSelector, func) {
	$('.panel').slideUp(500, function() {
		$(panelSelector).slideDown(500, func())
	});
}

// More to come...

// Keep the setting value display in sync with the range input
$('#setting_1_value').html($('#setting_1_value_slider').val());
$('#setting_1_value_slider').bind('input', function() { 
	$('#setting_1_value').html($(this).val());
});

// Start the game when play is clicked
$('.play').bind('click', function(e) {
	e.preventDefault();
	Fluzzle.goToPanel("#game_panel", function() {
		startGame();
	});
	return false;
});

//reload when the play_again buttons are clicked, including the title of the game
$('.play_again').bind('click', function(e) {
	e.preventDefault();
	location.reload(true);
	return false;
});

//Show instructions, moves, etc. Make sure to set a value for moves before calling this!!
function showHiddens() {
	$("#instructions > ul > li").each(function(index) {
		$(this).delay(600*index).fadeIn(500, function() {$("html, body").animate({ scrollTop: $(document).height() }, "fast");});
	});
	$("#move_counter").fadeIn();
}
