$(function(){

	balance = 1000;

	var response = prompt('Do you want to (d)eposit or (w)ithdraw or (q)uit?');

		while(response !== 'q')

		{


			var amount = prompt('How much?');	
			amount = parseInt(amount);

			if(response == 'd')
				{

					balance = balance + amount;
					console.log('your new balance is: $ ' + balance);
				} 

			else
			{

				balance = balance - amount;
				console.log('your new balance is: $ ' - balance);
			}
			response = prompt('Do you want to (d)eposit or (w)ithdraw or (q)uit?');
		}
			console.log('Thank you. Your new balance is: $ ' + balance);	
	});