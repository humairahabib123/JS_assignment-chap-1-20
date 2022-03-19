// Question # 01:
document.write(" <h1>Question # 01</h1> ");

var num1= parseInt (prompt("Enter two numbers to get addition of these numbers.... \n write first number..."));
var num2= parseInt (prompt("write second number..."));
var sum= num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "</br>");

// Question # 02:
// for subtraction:
document.write(" <h1>Question # 02</h1> ")
document.write(" <h2>Subtraction:</h2> ")
var num1= parseInt (prompt("Enter two numbers to get subtraction of these numbers.... \n write first number..."));
var num2= parseInt (prompt("write second number..."));
var sub= num1 - num2;
document.write("The difference of " + num1 + " and " + num2 + " is " + sub + "</br>");

// for multiplication:
document.write(" <h2>Multiplication:</h2> ")
var num1= parseInt (prompt("Enter two numbers to get product of these numbers .... \n write first number..."));
var num2= parseInt (prompt("write second number..."));
var product= num1 * num2;
document.write("The product of " + num1 + " and " + num2 + " is " + product + "</br>");

// for division:
document.write(" <h2>Division:</h2> ")
var num1= parseInt (prompt("Enter two numbers to get division of these numbers.... \n write first number..."));
var num2= parseInt (prompt("write second number..."));
var division= num1 / num2;
document.write("The division of " + num1 + " and " + num2 + " is " + division + "</br>");

// for modulus:
document.write(" <h2>Modulus:</h2> ")
var num1= parseInt (prompt("Enter two numbers to get remainder of division.... \n write first number..."));
var num2= parseInt (prompt("write second number..."));
var modulus= num1 % num2;
document.write("The modulus of " + num1 + " and " + num2 + " is " + modulus + "</br>");

// Question # 03:
document.write(" <h1>Question # 03</h1> ");
var x;
document.write("Value after variable declaration is undefined </br>");

x = 5;
document.write("Initial value:" + x + "</br>");

x++;
document.write("Value after increment is:" + x++ + "</br>");

y = x + 7;
document.write("Value after addition is:" + y + "</br>");

y--;
document.write("Value after decrement is:" + y-- + "</br>");

var remainder = y % 3;
document.write("The remainder is:" + remainder + "</br>");

// Question # 04:
document.write(" <h1>Question # 04</h1> ");
var cost = 600
var no_of_tickets = 5
var total_cost = cost * no_of_tickets;
document.write("Total cost to buy 5 tickets to a movie is " + total_cost + "PKR");

// Question # 05:
document.write(" <h1>Question # 05</h1>");
document.write("<h3>Table of 6:</h3>")
 for( x = 1 ; x <= 10; x++){
    var prod = 6 * x;
document.write("6 X " + x + " = " + prod +"<br/>");
}

// Question # 06:
document.write(" <h1>Question # 06</h1> ");
var temInC = 25;
var temInF = (temInC * 1.8) + 32;

document.write(temInC + "°C is " + temInF + "°F <br/>");

var conInCelsius = (temInF - 32) / 1.8;
document.write(temInF + "°C is " + conInCelsius + "°F <br/>");

// Question # 07:
document.write(" <h1>Question # 07</h1> ");
var pitem1 = 650;
var pitem2 = 100;
var shipChar = 100;
var quan1 = parseInt(prompt("Enter Quantity of your FIRST item...."));
var quan2 = parseInt(prompt("Enter Quantity of your SECOND item...."));
document.write("Price of item 1 is " + pitem1 + "<br/>");
document.write("Quantity of item 1 is " + quan1 + "<br/>");
document.write("Price of item 2 is " + pitem2 + "<br/>");
document.write("Quantity of item 2 is " + quan2 + "<br/>");
document.write("Shipping charges is 100 <br/><br/><br/>");
var totalCost = (pitem1 * quan1) + (pitem2 * quan2) + 100;
document.write("<b>Total cost of your order is </b>" + totalCost + "<br/>");

// Question # 08:
document.write(" <h1>Question # 08</h1> ");
var tot_marks = 980;
var obt_marks = 804;
var per = (804 / 980) * 100;
document.write(`Total marks: ${tot_marks} <br/>`);
document.write(`Obtained marks: ${obt_marks} <br/>`)
document.write(`Percentage: ${per}%`);

// Question # 09:
document.write(" <h1>Question # 09</h1> ");
// us_dollars = 10;
// saudi_rials = 25;
var tot = (10 * 104.80) + (25 * 28);
document.write (`Total Currency in PKR: ${tot}`);

// Question # 10:
document.write("<h1>Question # 10</h1>");
var expr = (5 * 10) / 2;
document.write (`Answer of Mathematical expression: ${expr}`);

// Question # 11:
document.write("<h1>Question # 11</h1>");
document.write("<h2>Age Calculator</h2>");
var birth_year = 2002;
var rightnow = new Date();
var curr_year = rightnow.getFullYear();
var age = curr_year - birth_year;
document.write(`Current Year: ${curr_year} <br/>`)
document.write(`Birth Year: ${birth_year} <br/>`)
document.write(`Your Age is: ${age} <br/>`)

// Question # 12:
document.write("<h1>Question # 12</h1>");
document.write("<h2>The Geometrizer</h2>");
var r = 30;
var cir = (2 * 3.142) * r;
var area = 3.142 * (r**2);
document.write(`Radius of a circle: ${r} <br/>`);
document.write(`The circumference is ${cir} <br/>`);
document.write(`The area is: ${area} <br/>`);

// Question # 13:
document.write("<h1>Question # 13</h1>");
document.write("<h2>The Lifetime Supply Calculator:</h2>");
var fav_snack = "Lays";
var curr_age = 20;
var max_age = 75;
var per_day = 5;
var tot_amount = (max_age - curr_age) * 3 ;
document.write(`You will need ${tot_amount} ${fav_snack} to last you until the ripe old age of ${max_age}`)
