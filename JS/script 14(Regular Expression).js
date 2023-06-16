 // Regular Expression(Pattern Matching in String)*************************************************************************************************************
 // Pattern Matching Technique

 let re;

 re = /Hello/;
 re = /hello/i;  //for removing case sensitivity we use i(Case insensitivity)

 console.log(re);
 console.log(re.source);

 
 

 // exec() - Returns in an Array or Null*****************************************
 re = /hello/i;
 str1 = "Hello World";
 let result1 = re.exec(str1);
 console.log(result1); // Match and index 0


 re = /hello/i;
 str2 = "Again Hello World";
 let result2 = re.exec(str2);
 console.log(result2);    // Match but index 6

 
 re = /hello/i;
 str3 = "Hell World";
 let result3 = re.exec(str3);
 console.log(result3);    // Null
 
 
 re = /hello/i;
 str4 = "sdsHellodfg World";
 let result4 = re.exec(str4);
 console.log(result4);    // Match but index 3

 
 re = /hello/i;
 str5 = "Again Hello World Hello";
 let result5 = re.exec(str5);
 console.log(result5);    // Match but index 6


// test() - true/false

re = /hello/i;
str6 = "Again Hello World";
let result6 = re.test(str6);
console.log(result6);    // true


re = /hello/i;
str7 = "Again World";
let result7 = re.test(str7);
console.log(result7);    // false

// match() - Returns array or null(Same as exec() but syntax difference)


re = /hello/i;
str8 = "Again Hello World";
let result8 = str8.match(re);
console.log(result8);    // Match but index 6


// search() - Returns inde3x of the first match or -1

re = /hello/i;
str9 = "Again World";
let result9 = str9.search(re);
console.log(result9);    // -1

re = /hello/i;
str10 = "Again Hello World";
let result10 = str10.search(re);
console.log(result10);    // 6

// replace() - Return new string


re = /hello/i;
str11 = "Again Hello World";
let result11 = str11.replace(re, "Hi");
console.log(result11);    // Again Hi World





// Literal and Meta Characters************************************************************************************************************************************************************************************************************


// Literal Character  (Work when 100% match)
re = /hello/;
re = /Hello/i;
str12 = "Again Hello World";
console.log(re.exec(str12));
reTest(re,str12);

function reTest(re, str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }
    else
    {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}


// Meta Characters

re = /^hello/i;  // Must start with(^)
str13 = "aHello World";
console.log(re.exec(str13));
reTest(re,str13);   // 'aHello World' doesn't match '^hello'



re = /hello$/i;  // Must end with($)
str14 = "World Helloo";
console.log(re.exec(str14));
reTest(re,str14);   //'World Helloo' doesn't match 'hello$'


re = /^hello world$/i;  // Must start with(^) and end with($)(So, the string should be 100% same as this regex)
str15 = "Hello world";
console.log(re.exec(str15));
reTest(re,str15);   //'Hello world' matches '^hello world$' 


re = /^hel.o$/i;  // In the place of (.) any character can be used to match
str15 = "Helfo";
console.log(re.exec(str15));
reTest(re,str15);   //'Helfo' matches '^hel.o$'


re = /hel.o/i;  // In the place of (.) any character can be used to match
str16 = "Helfo world";
console.log(re.exec(str16));
reTest(re,str16);   //'Helfo world' matches 'hel.o'


re = /hel*o/i;  // In the place of (*) any character can be used to match or it can be skip
str17 = "Helllllo world";
console.log(re.exec(str17));
reTest(re,str17);   //'Helllllo world' matches 'hel*o'


re = /he?a?llo/i;  // Before the place of (?) the character must match or skip(true for heallo or hallo or hello or hllo otherwise false)
str18 = "Hllo world";
console.log(re.exec(str18));
reTest(re,str18);   //'Hllo world' matches 'he?llo'



re = /How\?/i;  // To use (?) as a regex character
str17 = "Hello world how?";
console.log(re.exec(str17));
reTest(re,str17);   //'Hello world how?' matches 'How\?'


//Character Sets, Quantifier and Grouping*******************************************************************************************************************************************************************************************************


// Character Set Using Brackets []*********************************************************

re = /h[eai]llo/i;  // Must be one of them inside the [] . True for hello or hallo or hillo
str18 = "Hello world how?";
console.log(re.exec(str18));
reTest(re,str18);   // 'Hello world how?' matches 'h[ea]llo'

re = /[^ha]ello/i;  // Must be except one of them inside the [] . False for hello or aello
str19 = "iello world how?";
console.log(re.exec(str19));
reTest(re,str19);   //'iello world how?' matches '[^ha]ello'

// Range ([-])
re = /^[a-z]ello/;  // Must be start with one of the small latter(a to z) and then ello . 
str19 = "iello world how?";
console.log(re.exec(str19));
reTest(re,str19);   // 'iello world how?' matches '^[a-z]ello'

re = /^[A-Z]/;  // Must be start with one of the Capital latter(A to Z)
str19 = "Sabab Ashfak";
console.log(re.exec(str19));
reTest(re,str19);   // 'Sabab Ashfak' matches '^[A-Z]'


re = /^[A-Za-z]/;  // Must be start with one of the latter(A to Z or a to z)
str19 = "the sky is blue";
console.log(re.exec(str19));
reTest(re,str19);   // 'the sky is blue' matches '^[A-Za-z]'

// For digit check we can use [0-9] or \d and for not a digit we can use \D or [^0-9]

