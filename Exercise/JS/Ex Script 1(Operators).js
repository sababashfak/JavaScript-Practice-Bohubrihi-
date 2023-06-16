var celTemp = prompt("Enter the Tempereture in Celcius: ");
if(!isNaN(celTemp))
{
    console.log(!isNaN(celTemp));
    window.alert("Farenheit: " + (celTemp*9/5+32) + " Degree");
    console.log("Task Complete");
}
else
{
    console.log(!isNaN(celTemp));
    window.alert("It is not a number.");
    console.log("Task Failed due to input mismatch");
}