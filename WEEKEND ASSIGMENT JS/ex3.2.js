
function peopleOnBus(busArray){

    let people=0;
    for(let i=0;i<busArray.length;i++)
    {
        people+=busArray[i][0]-busArray[i][1]

    }
return people
}
console.log(
    peopleOnBus( [[5,0],[3,4]])
);
// // [get On , get Off]