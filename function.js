// function -input ->parameter
// -->some code is written
//--> return value

// call function ->argument

function greetuser(name){
    console.log(name);
}

greetuser("juliet");
greetuser("josephine");
greetuser("jane");

function square(num){
    let result = num *num
    return result;
}
let value1 =square(8);
let value2 =square(12);
console.log(value1);
console.log(value2);

function convertToCelsius(fahrenheit){
    let celsius =((fahrenheit-32)*5) /9;
    return celsius;
}
let tempOne =convertToCelsius(212);
console.log(tempOne)

function add(a,b,c){
    let result = a+b+c;
    return result;
}
let sumNumbers =add(4,5,6);
console.log(sumNumbers);


function minus(a,b){
    let result =a-b;
    return result;
}
let substract1=minus(10,6);
console.log(substract1);

function getScoreText(name , score){
    return `Name: ${name} - Score${name}`;
}
let ScoreData = getScoreText("juliet", 67);
console.log(ScoreData);

function myplace(town, country){
    return `I come from ${town}, ${country}`;
}
let Place =myplace("Mombasa");
console.log(Place);

