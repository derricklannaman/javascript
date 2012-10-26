$(function(){


	$('.a').mouseenter(color_the_box);
	$('.a').mouseleave(make_it_white);
	$('#add').click(add_node);
	
	$('#add').click(add_node);
	$('#addcolors').click(addcolors);
	$('#boxes').on('hover', '.box', make_pretty);
	
});


function color_the_box() 
{

	var color = $(this).text();
	$(this).css('background-color', color);

} 

function make_it_white()
{
	$(this).css('background-color', "white");
}


function add_node()
{

	var element = $('#element').val();
	var node = $('<' + element + '>');
	var css = $('#css').val();
	var text = $('#text').val();
	node.addClass(css);
	node.text(text);
	$('#elements').prepend(node);


}

function addcolors() 
{

	var count = $('#count').val();
	count = parseint(count);
		for(var i = 0; i < count; i++)
		{

			var box = $('<div>');
				box.text(i);
				box.
				box.css('background-color', '#252525')
				$('#boxes').append(box);

		}
}





// $(function(){

	
// });

// function make_pretty()
// {

// 	$(this).toggleClass('alert');

// }

// function add_node()
// {

// 	var element = $('#element').val();
// 	var node = $('<' + element + '>');
// 	var css = $('#css').val();
// 	var text = $('#text').val();
// 	node.addClass(css);
// 	node.text(text);
// 	$('#elements').prepend(node);


// }

// function addcolors() 
// {

// 	var count = $('#count').val();
// 	count = parseInt(count);
// 		for(var i = 0; i < count; i++)
// 		{

// 			var box = $('<div>');
// 				box.text(i);
// 				box.addClass('box');
// 				$('#boxes').append(box);

// 		}
// }









































