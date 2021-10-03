function summation(number){

  return Array
  .from({length: 5}, (v, i) => i+1)
  .reduce((total,curr)=>total+curr);

  
}

console.log(
    summation(2)
);