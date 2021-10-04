const isGreaterThan10=(input)=>{
    return new Promise((resolve,reject)=>{

        if(input>10) 
            resolve('Resolved');
        else reject('Rejected');    

    })
}
isGreaterThan10(20).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})