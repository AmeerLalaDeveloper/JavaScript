function countingDuplicates(string){


let obj=string.split('').reduce((obj,curr)=>{
    if(obj[curr])
    obj[curr]++
    else obj[curr]=1;
    return obj
},{})
let counter=0;
for(let key in obj)
    if(obj[key]>1)
    counter++

return counter
}

console.log(

    countingDuplicates('abcajbcakj')
);