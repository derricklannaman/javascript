$(function(){

	$('#text_box').focus();

	$('#clear').click(clear);
	$('#normal').dblclick(normal);
	$('#reverse')
	$('#big-box').hover(big);
	$('#black').click(black);
	$('#yellow').click(yellow);
	
});

function clear() {

	$('#text_box').val('');
}

function normal() {

	var write = $('#text_box').val();
	$('.output_box').text(write);
	$('#text_box').val('');
} 

function big() {

 $('.output_box').css('font-size', '50px');
 $('.output_box').css('background', 'green');
}

function black() {

	$('body').css('background', '#999');
}

function yellow() {

	$('body').css('background', 'yellow');
	$('.output_box').css('background', 'white');

}














