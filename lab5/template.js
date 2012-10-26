var display = 0;

$(function(){

	$('#plus10').click(plusTen);
	$('#plus20').click(plusTwenty);
	$('#plus10').click(plusThirty);
	$('#plus10').click(red);
	$('#plus10').click(blue);
	$('#plus10').click(negTen);
	$('#plus10').click(negTen);
	$('#plus10').click(negTen);

	
});


function plusTen() {

	display = display + 10;
	$('#display').text(display);

}

function plusTwenty() {

	display = display + 20;
	$('#display').text(display);

}

function plusThirty() {

	display = display + 30;
	$('#display').text(display);

}

function red() {

	$('display').css('background', 'red');


}

function blue() {

	$('display').css('background', 'blue');


}

function negTen() {

	display = display - 10;
	$('#display').text(display);

}
function negTwenty() {

	display = display - 20;
	$('#display').text(display);

}
function negTen() {

	display = display - 30;
	$('#display').text(display);

}



