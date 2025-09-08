const {add} = require("./math.js");

let num = 42;
var name = "TOM";
let isStudent = true;

console.log(add(num, num));

let color = ["red" , "green", "blue"];

let person = { name : "Alice" , age : 30};

function greet(name)
{
    console.log("Hello" + name + " ! " );
}

greet(person.name);

if(num > 30)
{
    console.log("Number is greater than 30");
}
else
{
    console.log("Number is lower than 30");
}

for(var i = 0; i < 5; i++)
{
    console(i);
}

setTimeout(() => {
    console.Log("Delayed Message 1");
}, 1000); //1초

setTimeout(() => {
    console.Log("Delayed Message 2");
}, 750);  //0.75초

setTimeout(() => {
    console.Log("Delayed Message 3");
}, 2000); //2초

setTimeout(() => {
    console.Log("Delayed Message 4");
}, 500);  //0.5초

