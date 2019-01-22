exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

var msg;

errorCheck = function(a, b){
	//error - if size of numbers is wrong
	if(a > b){
		console.log("#1 Please rearrange order of numbers");
		msg = "#1 Please rearrange order of numbers";
		return false;
	}
	//error - if either number is not in the fib sequence
	else if(!fib.isValue(a) | !fib.isValue(b)){
		console.log("#2 Please enter proper numbers.");
		msg = "2"
		return false;
	}
	//error - if the distance of the inputs is not in fib sequence (large numbers)
	else if(!fib.isValue(b-a) | !fib.isValue(a+b)){
		console.log("#3 Please enter proper starting sequence.");
		msg = "3"
		return false;
	}
	//error - if leading 0 is not followed by 1
	else if(a == 0 && b != 1){
		console.log("#4 Please enter proper numbers in sequence.");
		msg = "4"
		return false;
	}
	else
		return true;
}

const fib = require("fibtastic");

//input # 1 - first number
//input # 2 - second number
//input # 3 - length of proceeding sequence 

//grab args
const [,, ...args] = process.argv

//print to cli
console.log(`Fibonacci Sequence ... ${args[0]} ${args[1]} `)

//placing args to variables. declaring answer var
var a = (args[0]-0), b = (args[1]-0), c = 0 - 0, answer = "... ";

if(errorCheck == true){
	//loop for 3rd input
	for(i = 0; i < args[2]; i++ ){
		//console.log(i);
		//next in the sequence
		c = (a-0) + (b-0);

		//shuffle backwards
		a = b;
		b = c;
		
		//concat to answer
		answer += c + " ";
	}

	//booyah
	console.log(answer);
}
else
	console.log(msg);

