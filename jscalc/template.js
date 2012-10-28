var start_num = 0;
var result = null;
var result1 = null;
var result2 = null;

var num1 = null;
var num2 = null;





$(function(){
	$('#on').click(start_up_calc);
	$('#off').click(turn_off_calc);
	$('#clear').click(clear_display);
	$('.button').click(get_num);
	$('#plus').click(add_num);
	$('#equal').click(tally_results);
	$('#riddle').click(riddle);

});

function riddle(){
	$('#display').text('B.I.Y.F.S.');
}

function get_num(){
			result = $(this).text();
			result = parseInt(result);
			$('#display').text(result);
}


function add_num(){
	num =  $('#display').text();
	num = parseInt(num);

	// result2 = $('#display').text();
	// result2 = parseInt(result2);

	// results = result1 + result2;
	// tally_results();
	// $('#display').text(results);
	// add_next_num();
}

// function add_next_num(){
// 	get_num() + add_num();

// }

function tally_results(){
	result = num + num;

	$('#display').text(result);
	console.log(result);
}




function clear_display(){
	$('#display').text('');
}

function turn_off_calc(){
	$('#display').text('');
	//remove lighted background 
}

function start_up_calc(){
	$('#display').text(start_num);
	//add lighted background
}












// ISSUES / BROKEN IDEAS



// function add_num(){
// 	var result1 =  $('#display').text();
// 	result1 = parseInt(result1);

// 	var result2 = $('#display').text();
// 	result2 = parseInt(result2);

// 	var results = result1 + result2;
// 	$('#display').text(results);
// } This code works




// $('#dot').click(get_dot); (if they click dot it adds . and changes to float)
// function get_dot(){
// 				var dot = $('#dot').text();
// 				$('#display').text(dot);
// }








