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

var operator = null;
var num1 = null;
var num2 = null;
var answer = 0;
var turn = 1;

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

function oper(val){
	operator = val;
	turn = 2;
	console.log(operator);
}

function answer(){
	document.getElementsByClassName("answer").value = answer;
}