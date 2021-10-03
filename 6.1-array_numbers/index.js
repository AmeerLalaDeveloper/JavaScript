
const arr = [1,7,3,0,-5,7,3,9]; 


//Array Length
function arrayLength(arr){
    let length=0;
    for(let i=0;i!=undefined;i++){
        length++;


    }
    return length;    
}
//Array Sum
function arraySum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){

        sum+=arr[i];
    }
    return sum;
}
//Array Multiply
function arrayMultiply(arr){
    let mult=1;
    for(let i=0;i<arr.length;i++){

        mult*=arr[i];
    }
    return mult;
}



//Print All Array Elements
function printArr(arr) {
    let str = '';
    for (let i = 0 ; i < arr.length ; i++) {
        str += arr[i] + ' ';
    }
    return str;
}
//Print Sum
console.log('The Sum Of Elements :',arraySum(arr));
//Print Multiply
console.log('The Multiply Of Elements :',arrayMultiply(arr));

//Print Elements
console.log('Array :',printArr(arr));