var fjsmsg = 'This webpage is running functions.js v1.0 by codatronic @ https://github.com/codatronic/functions.js'
console.log(fjsmsg)
function namealert(name,last)
{
alert("Welcome " + name + " " + last);
}
    
function goto(url)
{
window.location.assign(url);
}

function writeto(id,text)
{
document.getElementById(id).innerHTML = text;
}

function r(address)
{
goto(address);
}
