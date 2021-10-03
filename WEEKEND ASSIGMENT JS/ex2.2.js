function convertToInt(array){

    return array.map((item,idx)=>{

      let size=array.length;
      if(item==1)
      return Math.pow(2,size-idx-1)


    }).filter(item=>item>0)
    .reduce((total,curr)=>total+curr,0)
}
//return parseInt(arrray.join(''),2)

console.log(
    convertToInt([1,1,1,1,0,0])
);