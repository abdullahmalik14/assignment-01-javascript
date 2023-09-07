//Chapter 1 (Alerts)
//  Q no : 01
var firstName = "Abdullah";
alert("First name:" +" " + firstName);

var lastName ="Maalik";
alert("Last name:" +" " + lastName);

var email = "malikabdullahmalik14@gmail.com";
alert("Email: " + email);

var phoneNumber = "123-456-7890";
alert("Phone Number: " + phoneNumber);

var password = "********";
alert("Password: " + password);


//  Q no : 02
alert("You're learning JavaScript!");

//  Q no : 03
alert("Hello, this is a custom message!");



//Chapter 2 (Variables for string)
//  Q no : 01
var myVariableName;

//  Q no : 02
var myVariable;
myVariable = "This is a string assigned to myVariable.";

//  Q no : 03
var teamName = "Superstars";
alert("Our team name is: " + teamName);

//  Q no : 04
var bestMan = "Ahsan";
bestMan = "Moiz"; 


//Chapter 3 (Variables for numbers)
//  Q no : 01
var caseQty;

//  Q no : 02
caseQty = 144;

//  Q no : 03
var num = 9;

//  Q no : 04
var sum;
sum = 8 + 12;


//  Q no : 05
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;

console.log(orderTotal);
//order total is 110

//  Q no : 06
var myNumber = 10;
myNumber = myNumber + 5;

//Chapter 4 (Variable names Legal and Illegal)
//  Q no : 01
var productcost = 3.45;

//  Q no : 02
var NameOfBand;

//  Q no : 03
var myNumber = 42;

//  Q no : 04
var myFullName = "Abdullah Malik";

//  Q no : 05

//Legal variable list

//myVariable
//num123
//_privateVar
//camelCaseVar
//$money

//illegal variable list
//123num 
//my-variable 
//.num 
//-num
//for


//Chapter 5 (Math Expression I)

//  Q no : 01
//Name is modulus and it's symbol is %
//here is the example
var remainder = 10 % 3;

//  Q no : 02
var num = 20 % 6;
console.log(num);
//reminder is 2


//  Q no : 03
var largeNum = 1000 * 2000;
console.log(largeNum);
// Output is 2000000

//  Q no : 04
var var1 = 100;
var var2 = 50;
var result = var1 - var2;

console.log(result);
// Output is 50

//  Q no : 05

var value1 = 20;
var value2 = 7;

var Remainder =  value1 % value2;

console.log(Remainder); 
// Output is 6 (remainder when 20 is divided by 7)


//  Q no : 06
var number1 = 5;
var number2 = 7;

var result = number1 * number2;

alert("The result of multiplying " + number1 + " and " + number2 + " is: " + result);