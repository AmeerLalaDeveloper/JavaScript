function doubleValues(array){
    return array.map(item=>item*2)
}

function onlyEvenValues(array){
    return array.filter(i=>i%2==0)
}

function showFirstAndLast(array){

    if(typeof array[0]=='string'&&typeof array[array.length-1]=='string'){

        return [array[0],array[array.length-1]]
    }
    return []
}

    showFirstAndLast(['1',23,'15'])


function vowelCount(string) {{

    let vowelArray=string.split('').filter(i=>i=='i'||i=='o'||i=='e'||i=='a'||i=='u')
    // console.log(vowelArray);
   return vowelArray.reduce((obj,currentVal)=>{
    
        obj.hasOwnProperty(currentVal)
        ?obj[currentVal]++
        :obj[currentVal]=1
        return obj}
    ,{})

   
}}

vowelCount('abanvuiqwuoans')


function capitilized(string){
    return string.toUpperCase();
}
function  shiftLetters(string){

   return string.split('').map(item=>{
        if(item=='a')
        return 'z'
        item=String.fromCharCode(item.charCodeAt(0)-1);
        return item
    }).join('');
   
}

shiftLetters('asohasogh')


function swapCase(string){

    return string.split(' ').map((item,idx)=>{
        if(idx%2) 
        item=item.toUpperCase()

        return item
    })

}
swapCase('im the best programmer on earth')