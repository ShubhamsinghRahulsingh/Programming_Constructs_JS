//Unit Conversion

//5.a(Given 1 feet=12 inch)
function InchToFt(valueInInch){
    return valueInInch/12;
}
let InFoot = InchToFt(42);
console.log("42 Inches into Feet is  "+InFoot);

//5.b & 5.c
function ftToMtr(valueInFeet){
    return valueInFeet/3.281;
}
let area = ftToMtr(60) * ftToMtr(40);
console.log("Area Of Plot(60ft*60ft) in sq meters is "+ area);

function SqMtrToAcre(sqMeterValue){
    return sqMeterValue/4047;
}
console.log("Ares in Acres :" +SqMtrToAcre(area));