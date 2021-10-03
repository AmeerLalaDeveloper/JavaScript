function steps(numberOfSteps){
    let string=''
    for (let row=0; row<numberOfSteps; row++){
        
        if(row>0)
        string+='\n'
        for(let hashtag=0;hashtag<row+1;hashtag++) string+='#'
        for(let space=numberOfSteps-row-1;space>0;space--)string+=' '
        
    }
    return string
   
}

console.log(
    steps(4)
);