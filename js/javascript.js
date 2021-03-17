//LA2 Part 1
//1.
console.log("Hello World");
//2.
var x = "Everyone";
document.getElementById("hello").innerHTML = "This is basic JS, Hello " + x + "!";
//3.
document.getElementById("name").innerHTML = "Joelle Lindsey";
//4.
function compareValues() {
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;
    if (x > y) {
        document.getElementById("compareValues").innerHTML = "Number 1 is the larger value. Num 1= " + x + "<br>Number 2 is the smallest value. Num 2= " + y;
    }
    else {
        document.getElementById("compareValues").innerHTML = "Number 2 is the larger value. Num 2= " + y + "<br>Number 1 is the smallest value. Num 1= " + x;
    }
}

//5.
function findMax() {
    let x = parseInt(document.getElementById("number1").value);
    let y = parseInt(document.getElementById("number2").value);
    let z = parseInt(document.getElementById("number3").value);
    if (x > y) {
        if (x > z) {
            max = x;
        }
        else {
            max = z;
        }
    }
    else {
        if (y > z) {
            max = y;
        }
        else {
            max = z;
        }
    }
    document.getElementById("maxMin").innerHTML = "The maximum number of " + x + ", " + y + ", and " + z + " is: " + max;

}
function findMin() {
    let x = parseInt(document.getElementById("number1").value);
    let y = parseInt(document.getElementById("number2").value);
    let z = parseInt(document.getElementById("number3").value);
    if (x < y) {
        if (x < z) {
            min = x;
        }
        else {
            min = z;
        }
    }
    else {
        if (y < z) {
            min = y;
        }
        else {
            min = z;
        }
    }
    document.getElementById("maxMin").innerHTML = "The minimum number of " + x + ", " + y + ", and " + z + " is: " + min;

}

//6
var s = "";
for (i = 1; i <= 10; i++) {
    s += i + ", ";
}
document.getElementById("oneToTen").innerHTML = s;
//7
var s2 = "0, ";
for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        s2 += i + ", ";
    }
}
document.getElementById("evenTen").innerHTML = s2;

//LA2 Part 2
//1.
var j = 50;
var s3 = "";
while (j <= 100) {
    if (j % 2 !== 0) {
        s3 += j + ", ";
    }
    j++;
}
document.getElementById("oddNum").innerHTML = s3;

//2.
function nestedTriangles() {
    let r = document.getElementById("rows").value;
    let s4 = "";
    let s5 = "";
    for (let i = 1; i <= r; i++) {
        s4 = "";
        for (let j = 0; j < i; j++) {
            s4 += "* ";

        }
        s5 += s4 + "</br>";
    }
    document.getElementById("nestedTriangle").innerHTML = s5;
}

nestedTriangle

//3.
function Hello() {
    document.getElementById("hello2").innerHTML = "Hello World";
}
Hello();

//4.
let name = prompt("Please enter your full name ", "Everyone");

document.getElementById("welcome").innerHTML = "Welcome " + name;

