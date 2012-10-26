var balance = 1000

$(function(){
	
	var balance = $('#balance span').text();
	balance = parseInt(balance) 

	console.log(balance)

	$('#button-deposit').click(deposit);
	$('#button-withdraw').click(withdraw);



function deposit(){	
	
	var amount = $('#input-amount').val();
	amount = parseInt(amount);
	balance = balance + amount;

	console.log(balance);

	$('#balance span').text(balance);

	 if(balance > 0) {
			$('#balance-display').css('color', 'black');
			$('#input-amount').css('background', 'white');
			$('#input-amount').css('color', 'black');
		}		

}

function withdraw() {

	var amount = $('#input-amount').val();
	amount = parseInt(amount);
	balance = balance - amount;

	console.log(balance);

	$('#balance span').text(balance);

	if(balance < 0) {
				$('#balance-display').css('color', 'red');
				$('#input-amount').css('background', 'red');
				$('#input-amount').css('color', 'white');

			}
		}

/*

	var deposit_amount = $('#input_amount').val();
	deposit_amount = parseInt(deposit_amount);

	console.log(deposit_amount);

	checking_balance = checking_balance + deposit_amount;
	
	console.log(checking_balance)
	
	$('#checking_balance').text(checking_balance);	




*/




});


