const array =[1,5,2,6,7,8,9,10,11,12,13,14];

//Function That Return best Jumper Average
function bestAvgJump(arr){

    return Math.max(...arr);
}


//Function To calculate Jumper Average 
const avgJumper=(jumper)=>{
    let sum=0;
    let countNormalJumps=0;
    for(let i=0; i<jumper.length; i++)
        if(jumper[i]>-1){
            sum+=jumper[i];
            countNormalJumps++;
        }

    return (sum/countNormalJumps).toFixed(2);         
}


let avgJumperArray=[];
for(let i=0;i< array.length-2 ; i+=3)
    avgJumperArray.push(
    avgJumper(array.slice(i,i+3))
    );


console.log('Best Avg Jump :',bestAvgJump(avgJumperArray));
console.log('Longest Jump Is',Math.max(...array))