function nb_year(p0,percent,aug,p)
{   let population=p0+(p0*((percent/100))   )+aug;
    if(parseInt(population)>=p)
    return 0;
     let year=1;
     
    while(population<p){
        year++;
        population=parseInt(population+(population*(percent/100))+aug)
       

    }
    
    return year
}
console.log(
    nb_year(100000, 2, 50, 1213) 
);