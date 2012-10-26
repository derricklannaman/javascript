$(function(){

var colors = [];
var animals = [];
var people = [];

var response = prompt(' Add (a)nimal, (c)olor, (p)eople (q)uit');
while(response != 'q')
{
			var count =('How many would you like')
			count = parseInt(count);

		if(response == 'a') 
			{
				for(var i = 0; i < count; i++)
				{
					var selection = prompt('enter an animal?');
				}
			}
			else if(response == 'p')
			{
				for(var i = 0; i < count; i++)
				{
					var selection = prompt('enter an people?');
				}

			}
			else if(response == 'c')
			{
				for(var i = 0; i < count; i++)
				{
					var selection = prompt('enter an color?');
				}

			}

	response = prompt(' Add (a)nimal, (c)olor, (p)eople (q)uit');

	}	

		response = prompt(' delete (a)nimal, (c)olor, (p)eople (q)uit');
		while(response != 'q')
			{
				if(response == 'c')
				{
					console.log('Colors : ' + colors)
					var del = prompt('Which do you want to delete?');
					var index = colors.indexOf(del);
					colors.splice(index, 1);
				}
				else if(response == 'a')
				{
					console.log('Animals : ' + colors)
					var del = prompt('Which do you want to delete?');
					var index = colors.indexOf(del);
					colors.splice(index, 1);
					
				}
				else if(response == 'c')
				{
					console.log('People : ' + colors)
					var del = prompt('Which do you want to delete?');
					var index = colors.indexOf(del);
					colors.splice(index, 1);

				}

		response = prompt(' delete (a)nimal, (c)olor, (p)eople (q)uit');

			}

console.log('here are your colors: ' + colors);
console.log('here are your colors: ' + people);
console.log('here are your colors: ' + animal);


});// end function



