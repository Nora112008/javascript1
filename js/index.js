/* 
JavaScript:
* Basics
-Variables
-Name : x
-Value: 5
-Datatype : Number
-address : jbit87tg7t75
-Datatypes
-Concatenate
-Operators
-Arithmetic
-Unary
-Assignment
-Comparison
-Logical
-Falsy value
* DOM Document Object Model
* BOM Browser Object Model
* LocalStorage
* Regex
*/


//loosely Datatype
// var x = 5;

// Strongly Datatype
// int x = 5;



/* kinds of Datatype */

// Number
// var x = 5;
// console.log(typeof x);


// String
// var x = "Mohamed Atya";
// console.log(typeof x);

//Boolean
// var x = false;
// console.log(typeof x);

// Undefined
// var x ; \ x = undefined;
//  console.log(typeof x);

// Object
// var x = { name : "Mohamed" , age : 25};
// x = null;
// console.log(typeof x);


// Function
// var x = function (){};
// console.log(typeof x);

// Array => Object
// var x = [10, 20, 30] ;
// console.log(typeof x);


// Arithmetic Operator ( + , - , * , / , ** , % )
// console.log(10 ** 2);

// Unary Operators ( ++ , -- , + , -)
// var x = 5;
// x++; => x = x + 1;

//postfix
// x++;
//prefix
// ++x;

// x = 5
// console.log(x++); => 5
// console.log(++x); => 6


// Assignment Operators(+= , -= , *= , ....)

// var x = 5; 
// x = x + 10;  =>  x += 10;


/* If Statement | If Condition
 if (false) {
  // Block of Code 
  // Scope
console.log("ok");
 } else if(true){

}else{
 console.log("no");
}*/

// Comparison Operators ( > , < , >= , <= , == , === , !=, !== , ...)
/* var  x = "15";
var y = 15;
if( x === y ){ // Value with Value and datatype with datatype .. both should be true to give me true as output
    console.log("ok");
}else{
    console.log("no");
}*/

/*var x = 6;

if ( x % 2 == 0 && x != 0){
    console.log("Even");
}else if (x == 0){
    console.log("Zero");
}else{
    console.log("Odd");
}*/

// Logical Operators(&& , || , !)
/*var x = 30;

if(x > 10 || x < 20){ // true AND false
console.log("ok");
}else{
    console.log("no");
}*/

// Falsy Value
/*console.log(false == false);
console.log(false == 0);
console.log(false == NaN );
console.log(typeof false == typeof 0);*/

/*var data = null;

// Old Code 
if (data === null || data === undefined){
    console.log("Default Value ");
}else{
    console.log(data);
}

console.log(data ?? "Default Value");*/


/*var data = false;

if(data == false || data == null || data ==="" || Number.isNaN(data)){
console.log("Default Value");
}else{
    console.log(data);
}

console.log(data || "Default Value");*/


// Conditional Operator 

var  x = 5;
if(x % 2 == 0){
console.log("Zero or Even");
}else{
console.log("Odd");
}                         
console.log((x % 2 == 0 && x != 0) ? "Even" : (x == 0) ? "Zero" : "Odd" );