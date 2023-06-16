// Operator
// operand operator operand
// 2 + 3
// + - * / % ** ++ --

// 1. Arithmetic Operator:
var x = 5, y = 8;
console.log(x+y);
console.log(y-x);
console.log(x*y);

var c = y % x;
console.log(c);

//power(**)

c = 2 ** 3;
console.log(c);

//increment(a++,++a)

c++; // c++ same as c+1
console.log(c);

// decrement(a--,--a)

c--; // c-- same as c-1
console.log(c);


//*******************************************************************

// String Operators

//36+4+"Hi" = "40Hi"
console.log(36+4+"Hi");

//"Hi"+36+4 = "Hi364"
console.log("Hi"+36+4);

//"36"-"4" = 32
console.log("36"-"4");

//"36"+"4" = "364"
console.log("36"+"4");

//"36"-"Hi" = NaN(Not a number)
console.log("36"-"Hi");

//**************************************************************************
//Comparison Operators

// ==
var z=5;
console.log(z==6);

console.log("6"==6);

// ===
console.log("6"===6);

// != (not equal)
console.log(z!=6);

// !== (not equal)
console.log("6"!==6);
console.log(7!==6);
console.log(6!==6);

// >, <, >=, <=  always return true/false

//logical operators

// 1. Or operator ( || )
// 2. And operator ( && )
// 3. Not operator ( ! )

//*****************************************************************

// Conditional Operator

var a = (10<8) ? "Hello" : "World";
console.log(a);

//*****************************************************************

//Assignment Operators

// =, +=, -=, *=, /=, %=