exports.printMsg = function() {
  console.log("This is a message from the demo package");
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

//error - if size of numbers is wrong
if(a > b)
	console.log("#1 Please rearrange order of numbers");
//error - if either number is not in the fib sequence
else if(!fib.isValue(a) | !fib.isValue(b))
	console.log("#2 Please enter proper numbers.");
//error - if the distance of the inputs is not in fib sequence (large numbers)
else if(!fib.isValue(b-a) | !fib.isValue(a+b))
	console.log("#3 Please enter proper starting sequence.");
//error - if leading 0 is not followed by 1
else if(a == 0 && b != 1)
	console.log("#4 Please enter proper numbers in sequence.");
else{
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

