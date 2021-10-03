function includeSeven(num){

    while(num>0){

        if( num%10==7)
        return true;

        num/=10;
    }
    return false;
}

function boom(num){

    for(let i=1;i<num;i++){
        
        if(includeSeven(i)&&i%7==0)
        console.log('BOOM-BOOM');
        else if(i%7==0)console.log('BOOM');
        else console.log(i);
        
        
    }
}
boom(18);