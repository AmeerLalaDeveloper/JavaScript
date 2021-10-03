let array=[1,200,3,4,5,6,7,8,9,10,11,12]

let avg=array.reduce((total,currentVal)=>total+currentVal,0)/3
console.log('average : ',avg);
let max=array.reduce((prev,current)=> Math.max(prev,current))
console.log('Max : ',max);
let sumOfEven=array.reduce((prev,current)=>{
    if(current%2==0)    
    prev+=current
    return prev
},0)
console.log('Sum Of Even : ',sumOfEven);