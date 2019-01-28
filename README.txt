READ ME:

Fibonacci sequence program.

a - first number in sequence
b - second number in sequence
l - length of continuation of sequence

run: "node cli.js a b l"

First part is error handling, as to cancel the program if inputs are not correct.
I check for input 1 > 2, if 1 & 2 are in the sequence, if the previous or next number is in sequence,
and that if input 1 == 0, input 2 ==1 . 

After error handling I add the two inputs cycle them and concatonate to the output.
I cycle for the length of input 3

time complexity WC - nlog(n)
space complexity wc - n^2 
