$(function(){

	var animals = [];
	var colors = [];
	var people = [];

	var answer = prompt('Do you want to create a list of (a)nimals, (c)olors, (p)eople, or (q)uit');
	
	while(answer != "q" || answer != "quit") 
	{
		if(answer == "a" || answer == "c" || answer == "p") {
		var amount = prompt('Ok, Thanks....How many?');
		amount = parseInt(amount);

			for(var i = 0; i < amount; i++)
			{ 
				answer = prompt('Please enter animal');
				animals.push(answer);
				console.log('you entered ' + answer)
			}
		}

		if(answer == "c") {
			var count = prompt('Ok, Thanks....How many colors?');
			count = parseInt(count);
			console.log('you entered ' + count + ' colors')

			for(var i = 0; i < count; i++) {
				answer = prompt("please enter color");
				colors.push(answer);
			}// end for loop 

		}// end if for color 

		if(answer == "p") {
			var people_count = prompt('Ok, Thanks....How many people?');
			people_count = parseInt(people_count);

			for(var i = 0; i < people_count; i++) {
				answer = prompt("please enter a person");
				people.push(answer);
			}// end for loop 

		}// end if for people 

		var delete_reply = prompt('Would you like to delete from a list? Enter (y) or (n)');
		if(delete_reply == 'n') {
			alert('Thank you for answering. Have a nice day.');
		}
		if
			(delete_reply == 'y') {
			var delete_answer = prompt('From what list? (a), (c), (p)');			
		}

		if(delete_answer == 'a') {
			var see_list = prompt('View your animals list? (y)es');
			alert(animals.join('\n'));
			var delete_animal = prompt('What animal do you want to remove?');
			var animal_deleted = animals.splice(delete_animal);
			console.log(animal_deleted + ' has been deleted');

		}// how do you remove an element from an array that is given from input
		else if(delete_answer == 'c') {
			var see_list = prompt('View your colors list? (y)es');
			alert(colors.join('\n'));
			var delete_color = prompt('What color do you want to remove?');
		}
		else if(delete_answer == 'p') {
			var see_list = prompt('View your people list? (y)es');
			alert(people.join('\n'));
			var delete_people = prompt('What people do you want to remove?');
		}


			
		





	}// end while loop 
	

});// end function



