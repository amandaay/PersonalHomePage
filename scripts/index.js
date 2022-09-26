const name = prompt("What's your name?");
var firstLetter = name.slice(0, 1).toUpperCase();
var restOfName = name.slice(1, name.length).toLowerCase();
var combined = firstLetter + restOfName;
alert("Hi, " + combined + "!:)");

