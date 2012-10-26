$(function(){

	$('#color-button').click(add_color);
	$('#colors').on('hover', '.color', hovering);
});



function hovering()
{
	$(this).toggleClass('hover');

}


function add_color()
{
	var color = $('#color_text').val();
	var div = $('<div>');
	div.addClass('color');
	div.css('background-color', color);
	$('#colors').append(div);


}
