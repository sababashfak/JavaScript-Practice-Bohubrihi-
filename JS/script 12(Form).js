document.querySelector("#name").addEventListener('focus',test);

document.querySelector("#name").addEventListener('keyup',test2);

function test(e)
{
    this.style.background ='grey';
    console.log("Focused!");
}

function test2(e)
{
    //console.log(this.value);

    document.getElementById("demo").innerText = this.value;
}