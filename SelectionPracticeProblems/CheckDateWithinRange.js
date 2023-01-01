//Checking Day falls between a date or not
console.log("Check Whether day  is between March 20 and June 20");

let day=(Math.floor(Math.random() * 10)%31)+1;
let month=(Math.floor(Math.random() * 10)%6)+1;
console.log("Day is  "+day+" & Month is  "+month);
if ( day> 20 && day< 31 && month == 3 )
{
console.log("True");
}
else if ( day> 1 && day< 30 && month == 4 )
{
console.log("True");
}
else if ( day> 1 && day< 31 && month == 5 )
{
console.log("True");
}
else if ( day> 1 && day< 20 && month == 6 )
{
console.log("True");
}
else
{
console.log("False");
}