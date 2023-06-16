// 1. IF Statement***************************************************************************************

/*
if(condition)
{
    Code to executed
}
else
{
    Other code to execute
}
*/

var x=prompt("x"),y=prompt("y");

//x= parseInt(x);
//y=parseInt(y);

if(x<=5 && y>=5)
{
    console.log(`1. x = ${x} & y = ${y}`);
}
else if(x>=5 && y <=5)
{
    console.log(`2. x = ${x} & y = ${y}`);
}
else
{
    console.log(`3. x = ${x} & y = ${y}`);
}

// 2. Nested If Statement*******************************************************************************************

//Find the largest number

var n1 = prompt("First Number:"), n2= prompt("Second Number"), n3 = prompt("Third Number");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1>=n2)
{
    if(n1>=n3)
    {
        console.log("Largest Number is "+n1);
    }
    else
    {
        console.log("Largest Number is "+n3);
    }
}
else
{
    if(n2>=n3)
    {
        console.log("Largest Number is "+n2);
    }
    else
    {
        console.log("Largest Number is "+n3);
    }
}


// 3. Switch***********************************************************************************************

console.log(`Select an Option:
1. Option 1
2. Option 2
3. Option 3`);

var ch = prompt("Choice");


switch(ch)
{
    case "1":
        console.log("Option 1 Selected.");
        break;
    case "2":
        console.log("Option 2 Selected.");
        break;
    case "3":
        console.log("Option 3 Selected.");
        break;
    default:
        console.log("No option selected.");
        break;
    
}

// Grade using switch

var marks = prompt("Enter your marks: ");

marks = parseInt(marks);

if(marks<=100 && marks>=80)
{
    console.log(`Your Grade: A+`);
}
else if(marks< 80 && marks >= 70)
{
    console.log(`Your Grade: A`);
}
else if(marks< 70 && marks >= 60)
{
    console.log(`Your Grade: A-`);
}
else if(marks< 60 && marks >= 50)
{
    console.log(`Your Grade: B`);
}
else if(marks< 50 && marks >= 40)
{
    console.log(`Your Grade: C`);
}
else if(marks< 40 && marks >= 33)
{
    console.log(`Your Grade: D`);
}
else if(marks< 33 && marks >= 0)
{
    console.log(`Your Grade: F`);
}
else
{
    console.log(`!Invalid Input`);
}


// Simple Calculator

console.log(`Simple Calculator:
Options:
1. Add(+)
2. Subtraction(-)
3. Multiplication(*)
4. Division(/)`);
var num1 = parseInt(prompt("Enter num1: ")), num2 = parseInt(prompt("Enter num2: ")), op = prompt("Enter Operator(+,-,*,/): ");
var result;

switch(op)
{
    case "+":
    case "1":
        result = (num1+num2);
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case "-" :
    case "2":
        result = (num1-num2);
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case "*":
    case "3":
        result = (num1*num2);
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    case "/":
    case "4":
        result = (num1/num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    default:
        console.log("Invalid Input");
        break;
}

