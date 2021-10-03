const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];
   let i = 0,j=0;
   
        while(i<listOfNeighbours.length){
            j=0;
            let row=listOfNeighbours[i]
            while(j<row.length){
                console.log('Neighbour',row[j]);
                j++;
            }
            i++;
        }
   