function isOrgam(string){

return string.split('')
.filter((item,idx,arr)=>arr.indexOf(item)!=idx)
.length==0?true:false
}

console.log(

    isOrgam('aba')
);