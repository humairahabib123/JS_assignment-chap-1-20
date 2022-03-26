//  Question # 01:
var arr = [];

//  Question # 02:
document.write("<h1>Question # 02</h1>")
var matrix= [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
document.write(matrix + "<br/>");

// Question # 03
document.write("<h1>Question # 03</h1>")
for(x = 1; x <=10; x++){
    document.write(`${x} <br/>`)
}

// // Question # 04:
// document.write("<h1>Question # 04</h1>");
// var num = parseInt(prompt(`Enter a number to show it's Multiplication table`));
// var range = parseInt(prompt(`Enter length multiplication table`));
// document.write(`Multiplication table of ${num}<br/>`);
// document.write(`length ${range}<br/><br/>`);
// for (x = 1; x <= range; x++){
//     table = num * x;
//     document.write(`${num} X ${x} = ${table} <br/>`)
// }

// Question # 05:
document.write("<h1>Question # 05</h1>");
fruits = ["apple", "banana", "mango","orange", "strawberry"];
for (i = 0; i < fruits.length; i++ ){
    for(j = 1; j < fruits.length; j++){
        document.write(`${fruits} <br/>`)
    }
}

for (x = 0; x < fruits.length; x++){
    document.write(`element at index ${x} is ${fruits} <br/>`)
}

// Question # 06:
document.write("<h1>Question # 06</h1>");
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
var revCounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
var even =  [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
var series =[ "2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"]

document.write(`<b> Counting: </b><br/><br/> ${counting}<br/><br/>`);
document.write(`<b> Reverse Counting: </b><br/><br/> ${revCounting}<br/><br/>`);
document.write(`<b> Even: </b><br/><br/> ${even}<br/><br/>`);
document.write(`<b> Odd: </b><br/><br/> ${odd}<br/><br/>`);
document.write(`<b> Series: </b><br/><br/> ${series}<br/><br/>`);