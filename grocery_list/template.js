$(function(){
	$('#input_text').focus();
	$('#add_button').click(add_item);
	$('#add_button').click(clear);
	$('#add_button').hover(bg_change);

});


function bg_change(){
	$('#add_button').toggleClass('green')
}


function add_item(){
	// alert("it works");

	var item = $('#input_text').val();
	$('#items').val('<div>' + item + '</div>');
	$('#items').append(item + '<br>');
}

function clear(){
	$('#input_text').val('');
	$('#input_text').focus();
}