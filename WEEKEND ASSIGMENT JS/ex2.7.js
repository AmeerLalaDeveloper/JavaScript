function mathOperation(operation,val1,val2){

   switch(operation){

    case '/':return val1/val2;
    case '*':return val1*val2;
    case '+':return val1+val2;
    case '-':return val1-val2;
   }

   //return eval(val1+opearion+val2)

}
// function odd2(arr) {
//     let x = arr.sort((a, b) => a - b).slice();
   
//     x.shift();
//     if (Math.max(...x) == Math.min(...x)) {
//         return arr[0]
//     } else { return arr[arr.length - 1] }

// }

console.log(

    mathOperation('+',15,16),
    odd2([1,1,1,0])
);