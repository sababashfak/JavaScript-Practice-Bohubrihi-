//JSON (Javascript Object Notation)***********************************************************************************************************

//JSON use cotation ("")
//Exmp: {"name" : "Rahim", "age" : 22, "hommetown" : "Jashore"}

// JSON.stringify(JS Object) ---> To convert JS Object to JSON String
// JSON.parse(JSON String) ---> To convert JSON String to JS Object

var student = {
    name : "Rahim",
    age : 26,
    hometown : "Dhaka"
}
console.log(student);

var student_json = {
    "name" : "Rahim", 
    "age" : 22, 
    "hommetown" : "Jashore"
}
console.log(student_json);


//convert JS Object to JSON

student_json = JSON.stringify(student);
console.log(student_json);

// convert JSON to JS Object

var student_new = JSON.parse(student_json);
console.log(student_new);


// JSON Data Types**************************************

// https://jsonlint.com  (We can check error of jason data from this website)
//string
//number
//object(JSON Object)
//array
//boolean
//null

var person = {
    name : "Rahim",  //String
    age : 25,  //Number
    hometown : "Dhaka",  //string
    married : false,  //boolean
    dob : 2002-10-26,   // Date (In JSON, we use date as string)
    test_null : null,  //null
    test_undefined : undefined,  //undefined  (we cannot use undefined in JSON)
    greet : function() {  //function  (we cannot use function in json)
        console.log(`Hello ${this.name}`);
    }
}


console.log(person.name);
console.log(person.age);
console.log(person.hometown);
console.log(person.married);
console.log(person.dob);
console.log(person.test_null);
console.log(person.test_undefined);
person.greet();

var person_json = JSON.stringify(person);
console.log(person_json);  //{"name":"Rahim","age":25,"hometown":"Dhaka","married":false,"dob":1966,"test_null":null}     



//Warning*******************************************************************************************************************************************************************************************************************************


var person1 = {
    "name" : "Rahim",
    "age" : 25,
    "hometown" : "Dhaka",
    "married" : false
};

var person2 = {
    name : "Rahim",
    age : 25,
    hometown : "Dhaka",
    married : false
};

//Both person1 and person2 acts like a javascript object
console.log(person1);
console.log(person2);

// Though person1 written in JSON format. It acts like JS Object utill we convet it using JSON.stringify();
//Example: Here we can access person1 element like a JS Object element
console.log(person1.name);
console.log(person1.age);
console.log(person1.hometown);
console.log(person1.married);

//JSON Objects and Arrays********************************************************************************************************************************


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState ==4 && this.status ==200)
    {
        var data = this.responseText;
        console.log(data);
        console.log(jsonData(data));
    }
};
xmlhttp.open("GET","json data 15.json",true);
xmlhttp.send();

function jsonData(json_obj){
    
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);

    for(x in js_obj.persons)
    {
        console.log(x);
        console.log(js_obj.persons[x]);

        var persons = js_obj.persons;
        for(y in persons[x]){
            console.log(`${y} : ${persons[x][y]}`);        
        }
        
    }

    return json_obj;
}

