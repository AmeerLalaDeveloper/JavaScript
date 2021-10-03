const WORLD_POPULATION=7900;

function percentageOfWorld1(population){
    
    return (population/WORLD_POPULATION*100).toFixed(2);
}

const percentageOfWorld2=function(population){return (population/WORLD_POPULATION*100).toFixed(2)}

console.log(
percentageOfWorld1(23));
console.log(
percentageOfWorld1(21512512));
 console.log(
percentageOfWorld1(2312612));
console.log('\n\n');

console.log(
    percentageOfWorld2(23));
    console.log(
    percentageOfWorld2(21512512));
     console.log(
    percentageOfWorld2(2312612));
    
    
    