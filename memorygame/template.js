var counter = 0;
var selected = null;

$(function(){
	
	// setInterval(play_small_game, 50); ***Use with other play_small_game to add boxes in intervals
	// $('#small_button').on('click', '#controls', play_small_game);
	// $('#small_button')va.click(timer);
	
	$('#games').on('click', '.square', selected_square);
	$('#games').on('hover', '.square', change_bg_hover);
	$('#small_button').click(play_small_game);
	$('#small_button').click(timer);

});


function selected_square()
{
	selected = $(this).addClass('selected_square');
}


function play_small_game()
{
	var num_of_boxes = [1, 2, 3, 4, 5, 6, 7, 8];
	for (var num = 0; num <= num_of_boxes.length; num++)
	{
		var square = $('<div>');
		square.addClass('square');
		$('#games').prepend(square);
	} 


		 setInterval(timer, 1000);



}

function timer()
{


	counter++;
	var interval = setInterval(timer, 1000);
	$('')

}


function change_bg_hover()
{
	$(this).toggleClass('hover_color');
}

















// function play_small_game()//this works but I cant get it to fire ONLY on the click event
// {
// 	var square = $('<div>');
// 	square.addClass('square');
// 		if(counter != 9)
// 		{
// 			$('#games').prepend(square);
// 			counter ++;
// 		}
// }

// function timer()Cant get timer to work
// {
	
// 	while (counter <= 10)
// 	{
// 		$('#timer').val('counter'); 
// 	}
// 	counter = counter + 1;
// }