re = /^[0-9][0-9]ello/;  // Must be start with two digit(0 to 9) and then ello
str19 = "01ello ";
console.log(re.exec(str19));
reTest(re,str19);   //'01ello ' matches '^[0-9][0-9]ello'




// Quantifire************************************************************************

re = /hel{2}o/; //must match hello
str19 = "hello ";
console.log(re.exec(str19));
reTest(re,str19);   //'hello ' matches 'hel{2}o'


re = /hel{2,5}o/; //must match hello to helllllo (l should be 2 times to 4 times)  (Range of quantifires)
str19 = "hellllo ";
console.log(re.exec(str19));
reTest(re,str19);   //'hellllo ' matches 'hel{2,5}o'

re = /hel{2,}o/; //must match hello('l' should be 2 times or more)  (Range of quantifires)
str19 = "helllllllllllllllllllllo ";
console.log(re.exec(str19));
reTest(re,str19);   //'helllllllllllllllllllllo ' matches 'hel{2,}o'

// Grouping - Parentheses '()'*********************************************************

re = /^([0-9]){3}/;
str19 = "0123ghdf ";
console.log(re.exec(str19));
reTest(re,str19);   //'0123ghdf ' matches '^([0-9]){3}'

// Bangladeshi Phone number check
re = /^01(\d){9}$/;
str19 = "01790862914";
console.log(re.exec(str19));
reTest(re,str19);   //'01790862914' matches '^01\d{9}$'


re = /^\+8801(\d){9}$/;
str19 = "+8801790862914";
console.log(re.exec(str19));
reTest(re,str19);   //'+8801790862914' matches '^\+8801\d{9}$'


re = /^(\dx){3}$/;
str19 = "2x3x4x";
console.log(re.exec(str19));
reTest(re,str19);   //'2x3x4x' matches '^(\dx){3}$'

// Shorthand Character Classes*****************************************************************************************************************************************************

re= /\w/; // Word Character \w = no alphanumeric or ___
str19 = "+8801790862914";
console.log(re.exec(str19));
reTest(re,str19);   //'+8801790862914' matches '\w' (matchers in 8 or index 1)


re= /^\w+$/; // + = one or more
str19 = "ddds465eryxdrt45.";
console.log(re.exec(str19));
reTest(re,str19);   //'ddds465eryxdrt45.' doesn't match '^\w+$' (but matches for 'ddds465eryxdrt45')

re= /^\W/; // \W = non word character
str19 = "*dds465eryxdrt45.";
console.log(re.exec(str19));
reTest(re,str19);   //'*dds465eryxdrt45.' matches '^\W'

re= /^\d/; // \d = digit character
str19 = "465eryxdrt45.";
console.log(re.exec(str19));
reTest(re,str19);   //''465eryxdrt45.' matches '^\d'

re= /^\D/; // \D = non digit character
str19 = "*dds465eryxdrt45.";
console.log(re.exec(str19));
reTest(re,str19);   //'*dds465eryxdrt45.' matches '^\D'

re= /\s/; // \s = Match white space
str19 = "*dds46 5eryxdrt45.";
console.log(re.exec(str19));
reTest(re,str19);   //'*dds46 5eryxdrt45.' matches '\s'


re= /\S/; // \S = Match no white space
str19 = "*dds465eryxdrt45.";
console.log(re.exec(str19));
reTest(re,str19);   //'*dds465eryxdrt45.' matches '\S'


re= /hello\b/; // \b = Word Boundry
str19 = "*Hello75 hi";
console.log(re.exec(str19));
reTest(re,str19);   //'*Hello75 hi' doesn't match 'hello\b' (Matches for '*Hello 75 hi')

re= /\bhello\b/; // \b = Word Boundry
str19 = "*hello 75 hi";
console.log(re.exec(str19));
reTest(re,str19);   //'*hello 75 hi' doesn't match '\bhello\b' (Matches for 'hello 75 hi' matches '\bhello\b')



// Assertions***********************************************************************

re = /x(?=yz)/;  // Matches x only if x is before yz

str19 = "*hello xyz75 hi";
console.log(re.exec(str19));
reTest(re,str19);   // '*hello xyz75 hi' matches 'x(?=yz)' (To match yz should be present just after the x)


re = /x(?!yz)/;  // Matches x only if x is not just before yz
str19 = "*hello xayz75 hi";
console.log(re.exec(str19));
reTest(re,str19);   //'*hello xayz75 hi' matches 'x(?!yz)'


// Some Examples**************************************************************************************************************************************************************************************

//Postal Code

re = /^\d{4}$/;
str19 = "7400";
console.log(re.exec(str19));
reTest(re,str19);   //'7400' matches '^\d{4}$'

// Phone Number

re = /^(\+)?(88)?01\d{9}$/;
str19 = "+8801790862914";
console.log(re.exec(str19));
reTest(re,str19);   //'+8801790862914' matches '^01\d{9}$' (also true for 8801790862914 and 01790862914)

// Email address

re = /^(\d?\w?_?\.?)+@(\w){1,}\.(\w){1,}(.)(\.(\w)+)?[^\.]$/;
str19 = "sababashfak.fahim1999@gmail.com.bd";
console.log(re.exec(str19));
reTest(re,str19);   //'sababashfak.fahim1999@gmail.com.bd' matches '^(\d?\w?_?\.?)+@(\w){1,}\.(\w){1,}(.)(\.(\w)+)?[^\.]$'