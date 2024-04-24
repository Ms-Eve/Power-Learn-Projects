let colors=['red', 'green','blue' ];
colors.push('black');
console.log(colors);
colors.shift();
let fromIndex = colors.indexOf('green');
let toIndex = 1;
colors.splice(toIndex, 0, colors.splice(fromIndex, 1)[0]);
console.log(colors);
colors.unshift('yellow');
console.log(colors);

//if else statement
let grade = "student's grade";

if(grade=='A'){
    console.log("You got an A, so here's a Chocolate for you");
}
else if(grade=='B'){
    console.log("You got an B, so here's a Cookie for you");
}
else if(grade=='C'){
    console.log("You got an C, so here's a Candy for you");
} else{
    console.log("No reward to give");
}

//loops
let j=10
for(let i=1 ; i<=j; i++){
    let str='';
    for(let x=1; x<=i; x++){
    str += '*';
}
console.log(str);
}

