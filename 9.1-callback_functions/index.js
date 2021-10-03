const isString=(str,callback)=>{
    if(typeof str === 'string')
        callback(str);

}
const firstUpperCase = (str,dash)=>{
    let firstWord=str.split(' ')[0].toUpperCase()
    str=firstWord+str.slice(firstWord.length)
    dash(str);
}
//print Callback Function
const print = (val)=>console.log(val);
//Dash Callback Function
const dash=(val)=>{
   console.log(val.split(' ').join('-'));
}

  
    isString('Ameer',(print)),
    firstUpperCase('Ameer Lala',dash)
