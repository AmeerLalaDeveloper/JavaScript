let arr=new Array(100);
/* 1. Fill an array with 100 of a same object using array fill
 method.*/
console.log(arr.fill(100,0,100));

/* 2. Create an array with numbers ranging from 1-100 using
 the Array.from method.*/
 console.log(Array.from({length:100},(v,i)=>i+1));
// 3. Convert only values of an object into one array.
const obj={name:'ameer',age:'23'};
let arr2=[];
for(key in obj) {arr2.push(obj[key]);}
console.log(arr2);
// 4. Convert an array into one object.
Object.assign({},arr2);
// 5. Find out if an array is an array.
console.log((Array.isArray(arr2)));
// 6. Copy an array.
/* • Create a copy of an array that won’t effect the original
 array if modified.*/
 let arr3=[]
 let arr4=[9,5,6,7,8,9,10,11,12]
 arr3=arr3.concat(arr4);
 arr3=arr4;
/* • Create a copy of an array that will effect the original
array if modified.*/