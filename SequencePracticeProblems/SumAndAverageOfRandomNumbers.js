//Calculate Sum and Average of 5 Random 2 Digit Number
let number;
let totalSum = 0;
let totalRandommNumbers = 5;
for(let i = 0; i < totalRandommNumbers; i++){
    number = Math.floor(Math.random()*100);
    totalSum = totalSum + number;
}
let average = totalSum / totalRandommNumbers;
console.log("Sum Of Five Random Numbers : " +totalSum +"\n"+"Average of Five Random Numbers : "+average);