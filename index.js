// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let firstName = "Aahana";
let lastName = "Singh";
console.log(`${firstName} ${lastName}`)
let arr = ['Kuldip','Aahana',3,14,'zebra',56,7];
let arr1 = [...arr];
arr1.pop(9);

let test = NaN;

console.log(Boolean(test));
console.log(arr1.sort());

function Person (age) {
  this.age = age
  const getAge = () => {
  console.log('age', this.age) // 25
  return this.age
}
  return {
    getAge
  }
}
const Myke = new Person(25);
console.log(Myke.getAge()); 


const vegetables = (name, colour) => {
  console.log(arguments); // Object {0: "carrot", 1: "orange"}
};
vegetables('carrot', 'orange');


appDiv.innerHTML = `<h1>JS Starter</h1>`;

const appID = document.getElementById('app');

appID.innerHTML = `<p> A Paragraph </p>`;

for (let i = 0; i < 5; i++) {
 fetch('https://swapi.co/api/people/1')
 .then(resp => {
 console.log(i); // 5
 })
}


function multiply(...nums){
  let total = nums.reduce((x,y) => x*y);
  console.log("value",total);
}

multiply([]);

let aahana = (...x) =>{ 
  console.log("x",x);
   let sum =  x.reduce((a,b) => a+b);
    console.log("sum",sum);
    return sum;
};

let suhana = console.log(aahana(2,3,4));

let arr2 = [3,4,5,6,7];

console.log(arr2.includes(30))

import {data} from './practice.js';

let myData = [...data];

myData.push(9);
console.log(data);
console.log(myData);

let smapleSet = new Set([1,1,2,3,4,4]);
console.log(smapleSet);


function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope()

const object1 = {
  name : "Kuldip",
  location : "Pune"
}
//let object2 = Object.freeze(object1);
console.log(object1);
//object2.name = "Aahana";
//console.log(object2);

let value3 = 7.86;

console.log("Number ", Number.parseInt(value3));

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6)

console.log(7.01 % 7===0)


const arr1 = [7,-23,76.89,23,-0.67,0.01];

const sqauredArr = arr1.filter(data => data>0 && ((data % Number.parseInt(data))===0)).map(data => data*data);
console.log(sqauredArr)


let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  let arr3 = [];
  arr3.push(a);
  arr3.push(b);
  console.log("Arr3", arr3);
  b = arr3[0];
  a = arr3[1];
  console.log("b", b);
  // change code above this line
})();
console.log("A:" , a); // should be 6
console.log(b); // should be 8
