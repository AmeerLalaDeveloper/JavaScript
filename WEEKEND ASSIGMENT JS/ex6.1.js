function mumbling(string){
  
    return string.split('').map((item,idx)=>item.toUpperCase()+item.repeat(idx)

    
    )
}

console.log(

    mumbling('abc')
);