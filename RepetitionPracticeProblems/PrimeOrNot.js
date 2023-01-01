"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter number :");
CheckPrime(number);
function CheckPrime(numberCheck){
    let primeFlag=1;
    for (let i = 2; i<=numberCheck/2 ; i++)
    { 
        if (numberCheck % i == 0)
        {
            primeFlag = 0;
            break;
        }
    }
    if (primeFlag == 1){
        console.log(number +" is a Prime Number")
    }
    else{
        console.log(number +" is not a Prime Number")
    }
}