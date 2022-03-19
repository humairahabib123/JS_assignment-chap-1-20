// // Question # 01:
// document.write("<h1>Question # 01:</h1>")
// document.write("This TOpic is not covered in class!!!!")

// // Question # 02:
// document.write("<h1>Question # 02:</h1>")
// var num1 = parseInt(prompt("Enter first Number!"))
// var num2 = parseInt(prompt("Enter second Number!"))

// if (num1 > num2){
//     document.write(`${num1} is larger number...`)
// }
// else if(num2 > num1){
//     document.write(`${num2} is larger number...`)
// }
// else if(num1 === num2){
//     document.write(`both ${num1} and ${num2} are equal numbers...`)
// }

// // Question # 03:
// document.write("<h1>Question # 03:</h1>")
// var a = parseInt(prompt("Enter number here to check weather it is positive, negative, or 0??\n"))
// document.write(`program that checks if the number <b><u> ${a} </u></b> is positive, negative or zero <br/><br/>`)
// if(a > 0){
//     document.write (`The given number is positive`)
// }
// else if(a === 0){
//     document.write (`The given number is eqauals to 0`)
// }
// else{
//     document.write (`The given number is negative`)
// }

// // Question # 04:
// document.write("<h1>Question # 04:</h1>")
// var vowel = prompt("Enter Any Character (for checking vowel or not....)")
// document.write(`Checking while the given character is vowel....if vowel then you will see TRUE otherwise you will see FALSE <br/><br/>`)
// if (vowel.length === 1 && vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
//     document.write (true + "<br/>")
// }  
// else if(vowel.length != 1){
//     document.write("Kindly enter only 1 character...!! <br/>")
// }
// else{
//     document.write(false + "<br/>")
// }

// // Question # 05:
// document.write("<h1>Question # 05:</h1>")
// var corr_pass = "humairahabib@123";
// var pass = prompt("Enter Your Password Here!!")

// if (pass === corr_pass){
//     document.write("Correct! The password you entered matches the original password<br/>")
// }
// else if (pass !== corr_pass){
//     document.write("Incorrect password")
// }
// else{
//     document.write("Please enter your password")
// }

// // Question # 06:
// document.write("<h1>Question # 06:</h1>")
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// document.write(greeting)

var birth_year = parseInt(prompt("Enter your birth year"));
var date = new Date();
var curr_year = date.getFullYear();
var age = curr_year - birth_year;
document.write(`Current Year: ${curr_year} <br/>`)
document.write(`Birth Year: ${birth_year} <br/>`)
document.write(`Your Age: ${age} <br/>`)







