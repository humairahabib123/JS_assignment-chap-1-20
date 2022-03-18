// Question # 01:
document.write("<h1>Question # 01:</h1>")
var a = parseInt (prompt("write any number here..."))
document.write(`Result: <br/> The value of a is: ${a} <br/> ..........................................<br/><br/>`);

++a;
document.write(`The value of ++a is: ${++a} <br/> Now the value of a is: ${a} <br/><br/>`);

a++;
document.write(`The value of a++ is: ${a++} <br/> Now the value of a is: ${a} <br/><br/>`);

--a;
document.write(`The value of --a is: ${--a} <br/> Now the value of a is: ${a} <br/><br/>`);

a--;
document.write(`The value of a-- is: ${a--} <br/> Now the value of a is: ${a} <br/><br/>`);

// Question # 02:
document.write("<h1>Question # 02:</h1>");
var a = 2, b = 1;
document.write(`${a} <br/>`);
document.write(`${b} <br/>`);

c = --a;

d = --a - --b;

e = --a - --b + ++b;

f = --a - --b + ++b + b--;

var result = --a - --b + ++b + b--;
document.write (`The Result is: ${result} <br/>`)

// Question # 03:
document.write("<h1>Question # 03:</h1>");
var name = prompt(`what is your name? \n`);
document.write(`Assalam o alaikum ${name} !!`);

// Question # 05:
document.write("<h1>Question # 05:</h1>");
var num = parseInt(prompt(`Enter any number to get it's table`));
var range = parseInt(prompt(`From which num do want to get your table?`));
document.write(`<b><u> Table of ${num} till ${range} : </u></b><br/><br/>`)
for (x = 1; x <= range; x++){
    table = num * x;
    document.write(`${num} X ${x} = ${table} <br/>`)
}

// if (parseInt === num && parseInt === range){
// document.write(`<b><u> Table of ${num} till ${range} : </u></b><br/><br/>`)
// for (x = 1; x <= range; x++){
//         table = num * x;
//         document.write(`${num} X ${x} = ${table} <br/>`)
//     }  
// }
// else{
//     document.write(`<b><u>You didn't enter any number to get table that's why browser shows table of 5 by default..!!</u></b><br/><br/>`)
//     for (x = 1; x <= 10; x++){
//         table = 5 * x;
//         document.write(`5 X ${x} = ${table} <br/>`)
//     }
// }

// Question # 06:
document.write("<h1>Question # 06:</h1>");
var sub1 = prompt("Enter first subject name:")
var marks1 = parseInt(prompt("Enter marks obtained in first subject..."))
var sub2 = prompt("Enter second subject name:")
var marks2 = parseInt(prompt("Enter marks obtained in second subject..."))
var sub3 = prompt("Enter third subject name:")
var marks3 = parseInt(prompt("Enter marks obtained in third subject..."))

var per1 = (marks1 / 100) * 100;
var per2 = (marks2 / 100) * 100;
var per3 = (marks3 / 100) * 100;
var totMarks = marks1 + marks2 + marks3;
var totper = per1  + per2 +per3; 

document.write(`<table>
<tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obt.Marks</th>
    <th>Percentage</th>
</tr>
<tr>
    <td>${sub1}</td>
    <td>100</td>
    <td>${marks1}</td>
    <td>${per1}%</td>
</tr>
<tr>
    <td>${sub2}</td>
    <td>100</td>
    <td>${marks2}</td>
    <td>${per2}%</td>
</tr>
<tr>
    <td>${sub3}</td>
    <td>100</td>
    <td>${marks3}</td>
    <td>${per3}%</td>
</tr>
<tr>
    <th></th>
    <th>300</th> 
    <th>${totMarks}</th>
    <th>${totper}%</th>
</tr>
</table><br/>`)
