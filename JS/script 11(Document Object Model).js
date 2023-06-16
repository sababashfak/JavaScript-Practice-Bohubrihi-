// Document Object Model

var val;
val=this;  // full document or DOM value
val = window; // same as this (full document or DOM value)
val = window.document; // to access the full document of a DOM or html page
val = document; // same as window.document
val = document.all; // return all heml dom tag in a array
val = document.all[6]; // to iterate any tag from the html dom
val = document.all.length; // number of all the tag of the dom
val = document.head; // to see the head tag
val = document.doctype; //to see doctype tag
val = document.domain; // to see the domain of the html dom
val = document.URL; //to see the url link of the dom
val = document.characterSet; //UTF-8
val = document.contentType; // text/html

val = document.forms; // showing all the forms in the dom
val = document.forms[1]; // indexing 1 form
val = document.forms[0].method; // post
val = document.forms[0].action; //showing the action the form of the dom

val = document.links; // showing all the links in the dom
val = document.links[0];
val = document.links[0].href; // show href

val = document.images; // show images

val = document.scripts; //show all scripts
val = document.scripts[0];//indexing scripts
val = document.scripts[0].src; // show source of scripts
val = document.scripts[0].getAttribute('src'); //JS/script 11(Document Object Model).js

links=document.links;

let linkArr = Array.from(links);
linkArr.forEach(function(link) {
    console.log(link.getAttribute('src'));
});


console.log(links);
console.log(val);


// DOM Selector (Single Element)************************************************************************************

//getting an element
val = document.getElementById('document_title');

console.log("Document Title");
console.log(val);

val = document.getElementById('document_title').id;
console.log(val);

val = document.getElementById('document_title').className;
console.log(val);

//changing style*************************************************************

document.getElementById('document_title').style.background = '#333';
document.getElementById('document_title').style.color = '#FFF';
document.getElementById('document_title').style.padding= '30px';
document.getElementById('document_title').style.display = 'block'; //or 'hide'
var x = prompt("Enter a line :");
document.getElementById('document_title').textContent = x; // change the title

document.getElementById('output').innerText = "Again New Title for check";

document.getElementById('output').innerHTML = "<i>Again Again New Title</a>";


// document.querySelector()

val = document.querySelector('#document_title'); // call by id
console.log(val);

val = document.querySelector('.title_class'); // call by class
console.log(val);

val = document.querySelector('h3'); // call by tag
console.log(val);

val = document.querySelector('ol');
console.log(val);

val = document.querySelector('li');
console.log(val);

val = document.querySelector('ol li');
console.log(val);
val.style.color ='red';
val.style.background = 'black';

val = document.querySelector('li:last-child');
val.style.color='green';


val = document.querySelector('li:nth-child(2)'); // nth child of a tag using queryselector
val.style.background='yellow';

document.querySelector('li:nth-child(3)').innerText="JS";


// DOM Selector (Multiple Element)************************************************************************************


//document.GetElementByClassName()
let list = document.getElementsByClassName("sample_class");
list[0].style.background='#BAE7D1';
list[1].style.color='red';
list[1].style.padding='12px';
list[1].textContent = "Hello World!";


// document.getElementsByTagName()
list = document.getElementsByTagName('li');
console.log(list);
console.log(list[3]);

list = document.querySelector('ol').getElementsByTagName('li');
console.log(list);

let lis = Array.from(list);
lis.forEach(function(item){
    console.log(item);
});


// document.querySelectorAll()  it returns an array
// id -> #
// classname -> .
// tagname -> nothing

list = document.querySelectorAll('.sample_class');
console.log(list);

list = document.querySelectorAll('ol li');
console.log(list);

