"use strict";

const ps = require("prompt-sync");
const prompt = ps();

let number = prompt("Enter number  :");
console.log("Harmonic series: ");
let HarmonicSum=0;
for (let i= 1; i<=number ; i++)
{
  let HarmonicNumber = (1/i);
  console.log(HarmonicNumber);
  HarmonicSum +=HarmonicNumber;
}
console.log("Sum Of Harmonic Series : "+HarmonicSum);