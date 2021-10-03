function shortestWords(words){

   let maxLen= Math.max(...words.split(' ').map(item=>item.length))

   let array=[];
    words.split(' ').forEach(item=>{if(item.length==maxLen)
    array.push(item)})

    return array
}


console.log(
shortestWords('ameer lala the bosss ')

);