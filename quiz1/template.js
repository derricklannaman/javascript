$(function(){

	$('#box3').click(add_num);
	

	
});


function add_num()
{

	var input_b1 = $('#box1').val();
	input_b1 = parseInt(input_b1);

	var input_b2 = $('#box2').val();
	input_b2 = parseInt(input_b2);

	var total = input_b1 + input_b2; 

	$('#output').val(total);

}