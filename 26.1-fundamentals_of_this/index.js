// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
console.log(this);
//this.setTimeOut = window.setTimeOut
//Answer : 
//this will point to the global object/file 

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
 
 name: "Wajde",
 greet: function() {
 console.log(`Hello ${this.name}`);
 },
};
myObj.greet();
//Answer: 
//a. this will be undefined cause arrow funcitons doesnt have this keyword
//b.fix it by changing arrow function to regular function (function({})) 
//then this keyword will be refer to myObj

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log(this);
 };
 myFuncDec();
//Answer: 
//this will point to global this since struct mode not used function() wil not effect this function

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
 console.log(this);
};
myFuncArrow();
//Answer :
// this will be global cause function expression dont effect this


// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.


document.querySelector('.element').addEventListener('click',function (e) {
    
    console.log(this);
});
//Answer : 
// this will undefined since its an arrow (not epxression function)
//fix it by changing it to function(){}