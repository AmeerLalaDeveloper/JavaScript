function findUniq(array){
    // let flag=0;
    // for(let i=0;i<array.length-1;i++)
    // {
    //     flag=0;
    // for(let j=i+1;j<array.length;j++)
    //     if(array[i]==array[j])
    //     flag=1;

    //     if(!flag)
    //         return array[i]
    // }   
    // return '';

}
function odd2(arr) {
    let x = arr.sort((a, b) => a - b).slice();
    x.shift();
    if (Math.max(...x) == Math.min(...x)) {
        return arr[0]
    } else { return arr[arr.length - 1] }

}

console.log(
    findUniq([1,1,1,2])
);