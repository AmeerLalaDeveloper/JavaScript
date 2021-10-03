function shortestWords(words){

    return Math.min(...words.split(' ').map(item=>item.length))
}


console.log(
shortestWords('ameer lala the boss')

);