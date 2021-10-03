function toCamelCase(string){

    return string.split(/-|_/).map((item,idx)=>{
        if(idx>0)
        item=item.charAt(0).toUpperCase()+item.slice(1)
        return item
    }).join('')
}

console.log(
    toCamelCase("the-stealth-warrior")
);