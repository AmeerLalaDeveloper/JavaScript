const makeAllCaps=(words)=>{

    return new Promise((resolve, reject)=>{
        let newArr =words.reduce((start,value)=>{
            start.push( value.slice(0,1).toUpperCase()+value.slice(1));
            return start;
         },[]);

         if(newArr.length==0) 
         reject('Idiot');
         else
         resolve(newArr);
        

    });

}



const sortWords=(words)=>{

    return new Promise((resolve, reject)=>{

        let result= words.sort((a,b)=>{
                if(a.toLowerCase()>b.toLowerCase()) 
                return 1;
                else if(a.toLowerCase()<b.toLowerCase())
                return -1;
                return 0;
            })
            if(result.length==0) 
            reject('Idiot')
            else
            resolve(result)

    })

 }
makeAllCaps(['aa','bb','fff','ddd'])
.then((res)=>sortWords(res))
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
