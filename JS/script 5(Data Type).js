// Data Types

// 1. Numbers***************************************************************

var x= 3e5;  // e = exponential 3 * 10 ** 5 = 3e5
console.log(x);

x = 3e-3;
console.log(x);

x = 25/0; //Infinity
console.log(x);

var y= Infinity;
console.log(y);

x=56;
console.log(x.toString());
console.log(x);

console.log(3.1416.toString());

// base conversion(binary, hexadecimal etc)

x=12;
console.log(x.toString(2));  //base 2 or binary
console.log(x.toString(16));  // base 16 or hexadecimal
console.log(x.toString(5));  // base 5


//Convert string to number
console.log(Number(x.toString(16))); // hexa decimal to number will be NaN
console.log(Number(x.toString(2)));
console.log(parseInt("52")); //number 52
console.log(parseInt("3.1416")); //number 3 because it is integer
console.log(parseFloat("3.1416")); // number 3.1416
console.log(parseFloat("3")); // number 3

// Precision

x=30;
console.log(x.toPrecision()); // not changed
console.log(x.toPrecision(5)); //30.000

// isNaN


// 2. String******************************************************************************************

var str1 = "Hi";  //string 
var str2 = 'hello';  // string
str1 = "hello. 'ho'"; // string
/* "Hi."How are you?" I am fine." is not an error. 
Use |(backslash) or use double cottetion inside single connetion 
or vice versa. but using \(bakslash) is a safer way*/

str2 = "Hi. \"How are you?\" I am fine."; //string
console.log(str2);
str1 = "Hi. \\ this is backslash." // string
console.log(str1);
str1 = "Hello \t world" //tab space(\t)
console.log(str1);

str1 = "Hello \nworld"
console.log(str1);

// string length x.length()

console.log(str1.length);

// print character of a string by index number (array)

console.log(str1[0]);



for(let i=0; i<str1.length; i++)
{
    
    console.log(str1[i]);
}


//string to upper case

var str1up = str1.toUpperCase();

console.log(str1up);

// string lower case

var str1low = str1.toLowerCase();
console.log(str1low);

// string trim to remove starting an ending space

str1 = " Hi. I am Sabab Ashfak Fahim. I am a student of NSU. ";
var tr = str1.trim()+".";

console.log(tr);

// string slice

str1 = " Hi. I am Sabab Ashfak Fahim. I am a student of NSU. ";

var sl = str1.slice(1,6);  // Output: "Hi. I"  from index 1 to before 6

console.log(sl);   //Hi. I

sl = str1.slice(-7,-2);

console.log(sl);   //f NSU

sl = str1.slice(20);

console.log(sl);   //ak Fahim. I am a student of NSU.

// substr

str1 = "Hi. I am Sabab Ashfak Fahim.";

var sl = str1.substr(3);  // Output: " I am Sabab Ashfak Fahim."  from index 3 to end

console.log(sl);   

// replace

str1 = "Hi. I am Sabab Ashfak Fahim.";

var sl = str1.replace("ab","cd");  // Output: "Hi. I am Scdab Ashfak Fahim."  only replace first match
console.log(sl);

// concatination

str1 = "Hi.";
str2 = "I am Fahim."

var sl = str1.concat(str2);  // Output: "Hi.I am Fahim."  use as + or add two string
console.log(sl);

var sl = str1.concat(str2," I live in Dhaka."," I am a student of NSU.");  
// Output: "Hi.I am Fahim. I live in Dhaka. I am a student of NSU." 
// use as + or add two string
console.log(sl);

// 3. Booleans

/*If there is a value/data stored in the variable is TRUE in boolean output. 
If it is undefined, then it will return FALSE.*/

var x = 5;
console.log(Boolean(x)); //true
var z;
console.log(Boolean(z)); //false
x=null;
console.log(Boolean(x)); //false
x=NaN;
console.log(Boolean(x)); //false


// 4. Arrays**************************************************************************************

var countries = ["Bangladesh", "USA", "Canada"];
console.log(countries); //Array(3) [ "Bangladesh", "USA", "Canada" ]

countries[1] = "Poland";
console.log(countries); //Array(3) [ "Bangladesh", "Poland", "Canada" ]

countries[countries.length] = "India";
console.log(countries); //Array(4) [ "Bangladesh", "Poland", "Canada", "India" ]

countries.push("China");
console.log(countries);//Array(5) [ "Bangladesh", "Poland", "Canada", "India", "China" ]

console.log(countries.pop()); //China
console.log(countries);//Array(4) [ "Bangladesh", "Poland", "Canada", "India" ]

countries.push("China","Japan");
console.log(countries);//Array(6) [ "Bangladesh", "Poland", "Canada", "India", "China", "Japan" ]

