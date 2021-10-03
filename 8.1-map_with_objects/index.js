// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.

let obj1={
    name:"name1"
};
let obj2={
    name:"name2"
};
let obj3={
    name:"name3"
};
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
let map1=new Map();
map1.set(obj1,1)
map1.set(obj2,2)
map1.set(obj3,3)

// 3. Iterate over the Map object with the for..of loop.
// - log the name and id
for(let [key, value] of map1)
console.log(key.name ,value);