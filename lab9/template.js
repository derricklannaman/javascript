$(function(){

	$('#add_animal').click(add_animal);
	

});


function add_animal()
{
var animal = {};
animal.name = $('#animal_name').val();
animal.color = $('#animal_color').val();
animal.image = $('#animal_image').val();
insert_animal(animal);

}

function insert_animal(animal)
{

	var d = $('<div>'); //creates a div dynamically and inserts it into a variable
	d.addClass('animal');//takes the variable and dds the animal class
	d.css('background-color', animal.color);//takes variable and changes css to bg color 
	d.text(animal.name);

	var i = $('<img>');//creates img tag in html, places it in a variable i 
	i.attr('src', animal.image);//calls attr()function to get the src on i variable
	d.append(i)//must first append the img (which is in the i variable) to the created <div> 
	$('#animals').append(d);//now you MUST attach to the #animals in the dom


}


