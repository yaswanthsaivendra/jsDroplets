





// 1. ways to print in javascript
// console.log("hello world");
// alert("Hello world");
// document.write("Hello world");

// 2. javascript console api
// console.log("Hello world", 5+4, 5*4, "one more log");
// console.warn("this is a warning");
// console.error("this is an error");
// console.assert(4==(6-2)); // this is an assertion







//Reference data types

//objects              collection of key-value pairs
/*
var marks={
    sai=55,
    yash=99,
    vendra=44
};
console.log(marks);
*/

//arrays
// var arr= [1,2,"string",4,5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);











//functions
/*
function avg(a, b) {
    c = (a + b)/2;
    return c;

}
*/
// c1 = avg(4, 16);
// c2 = avg(14, 16);
// console.log(c1, c2);

//conditionals in Javascript
var age = 30;
//single if statement
/*
if(age > 18){
    console.log("You are eligible");
}
*/
//if else
/*
if(age > 18){
    console.log("You are eligible");
}
else{
    console.log("You are not eligible");
}
*/
//if else if
/*
if (age > 18) {
    console.log("You are eligible");
}
else if(age<=0){
    console.log("Enter the correct age");
}
else{
    console.log("You are not eligible");
}
*/

//Loops

// For Loop
var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);

// }


/*
let is the new way to define variables
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.
Therefore using let is preffered and leads to better memory management.
*/
// let j=0;
// to define a constant
//const a = 0;

// While loop
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do while loop
// do {
//     console.log(arr[j]);
//     j++;
// } while (j<arr.length);

//we can asually use "break;" and "continue;" statements in loops

//Array methods
// let myArr = ["sai", "fan", 34, null, true];
// console.log(myArr.length);
// myArr.pop();        //removes an element from the end of the array.
// console.log(myArr);
// myArr.push("yash");  //adds an element to the end of the array.
// console.log(myArr);
// myArr.shift();       //removes an element from the start of the array.
// console.log(myArr);
// myArr.unshift("yash");  //adds an element to the start of the array.
// console.log(myArr);

//Strings Methods in Javascript
// let myStr = "yash is a good boy";
// console.log(myStr.length);
// console.log(myStr.indexOf("good"));   //returns the start index of this word
// console.log(myStr.lastIndexOf("good")); //returns the end index of this word.
// console.log(myStr.slice(0,4));  //returns the sliced part start form first argument to one less than the second argument. Here in our case it retruns-->> yash
// console.log(myStr.replace("good", "bad")); //replace the first occurence of the word.


//DOM(Document Object Model) Manipulation
//selecting an element using id
// let elem = document.getElementById('nodejs');
// console.log(elem);
// //selecting elements with a class
// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// //accessing each elemnt with that class using indexing.
// elemClass[0].style.background = 'yellow';
// //we can add and remove a class to a particular element.
// elemClass[1].classList.add("bg-primary");
// elemClass[1].classList.remove("bg-primary");
// //we can access the innerHTML and innerTEXT of a element.
// console.log(elemClass[1].innerHTML);
// console.log(elemClass[1].innerText);
// //we can select an element using tag name
// let tn = document.getElementsByTagName('h1');
// console.log(tn);
// //we can create an element
// let createdElement = document.createElement('p');
// createdElement.innerText= "this is a created para";
// //and append it as a child element to other element.
// tn[0].appendChild(createdElement); //indexing 0 is used to mention that it is the first h1 tag element of 'tn'.
// let createdElement2 = document.createElement('b');
// createdElement2.innerText = "this is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);

//selecting using Query
// sel = document.querySelector('.container');  //selects the first element with container class.
// console.log(sel);
// sel = document.querySelectorAll('.container'); //selects all elements with container class.
// console.log(sel);

//Events in Javascript
//we can directly select any class or id.
//in addEventListener, first parameter is event and second parameter is function that has to perform some action.
// nodejs.addEventListener('click', function(){
//     console.log('clicked on container');
// })
// nodejs.addEventListener('mouseover', function(){
//     console.log("mouse on container");
// })
// nodejs.addEventListener('mouseout', function(){
//     console.log("Mouse out of container");
// })
// nodejs.addEventListener('mouseup', function () {
//     console.log("Mouse up when clicked on container");
// })
// nodejs.addEventListener('mousedown', function () {
//     console.log("Mouse down when clicked on container");
// })

// Arrow fucntions
/*  general way to define a function but we can achieve the same thing using arrow functions.
function sum(a, b) {
    return a+b;
}
*/
summ = (a,b)=>{
    return a+b;
}

//setTimeout and setInterval---->>>>
// logkaro = ()=>{
//     console.log("I am your log");
// }
// //function will process after the particular timeout.
// setTimeout(logkaro, 2000); //here 1st parameter is function and second parameter is time in millisecs.
// //if we want to do this repeatedly at a paricular interval then
// setInterval(logkaro, 2000);
//we can use clearTimeout()/clearInterval to stop setTimeout()/setInterval()
// clr=setTimeout(logkaro, 2000);
// clearTimeout(clr);

