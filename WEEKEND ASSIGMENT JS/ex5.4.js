function toWeirdCase(string){

return string.split(' ').map(item=>{

   return item.split('').map((item,idx)=>{
    if(idx%2==0)
    return item.toUpperCase()

    return item
    }).join('')
}).join('')

}

console.log(
    toWeirdCase('String'),
    toWeirdCase('Weird string case')
);