list.forEach(function(item){
    console.log(item);
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');


liOdd.forEach(function(item){
    item.style.background='grey';
});


// Traversing *******************************************************************************************************

list = document.querySelector('ul');
let listItem = document.querySelector('ul li:nth-child(1)');

console.log(list);
console.log(listItem);

//Get Child Nodes*************************************

val = list.childNodes;
console.log(val);

val = list.childNodes[1];
console.log(val);

val = list.childNodes[1].nodeName;  // LI
console.log(val);

val = list.childNodes[1].nodeType;  //1
console.log(val);

/**  NODE TYPE SERIAL: (Get output from nodeType)
 * 1. Element
 * 2. Attribute
 * 3. Text Node
 * 8. Comment
 * 9. Document Itself
 * 10. Doctype
 */

val = list.childNodes;
console.log(val);

val = list.children;
console.log(val);

list.children[1].textContent = "GitHub";

val = list.children[2].children[0];
console.log(val);

val = list.children[2].children[0].href;
console.log(val);

val = list.firstChild;
console.log(val);

val = list.firstElementChild;
console.log(val);

val = list.lastElementChild;
console.log(val);

val = list.childElementCount;  //4
console.log(val);



// Get Parent Nodes

val = listItem;
console.log(val);

val = listItem.parentElement;
console.log(val);

val = listItem.parentNode;
console.log(val);

val = listItem.parentElement.parentElement;
console.log(val);

val = listItem.nextElementSibling;
console.log(val);

val = listItem.previousSibling;
console.log(val);




// Add, Replace and Remove Elements**********************************************************************************************

//Assing Elements to DOM****************************

//Create Element
let olItem =document.createElement('li');
console.log(olItem);

olItem.className = "another-class";
console.log(olItem);

// Add ID and Class

olItem.id = 'new-element';
console.log(olItem);

//Add attribute

olItem.setAttribute('title','A title to new Element');
console.log(olItem);

olItem.appendChild(document.createTextNode('JavaScript'));
console.log(olItem);

document.querySelector('ol').appendChild(olItem);
console.log(olItem);

olItem.style.color = 'blue';

let ulItem = document.createElement('li');
let linkUl = document.createElement('a');


linkUl.appendChild(document.createTextNode('Sabab Ashfak Fahim'));
linkUl.setAttribute('href','https://sababashfakfahim.wordpress.com');
ulItem.appendChild(linkUl);
document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);


// Replacing Elements****************************************

let newHead = document.createElement('h1');
newHead.appendChild(document.createTextNode('h1 new Head'));
let oldHead = document.querySelector('h3');
document.querySelector('div').replaceChild(newHead,oldHead);

newHead.className = "sample-class";
console.log(newHead);

// Remove Elements***********************************************

let listItems = document.querySelectorAll('li');
let list2 = document.querySelector('ul');

listItems[0].remove();

listItems = document.querySelectorAll('ul li');
//list2 = document.querySelector('ul');

listItems[2].remove();


// thus we can remove all class name, attribute, title and many more


//Events of JavaScript *************************************************************************************************

//function for mouseover enevt called in html file
// resource: www.w3schools.com/JS/js_events_examples.asp ()

function message()
{
    console.log("Mouse over button");
}

function message2()
{
    alert("On Mouse Wheel");
}

// Add Events in Javascript file*************************************************
// resource: www.w3schools.com/JS/js_events_examples.asp (without using "on" use all the keywors to create event in html file)


var clcMe2 = document.getElementById("btn");
clcMe2.addEventListener("mouseup",message4);
clcMe2.addEventListener("dblclick",message3);


//console.log(btn);

function message3()
{
    alert("Double Click on Click Me 2");
    console.log("Double Click on Click Me 2");
}

function message4()
{
    //alert("Mouse UP on Click Me 2");
    console.log("Mouse Up/ Single Click on Click Me 2");
}


// More on Events ****************************************************************************************************************************************

var clcMe3 = document.getElementById("btn2");
clcMe3.addEventListener("click",message5);

function message5(e)
{
    let val = e;
    console.log(e);

    val = e.target;
    console.log(val);
    
    val = e.target.id;
    console.log("Target id: "+val);
    
    val =Math.round (e.timeStamp/1000);
    if(val<60)
    {
        console.log("Page was loaded "+val+"second before this click.");
    }
    else
    {
        let min,sec;
        sec = val%60;
        min = Math.round(val/60);
        if(sec<10)
        {
            console.log("Page was loaded "+min+":0"+sec+" min before this click.");
        }
        else
        {
            console.log("Page was loaded "+min+":"+sec+" min before this click.");
        }
    }

    //val = e.clientY;
    console.log(`Pixel Point (X:Y) : (${e.clientX} : ${e.clientY})`);

    console.log(`Offset Pixel Point (X:Y) : (${e.offsetX} : ${e.offsetY})`)
}


document.querySelector(".container").addEventListener('mouseover',message6);
document.querySelector(".container").style.background = "red";

function message6(e)
{
    
    let val = this;
    this.style.background = `#${e.offsetX}`;
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(val);
}