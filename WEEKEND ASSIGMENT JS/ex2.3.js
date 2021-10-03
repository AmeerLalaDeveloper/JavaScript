function findNexSquare(number){

    let currNum=Math.sqrt(number);
    if(currNum%1!=0)
    return -1;

    return (currNum+1)*(currNum+1)
    

}

console.log(

    findNexSquare(121)
);