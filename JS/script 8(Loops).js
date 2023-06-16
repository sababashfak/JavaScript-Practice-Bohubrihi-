// 1. While Loop

var i = 15;
while(i>=0)
{
    console.log(i);
    i-=3;
}

i=11;
do{
    console.log(i);
    i-=5;
}while(i>0)

//print 1 to 10
i=1;
while(i<=5)
{
    console.log(i);
    i++;
}

//sum of 1 to 10

var sum=0;
i=1;
while(i<=5)
{
    sum+=i++;
}

console.log("Sum = "+sum);

// 2. For Loop

for(i=1;i<=5;i++)
{
    console.log(i);
}

for(i=5;i>=1;i--)
{
    console.log(i);
}


// 3. Using break break and continue

// break

for(i=1;i<=5;i++)
{
    console.log(i);
    if(i%3==0)
    {
        break;
    }
}

//continue (use it to skip the iteration)

for(i=1;i<=5;i++)
{
    if(i%3==0)
    {
        continue;
    }
    console.log(i);
    
}


// 4. Iterate a string or array

//String

let name = "Sabab Ashfak Fahim";
//console.log(name.length);
for(i =0; i< name.length;i++)
{
    console.log(name[i]);
}

let food = ["Sweet","Spicy","Salty"];
//console.log(food.length);
for(i =0; i< food.length;i++)
{
    console.log(food[i]);
}

// 5. For - in and For - of

//for in

name = "Sabab Ashfak Fahim";
food = ["Sweet","Spicy","Salty"];
let person = {
    name: "Sabab Ashfak Fahim",
    profession: "Student",
    team: "CSE",
    age: 21
}

for( var x in name)
{
    console.log(name[x]);
}

for(var x of name)
{
    console.log(x);
}

//apply on object
for( var x in person)
{
    console.log(`${x} : ${person[x]}`);
}


// 6. Excercise

//Sum of series of square number

var sum=0, n=parseInt(prompt("Enter a number: "));
var arr=[];

for(var i=1; i<=n; i++)
{
    arr[i-1]=i**2;
    sum+=i**2;
}

var str = arr.join(" + ");
console.log(str.concat(` = ${sum}`));5