/*
.concat()
.indexOf()
.lastIndexOf()
*/
var a = document.getElementById("content1").innerHTML = "JavaScript ";

var b = document.getElementById("content2").innerHTML = " Web Developer ";

function conCat() {
    a.concat(b);
    var text = "Hello world, welcome to the universe.";
    var n = text.indexOf("universe");
    var o = text.lastIndexOf("welcome");
    document.getElementById("content2").innerHTML = n + " " + o;
}

conCat();

/*
.match()
.replace()
.split()
*/

function myFunction() {
    var str = "The rain in SPAIN stays mainly in the plain"; 
    var res = str.match(/ain/gi);
    var text = str.replace("Microsoft", "W3Schools");
    var split = str.split(" ");
    document.getElementById("content3").innerHTML = res + text + split;
}

myFunction();

/*
.splice()
.toLowerCase()
.toUpperCase()
.substr()
*/

function myText() {
    var str = "Hello world!"; 
    var res = str.slice(0, 5);
    var words = "LITTLE WORDS";
    var words1 = words.toLocaleLowerCase();
    var Words = "bigger words";
    var Words1 = Words.toLocaleUpperCase();
    var str1 = "Hello world!";
    var res1 = str1.substr(1, 4);
    document.getElementById("content4").innerHTML = res + " " + words1 + " " + Words1 + " " + res1;
}

myText();