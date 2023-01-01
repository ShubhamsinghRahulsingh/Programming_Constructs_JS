//Find Max & Min out of 5 Random 3 Digit Numbers
let number1 = Math.floor(Math.random()*900)+100;
let number2 = Math.floor(Math.random()*900)+100;
let number3 = Math.floor(Math.random()*900)+100;
let number4 = Math.floor(Math.random()*900)+100;
let number5 = Math.floor(Math.random()*900)+100;
console.log("Numbers to be compared are "+ number1,number2,number3,number4,number5);

//For finding Max Number
if(number1>number2 && number1>number3 && number1>number4 && number1>num5){
    console.log(number1 + " is maximum number");
}
if(number2>number1 && number2>number3 && number2>number4 && number2>number5){
    console.log(number2 + " is maximum number");
}
if(number3>number1 && number3>number2 && number3>number4 && number3>number5){
    console.log(number3 + " is maximum number");
}
if(number4>number1 && number4>number2 && number4>number3 && number4>number5){
    console.log(number4 + " is maximum number");
}
if(number5>number2 && number5>number3 && number5>number4 && number5>number1){
    console.log(number5 + " is maximum number");
}
//For finding Min Number
if(number1<number2 && number1<number3 && number1<number4 && number1<number5){
    console.log(number1 + " is minimum number");
}
if(number2<number1 && number2<number3 && number2<number4 && number2<number5){
    console.log(number2 + " is minimum number");
}
if(number3<number1 && number3<number2 && number3<number4 && number3<number5){
    console.log(number3 + " is minimum number");
}
if(number4<number1 && number4<number2 && number4<number3 && number4<number5){
    console.log(number4 + " is minimum number");
}
if(number5<number1 && number5<number3 && number5<number4 && number5<number1){
    console.log(number5 + " is minimum number");
}