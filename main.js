console.log ("---------1--------");

function multiply(a, b) {
  console.log (a * b);
}

multiply(5, 2);


console.log("---------2--------");

function hello(name) {
    console.log (`Labas, ${name}`);
}

hello("Veronik");


console.log("---------3--------");

let text = "Functions often compute a return value.";

function whatLength(text) {
console.log (text.length);
}

whatLength(text);


console.log("---------4--------");

let initials = function (firstName, lastName) {

return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}
console.log(initials("Veronika","Naruseviciute"));


console.log("---------5--------");

printNumber(20);

function printNumber(number) {
    document.getElementById("numberPlace").innerHTML = number;
}


console.log("---------7--------");

let number = rndNum(10, 20);

function rndNum(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}

console.log(number);


console.log("---------8--------");

rnd(0, 5);

function rnd(min, max) {
    let nb = "";
    for (i = 0; i < 3; i++) {
        let randomNumber = min + Math.floor(Math.random() * (max - min))
        nb += randomNumber + ", ";
    }
    console.log(nb.slice(0, -2));
}




