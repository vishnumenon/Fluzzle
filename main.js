// Write your scripts here. What's already here makes the demo work, so read it before deleting it. It'll probably be useful later


// Keep the setting value displays in sync with the range inputs.
$('#setting_value_1').html($('#setting_value_slider_1').val());
$('#setting_value_slider_1').bind('input', function() { 
	$('#setting_value_1').html($(this).val());
});
$('#setting_value_2').html($('#setting_value_slider_2').val());
$('#setting_value_slider_2').bind('input', function() { 
	$('#setting_value_2').html($(this).val());
});




//Add whatever you want to happen when 'play again' or the title is clicked
$('.play_again').bind('click', function(e) {
	e.preventDefault();
	location.reload(true);
	return false;
});


// Start the game when play is clicked 
$('.play').bind('click', function(e) {
	e.preventDefault();
	//Do something like this whenever you want to switch panels
	$('#initial_settings_panel').slideUp(500, function() {
		$("#game_panel").slideDown(500, function() {
			//Show the hidden items (instructions and move counter). The sidebars can also be used for other information, at your descretion
			$(".instructions").slideDown(500);
			$(".move_counter").slideDown(500);
		    // call whatever functions to initialize your game here
		})
	});
	return false;
});

// Replace these two with the actual scenarios in which to end the game
$('#lose').bind('click', function(e) {
	e.preventDefault();
	// Hide the sidebar material
	$(".instructions").slideUp(500);
	$(".move_counter").slideUp(500);
	// same drill for switching panels
	$('#game_panel').slideUp(500, function() {
		$("#loser_panel").slideDown(500, function() {
		    // call whatever functions to respond to victory
		})
	});
	return false;
});
$('#win').bind('click', function(e) {
	e.preventDefault();
	// Hide the sidebar material
	$(".instructions").slideUp(500);
	$(".move_counter").slideUp(500);
	// deja vu
	$('#game_panel').slideUp(500, function() {
		$("#winner_panel").slideDown(500, function() {
		    // call whatever functions to respond to failure
		})
	});
	return false;
});

// Don't forget to update the move counter when necessary