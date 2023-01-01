//Checking For Leap Year
let year = (Math.floor(Math.random() *9000)+1000);
console.log("Year to be Checked For Leap Year is "+year);
if ((year % 4 == 0 &&  year % 100 != 0) || year % 400 == 0)
{
    console.log(year + " is a leap year");
}
else{
    console.log(year + " is not a leap year"); 
}