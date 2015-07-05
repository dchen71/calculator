//Global variables
var operator = null;
var num1 = null;
var num2 = null;
var answer = 0;
var turn = 1;

//Creates the values of the numbers
function num(val){
	if(turn == 1)
		if(num1 == null)
			num1 = val;
		else
			num1 = num1.concat(val);
	else
		if(num2 == null)
			num2 = val;
		else
			num2 = num2.concat(val);

	console.log(num1);
	console.log(num2);
}

//Detects which operator will be used and also adjusts next number value
function oper(val){
	operator = val;
	if(num1 != null)
		turn = 2;
	console.log(operator);
}

function answer(){
	document.getElementsByClassName("answer").value = answer;
}

//Finds the answer and clears values
function clr_eq(){
	if (num1 != null && num2 != null){
		num1 = parseInt(num1);
		num2 = parseInt(num2);
		switch(operator){
			case '+':
				answer = add(num1, num2);
				break;
			case '-':
				answer = subtract(num1, num2);
				break;
			case '/':
				answer = divide(num1, num2);
				break;
			case '*':
				answer = multiply(num1, num2);
				break;
		}
		clear();
	}
	else
		clear();


	console.log(answer);

}

//Resets the data back to the beginning
function clear(){
	num1 = null;
	num2 = null;
	turn = 1;
	operator = null;
}

//Main logic for calculations
function add(v1,v2){
  return v1 + v2;
}

function multiply(v1,v2){
  return v1 * v2;
}

function divide(v1,v2){
  return v1 / v2;
}

function subtract(v1,v2){
  return v1-v2;
}