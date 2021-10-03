const calculateAverage=(grades=>
    
   (grades.reduce((acc,curr)=>acc+curr,0)
    /grades.length).toFixed(2)
);
let mike=calculateAverage([123,66,99]);
let john=calculateAverage([190,120,100]);
let mary=calculateAverage([190,120,100]);
console.log(mike,john,mary);

if(Math.max(mike,mary,john)===mike)console.log('Mike WIth Highest Avg'); 
if(Math.max(mike,mary,john)===john)console.log('John WIth Highest Avg'); 
if(Math.max(mike,mary,john)===mary)console.log('Mary WIth Highest Avg'); 
else
console.log('Draw'); 


