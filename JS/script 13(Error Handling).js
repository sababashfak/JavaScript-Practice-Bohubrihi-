// Error Handling

console.log("Before Error");

try{
    test();
}
catch(err){
    //console.log(err);
    console.log(err.message);
    console.log(err.name);
}finally{
    console.log("I am inside finally block.")
}

console.log("\nAfter Error");



// Genarate Error

let a = 2;

try{
    if (a>15) throw "Too Big Number";
    else if (a<5) throw "Too Small";
}catch(err)
{
    console.log(err);
}