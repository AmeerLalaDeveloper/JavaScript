const people = ["Greg", "Mary", "Devon", "James"];
//Print All Array Elements
function printArr(arr) {
    let str = '';
    for (let i = 0 ; i < arr.length ; i++) {
        str += arr[i] + ' ';
    }
    return str;
}
console.log(printArr(people));

//2. Write the command to remove "Greg" from the array.
people.shift();
// 3. Write the command to remove "James" from the array.
people.pop();
// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
// 5. Write the command to add your name to the end of the array.
people.push('Ameer');
/* 6. Using a loop, iterate through this array and after console.log-ing "Mary",
 exit from the loop.*/
 for(let i = 0; people[i-1]!='Mary'; i++) {
     console.log(people[i]);
 }
/* 7. Write the command to make a copy of the array using slice. The copy
should NOT include "Mary" or "Matt".*/
console.log(printArr(people));
let newArr=people.slice(2,people.length);
console.log(printArr(newArr));
// 8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf('Mary'));
/* 9. Write the command that gives the indexOf where "Foo" is located (this
     should return -1).*/
console.log(people.indexOf('Foo'));
// 10. Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth" 
console.log(printArr(people));
people.splice(2,1,'Elizabeth','Artie');
console.log(printArr(people));
/**11. Create a new variable called withBob and set it equal to the people 
array concatenated with the string of "Bob".
 */
let withBob=people.concat('Bob');
console.log(printArr(withBob));