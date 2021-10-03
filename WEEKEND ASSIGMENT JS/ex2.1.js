function sumLowest(array){

  array=array.sort((a,b)=>a-b)
  return array[0]+array[1]
  

}
console.log(

sumLowest([19, 5, 42, 2, 77])
);