const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];
function countLetters(arr){
    let obj={};
    let originalString=arr.join("").toLowerCase().match(/\w/gi);
    let filterdStr=originalString.filter((ele,idx,arr)=>arr.indexOf(ele)==idx);
    for(let i=0;i<filterdStr.length;i++)
    {   
        let key=filterdStr[i];
        obj[key]=0;
    }
   Object.keys(obj).forEach(key=>
      obj[key] = originalString.filter(ele=>ele==key).length
    )
   return obj
}
console.log(
countLetters(array)
);