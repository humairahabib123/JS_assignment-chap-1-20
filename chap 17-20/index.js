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

// Question # 04:
document.write("<h1>Question # 04</h1>")
var num = parseInt(prompt(`Enter a number to show it's Multiplication table`));
var range = parseInt(prompt(`Enter length multiplication table`));
document.write(`Multiplication table of ${num}<br/>`);
document.write(`length ${range}<br/><br/>`);
for (x = 1; x <= range; x++){
    table = num * x;
    document.write(`${num} X ${x} = ${table} <br/>`)
}