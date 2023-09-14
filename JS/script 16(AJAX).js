// Asynchronous Programming
// AJAX = Asynchronous JavaScript And XML (Here wee use JSON)
// AJAX work = Get data without loading the page

document.getElementById('get_data').addEventListener('click',loadData);

function loadData(){
    console.log("Button Clicked.");

    //Create XHR Object Xml Http Request)

    let xhr = new XMLHttpRequest();

    // Open Function
    xhr.open('GET', 'data 16.txt', true);

    // On progress
    xhr.onprogress = function (){
        console.log(`On Progress.( ReadyState : ${xhr.readyState})`);
    }

    xhr.onload = function () {
        /*
        HTTP statuses
        200: "OK"
        403: "Forbidden"
        404: "Not Found"
         */
        if (this.status === 200){
            console.log(`Status: ${this.status}`);

            console.log(`ResponseText: ${this.responseText}`);

            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`
        }
    }


    // On ready state change
    xhr.onreadystatechange = function () {
        // readyState Values
        // 0: request not initialized
        // 1: server connection established
        // 2: request recieved
        // 3: processing request
        // 4: request finished and response is ready

        console.log(`Ready State: ${this.readyState}`);
        if(this.status === 200 && this. readyState ===4) {
            console.log(this.responseText);
        }
    }

    xhr.send(); // must call it to run everyting about xhr
    console.log(xhr);
}


// Data from Extarnal Server**************************************************************************************************************************************************

// API ***************
// RESTful API **********


// Link: http://www.icndb.com/api/
// Link: https://api.chucknorris.io/jokes/random

document.getElementById('get_data2').addEventListener('click', loadJokes);

var arr=[], arr2=[];
var n=0;

function loadJokes(e){
    let searchData = document.getElementById('stringSearch').value;
    console.log(searchData);


    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random/' ,true);
    let xhr2 = new XMLHttpRequest();

    xhr2.open('GET', `https://api.chucknorris.io/jokes/search?query=${searchData}` ,true);

    xhr.onload = function() {  
        if (this.status === 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            let joke = data.value;
            
            arr[n++] = joke;


            let output = "<ol>";
            arr.forEach(element => {
                console.log(element);
                //output+= `<li>`
            });

            console.log(joke);
        }
    }
    xhr.send();

    xhr2.onload = function() {  
        if (this.status === 200){
            let data = JSON.parse(this.responseText);
            console.log(data);
            let joke = data.result.value;
            console.log(joke);

            arr2[n++] = joke;


            let output = "<ol>";

            arr2.forEach(element => {
                console.log(element);
                output+= `<li>${element}</li>`;
            });

            output += "</ol>";

            document.getElementById('output2').innerHTML = output;
            

            console.log(joke);
        }
    }
    xhr2.send();
}


// 19:24 sec  
// Access to jokes array value is not working... Have to find it.            