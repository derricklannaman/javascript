var checking_balance = 1000; 
var saving_balance = 1000; 

$(function(){

	$('#button_checking_deposit').click(checking_deposit);
	$('#button_checking_withdraw').click(checking_withdraw);
	$('#button_saving_deposit').click(saving_deposit);
	$('#button_saving_withdraw').click(saving_withdraw);

});

function checking_deposit() {
	
	var deposit = $('#input_amount_checking').val();
	var deposit = parseInt(deposit);
	new_balance = checking_balance + deposit;
	
	console.log(new_balance)

	$('#checking_balance').text(new_balance);

}

function saving_deposit() {

	var deposit = $('#input_amount_saving').val();
	deposit = parseInt(deposit);
	new_balance = saving_balance + deposit;

	$('#saving_balance').text(new_balance);
}

function checking_withdraw() {

	var withdraw = $('#input_amount_checking').val();
	withdraw = parseInt(withdraw);
	new_balance = checking_balance - withdraw;

	$('#checking_balance').text(new_balance);

}

function saving_withdraw() {

	var withdraw = $('#input_amount_saving').val();
	withdraw = parseInt(withdraw);
	new_balance = saving_balance - withdraw;

	$('#saving_balance').text(new_balance);

}










