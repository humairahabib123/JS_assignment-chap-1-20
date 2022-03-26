// // Question # 01:
// var arr = [, , , , ,];

// // Question # 02:
// var arr2 = [];

// // Question # 03:
// var strArr = ["sadiqa", "humaira", "Tazmeen", "Yuman", "Hoor"];

// // Question # 04:
// var intArr = [1, 3, 7, 4, 6, 9, 2];

// // Question # 05:
// var intBolean = [true, false];

// // Question # 06:
// var mixArr = ["sadiqa", 9, "humaira", 7, "Tazmeen", 5, "Yuman", true, "Hoor"]

// // Question # 07:
// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write(`${qual}<br/>`)

// // Question # 08:
// var names = ["Michael","John","Tony"];
// var marks = [320, 230, 480];

// // Question # 09:
// var colors = ["Yellow", "Brown", "White"];
// document.write(`${colors} <br/>`);

// //a
// var begColor = prompt(" what color do you want to add to the beginning of the array?\n");
// document.write(`Adding ${begColor} at the end<br/>`)
// var updated = colors.unshift(begColor);
// document.write(`${updated} <br/>`);

// //b
// var endColor = prompt(" what color do you want to add to the end of the array?\n");
// document.write(`Adding ${endColor} at the biginning<br/>`)
// var updatedEnd = colors.push(endColor);
// document.write(`${updatedEnd} <br/>`);

// //c
// var newColor = updatedEnd.unshift("mergenta", "Orange");
// document.write(`${newColor} <br/>`);

var colors = ["Red", "Green", "Blue"];
document.write(colors + "<br/><br/>");

// a.
var a = prompt("What color do you want to add to the beginning?");
document.write(`<b> Adding ${a} at the beginning </b><br/>`)
colors.unshift(a);
document.write(colors + "<br/><br/>");

// b.
var b = prompt("What color do you want to add to the end?");
document.write(`<b>Adding ${b} at the end </b><br/>`)
colors.push(b);
document.write(colors + "<br/><br/>");

// c.
document.write(`<b>Adding two more colours at the beginning of Array:</b><br/>`)
colors.unshift("Pink", "Orange");
document.write(colors + "<br/><br/>");

// d.
document.write("<b>delete first colour of Array</b><br/>")
colors.shift(0);
document.write(colors + "<br/><br/>");

// e.
document.write("<b>delete last colour of Array</b><br/>")
colors.pop();
document.write(colors + "<br/><br/>");

// f.

var f = prompt("What color do you want to add?");
var i = parseInt(prompt("Give the position of color where you want to display your colour: "));
document.write(`<b>add the ${f} to desired position/index.</b><br/>`) ;
colors.splice(i, 0, f);
document.write(colors + "<br/><br/>");


// g

var g = prompt("at which index you want to delete color(s)?");
var h = prompt("how many colors you want to delete ?");
document.write(`<b>delete  ${h} colour(s) from index ${g}</b><br/>`) ;
colors.splice(g, h);
document.write(colors + "<br/>");

// // Question # 10:
// var scores = [320, 230, 480, 120]
// var ordered = scores.sort();
// document.write(`Scores of Students: ${scores}<br/>`)
// document.write(`Ordered Scores of students: ${ordered}<br/>`);

// // Question # 11:
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selected = cities.slice(2, 4);
// document.write(`Cities List: ${cities}<br/>`)
// document.write(`Selected Cities List: ${selected}<br/>`);

// // Question # 12:
// var arr = ["This", "is", "my", "cat"];
// var joint = arr.join(' ');
// document.write(`Array: ${arr}<br/>`)
// document.write(`String: ${joint}<br/>`);

// // // Question # 13:
// // var devices = ["Keyboard", "mouse", "printer", "monitor"];

// // Question # 14:


