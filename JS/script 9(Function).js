// Build in function*********************************************************************************

//alert();
//console.log();

// User defined function 

//Decleration of function:
function saySomething()
{
    console.log("Hello");
    console.log("Sabab Ashfak Fahim");
}

//Execution of function:
saySomething();
saySomething();
console.log("3rd");
saySomething();
saySomething();


// Parameter/argument of a function***********************************************************************

function saySome(str = "The great is you. ",num=69)
{
    console.log(str + "The number is " + num);
}

saySome("Sabab Ashfak Fahim, The Great Coder.",5);
saySome();

function addNum(a=0,b=0)
{
    return a+b;
}

console.log(addNum(5.67,10));

//After return line, the code will skip another line below the return line


//declaration style of function*********************************************************************

//Normal declaration

function saySome1(name)
{
    console.log(name);
}

// Function Expression

let saySome2 = function(name){
    console.log(name);
}

//Arrow Function (ES6)

let saySome3 = (name, lname) => {
    console.log("Arrow Function " + name + " " +lname);
}

let saySome4 = name => {   //If there is only one parameter
    console.log("Arrow Function " + name);
}


saySome1("Sabab");
saySome2("Ashfak");
saySome3("Fahim", "The great");
saySome4("Hi");


//Function in Array Iteration***********************************************************************

// Array iteration using forEach

var foods = ["Cake","Ice Cream", "Chocolates"];


//1st parameter: Item
//2nd parameter: Index
//3rd parameter: Whole Array
//We must maintain the sequence of parameter...it can't be changed in this case

foods.forEach(function(item,i,arr)  //We must maintain the sequence of parameter...it can't be changed in this case
{
    console.log(`Index : ${i+1} and Item : ${item}`);
});

function printAll(item,i,arr)
{
    console.log(`Index : ${i+1} and Item : ${item}`);
}
foods.forEach(printAll);


//Array iteration using Mapping

foods = ["Cake","Ice Cream", "Chocolates"];
var numbers = [1, 32, 31, 2];

function addSomething(item)
{
    return `${item} is a Food`;
}

//1st parameter: Item
//2nd parameter: Index
//3rd parameter: Whole Array
//We must maintain the sequence of parameter...it can't be changed in this case

let arr_res = foods.map(addSomething); //We must maintain the sequence of parameter...it can't be changed in this case

console.log(arr_res);

let arr_square = numbers.map(function(item){
    return(item**2);
});

console.log(arr_square);



// Object Method  **************************************************************************************************

let person = {
    fname : "Sabab",
    lname : "Fahim",
    age: 21,

    fullname : function(){
        return this.fname + " " + this.lname;
    }
}

console.log(person);

console.log(person.fullname());

//Math and Date Object  *******************************************************************************************************

// Math Object

let val;

val = Math.PI;
console.log(val);

val = Math.E; //3.141592653589793
console.log(val); //2.718281828459045

val = Math.round(3.1); //3
console.log(val);

val = Math.ceil(1.1); //1
console.log(val);

val = Math.floor(1.2); //1
console.log(val);

val = Math.sqrt(9); //3
console.log(val);

val = Math.abs(-8); //8
console.log(val);

val = Math.pow(2,3);
console.log(val);  //8

val = Math.min(5,9,2,1,7,3,-1,90,1.5,.3);  //1
console.log(val);

val = Math.max(5,9,2,1,7,3,-1,90,1.5,.3); //90
console.log(val);

val = Math.round(100*Math.random());
console.log(val);  //8



// Date Object **************************************************************************************************

let v;

let today = new Date();

console.log(today);

let vstr = today.toString();
console.log(vstr);

let dob = new Date('10-26-1999 11:25:27');
console.log(dob);

dob = new Date('October 26 2002');
console.log(dob);

dob = new Date('10/26/2000');
console.log(dob);

val = 1+today.getMonth(); //2  start from 0 . So we have to add 1 to get the right month.
console.log(val);

val = today.getDate(); //19
console.log(val);

val = today.getFullYear(); //2023
console.log(val);

val = today.getHours(); //2
console.log(val);

val = today.getMinutes(); //3
console.log(val);

val = today.getMilliseconds(); //747
console.log(val);

val = today.getTime(); //1676750645546  Time Stamp(Amount of seconds since 1st Jan 1970)
console.log(val);

dob.setMonth(7);
val = dob.getMonth();
console.log(val);


//Global and Local Scope with let and const (ES6)**********************************************************************


// var and let const
// let and const (ES6)

var a = 10;
a = a+10;

var a;

let b=2;
// cannot declair again using let and var

//Global Scope

var x =1;
let y = 2;
const z =3;
var d=10;

console.log(`Global Scope: ${x}, ${y}, ${z}, ${d}`); //Global Scope: 1, 2, 3, 10

function test(){
    //Local Scope
    var x = 4;
    let y=5;
    const z = 6;
    console.log(`Functions Scope: `,x,y,z,d); //Functions Scope:  4 5 6 10
}

test();

console.log(`Functions Scope: `,x,y,z,d); //Functions Scope:  1 2 3 10

if(true)
{
    var x=7;
    let y = 8;
    const z = 9;

    console.log(`If Scope: `,x,y,z);  //If Scope:  7 8 9
}

console.log(`Global Scope: `,x,y,z);  //Global Scope:  7 2 3

for(let x = 0; x<10;x++)  // using let variable the value of global scope doesn"t changed
{
    console.log(`For Loop: `,x);
}

console.log(`Global Scope: `,x,y,z);  //Global Scope:  7 2 3

for(var x = 0; x<10;x++)  // using var variable the value of global scope changed
{
    console.log(`For Loop: `,x);
}

console.log(`Global Scope: `,x,y,z);  //Global Scope:  10 2 3