console.log(countries.shift());//Bangladesh
console.log(countries);//Array(5) [ "Poland", "Canada", "India", "China", "Japan" ]

countries.unshift("Pakistan");
console.log(countries); //Array(6) [ "Pakistan", "Poland", "Canada", "India", "China", "Japan" ]

// Blank Array
var numbers = [];
numbers.push(12);
console.log(numbers);  //Array [ 12 ]
numbers.push("Hi");
console.log(numbers);  //Array [ 12, "Hi" ]

//Slit Array
var x = "Bangladesh";
var y = x.split("");
console.log(y);  //Array(10) [ "B", "a", "n", "g", "l", "a", "d", "e", "s", "h" ]

y = x.split();
console.log(y);  //Array [ "Bangladesh" ]

x = "Bangladesh is a country.";
y = x.split(" ");
console.log(y);  //Array(4) [ "Bangladesh", "is", "a", "country." ]

x = "Bangladesh, China, Japan";
y = x.split(", ");
console.log(y); //Array(3) [ "Bangladesh", "China", "Japan" ]

//Array to String
var z = y.toString();
console.log(z); //Bangladesh,China,Japan

//Join
x = "Bangladesh is a country.";
z = y.join(" ");
console.log(z); //Bangladesh China Japan

// Concatanation

z = x.concat(y);
console.log(z); //Bangladesh is a country.Bangladesh,China,Japan

z = countries.concat(y);
console.log(z); //Array(9) [ "Pakistan", "Poland", "Canada", "India", "China", "Japan", "Bangladesh", "China", "Japan" ]

// Array sort

countries.sort();
console.log(countries); //Array(6) [ "Canada", "China", "India", "Japan", "Pakistan", "Poland" ]

countries.sort().reverse();
console.log(countries); //Array(6) [ "Poland", "Pakistan", "Japan", "India", "China", "Canada" ]


//  5. Objects****************************************************************************************************************************************

var arr = [1,2,3];
console.log(arr);
console.log(arr[1]);


var student = {name:"Sabab", age: 25,hometown:"Jashore"};
console.log(student);  //Object { name: "Sabab", age: 25, hometown: "Jashore" }
console.log(student["age"]);  //25
console.log(student["name"]); //Sabab
console.log(student["hometown"]); //Jashore
console.log(student.name);  //Sabab

//Add new property in a object
student["dep"] = "CSE";
console.log(student); //Object { name: "Sabab", age: 25, hometown: "Jashore", dep: "CSE" }

//delete property

if(delete student.hometown)
{
    console.log("Successfully deleted."); //Successfully deleted.
    console.log(student);
}
else
{
    console.log("Deletation Failed");
    console.log(student);  //Object { name: "Sabab", age: 25, dep: "CSE" }
}

//Define emty object
student = {};

student.age = 22;
console.log(student);  //Object { name: "Sabab", age: 25, dep: "CSE" }


// #More on Arrays and Objects*************************************************************************

var arr = [10, 12, ["a", "b",["Hi", "Hello", "Bye",{name: "Mahin", id: 203}]], 8, 9];
console.log(arr[2]); //Array [ "a", "b" ]
console.log(arr[2][1]);  //b
console.log(arr[2][2][2]);  //Bye
console.log(arr); //Array(5) [ 10, 12, (3) […], 8, 9 ]
console.log(arr[2][2][3]["name"]);  //Mahin
console.log(arr[2][2][3]);  //Object { name: "Mahin", id: 203 }
console.log(arr[2][2][3].id);  //203


// Undefined, Empty Values, null, NaN(Not a number)**************************************************************************

var f; // undefined
console.log(f);
f = ""; // Empty value
console.log(f);
f = null;  //null
console.log(f);
f = "abc"/10;  //NaN
console.log(f);


console.log(undefined == null);  //true
console.log(undefined == "");  //false
console.log(undefined == NaN);  //false

console.log("" == null);  //false
console.log(undefined == NaN);  //false

console.log("" == NaN); //false
console.log("...");
console.log(undefined === null);  //false
console.log(undefined === "");  //false
console.log(undefined === NaN);  //false

console.log("" === null);  //false



// #Primitive Data Types*****************************************************************************************


/*
    Primitive Data Type: number, string, boolean (Store Value)
    Reference Data Types: array,, object (Store Address)
*/

// Primitive Type
let a = 7;
let b=a;

a= 45;
console.log(b);  //7 (Output is not 45. because primitive type e value store hoi)
console.log(a); //45

//Reference Type
let v = [1,2,3];
let newV = v;
console.log(newV);  //Array(3) [ 1, 2, 3 ]
v[1] = 500;
console.log(v);   //Array(3) [ 1, 500, 3 ]
console.log(newV);  //Array(3) [ 1, 500, 3 ]  (Reference type e address store hoi. tai ekta change korle r ektao change hoi)

