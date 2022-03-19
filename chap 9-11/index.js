// Question # 01:
document.write("<h1>Question # 01:</h1>")
var city = prompt("Enter Your city name...")
if (city === "Karachi"){
    document.write(`Welcome to the city of lights<br/>`)
}

// Question # 02:
document.write("<h1>Question # 02:</h1>")
var gender = prompt("What is your gender??")
if (gender === "male"){
    document.write(`Good Morning Sir`)
}
else if(gender === "female"){
        document.write(`Good Morning Ma'm`)
}


// Question # 03:
document.write("<h1>Question # 03:</h1>")
var color = prompt("Enter color of road traffic signal.....")
 if (color === "red"){
    document.write(`Must stop`)
 }
 else if(color === "yellow"){
     document.write(`Ready to move`)
 }
else if (color === "green"){
    document.write(`Move now`)
}
else{
    document.write(`Plese Enter Valid Color Name!!!`)
}

// Question # 04:
document.write("<h1>Question # 04:</h1>")
var fuel = parseInt(prompt("Remaining Fuel In Car in Litres??"))

if (fuel < 0.25){
    alert(`“Please refill the fuel in your car”`)
}
document.write(`This qestion result showed in alert box by checking the input condition`)

// Question # 05:
document.write("<h1>Question # 05:</h1>")
document.write(`It's result also shown in alert box`)
// a:

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b:
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c:
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// d:
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e:
if (true){
    alert("True");
}
if (false){
    alert("False");
}

// f:
if("car" < "cat"){
    alert("car is smaller than cat");
}

// Question # 06:
document.write("<h1>Question # 06:</h1>")
var tot_marks = parseInt(prompt("Enter Total Marks"))
var obt_marks = parseInt(prompt("Enter Obtained Marks of Three subjects"))
var per = (obt_marks / tot_marks) * 100;
document.write("<h2>Marks Sheet</h2><br/>")
document.write(`Total Marks : ${tot_marks}<br/>`)
document.write(`Marks Obtained : ${obt_marks}<br/>`)
document.write(`Percentage: ${per}%<br/>`)
if (per === 100 || per >= 80 ){
    document.write(`Grade: A-1 <br/>Remarks: Excellent`)
}
else if(per >= 70 && per < 80){
    document.write(`Grade: A <br/>Remarks: Good`)
}
else if(per >= 60 && per < 70){
    document.write(`Grade: B <br/>Remarks: You need to Improve`)
}
else if(per < 60 ){
    document.write(`Grade: FAIL <br/>Remarks: Sorry`)
}

// Question # 07:
document.write("<h1>Question # 07:</h1>")
document.write("<h2>Guess Game:</h2>")
var secret = 2
var guess = parseInt(prompt("Guess secret number between 1-10 !!!!"))
if (guess === secret){
    alert(" “Bingo! Correct answer”")
}
else if (guess === 1 || guess === 3){
    alert("“Close enough to the correct answer”")
}
else{
    alert("Wrong!!!")
}

// Question # 08:
document.write("<h1>Question # 08:</h1>")
var a = parseInt(prompt("Write any number to check weather the given number is divisible by 3 or not!!!"));
var b = a % 3;
if (b === 0){
    document.write(`Yes ${a} is divisible by 3`);
}
else{
    document.write(`${a} is not divisible by 3.`)
}

// Question # 09:
document.write("<h1>Question # 09:</h1>")
var check_num = parseInt(prompt("Enter any number to check whether the given input is an even number or an odd number ?? "))
var even = check_num % 2;
document.write(`The given number is ${check_num} <br/>`)
if (even === 0){
    document.write(` ${check_num} is an even number...<br/>`)
}
else{
    document.write(` ${check_num} is an odd number...<br/>`)
}

// Question # 10:
document.write("<h1>Question # 10:</h1>")
var temp = parseInt(prompt("Enter Temperature Here.....\n"))
if (temp > 40){
    document.write(` “It is too hot outside.”`)
}
else if(temp > 30){
    document.write(`“The Weather today is Normal.”`)
}
else if(temp > 20){
    document.write(` “Today’s Weather is cool.”`)
}
else if(temp => 10){
    document.write(` “OMG! Today’s weather is so Cool.”`)
}

// Question # 11:
document.write("<h1>Question # 11:</h1>")
var num1 = parseInt(prompt("CALCULATOR \n Enter first Number"))
var num2 = parseInt(prompt("Enter Second Number"))
var cal = prompt("Enter Operation from the following to get your result \n +, -, *, /, %  \n type anyone from them to get result....")
var add = num1 + num2;
var sub = num1 - num2;
var product = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;

if (cal === "+"){
    document.write(`Add ${num1} and ${num2} <br/>`)
    document.write(`Result: ${add}<br/>`)
}
else if (cal === "-"){
    document.write(`Subtract ${num1} and ${num2} <br/>`)
    document.write(`Result: ${sub}<br/>`)
}
else if(cal === "*"){
    document.write(`Find Product of ${num1} and ${num2} <br/>`)
    document.write(`Result: ${product}<br/>`)
}
else if(cal === "/"){
    document.write(`Find division of ${num1} and ${num2} <br/>`)
    document.write(`Result: ${div}<br/>`)
}
else if(cal === "%"){
    document.write(`What is the remainder of ${num1} and ${num2} ?<br/>`)
    document.write(`Result: ${mod}<br/>`)
}
else{
    document.write("Error! \n")
}