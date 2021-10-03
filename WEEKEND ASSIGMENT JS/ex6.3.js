function organizeStrings(s1,s2){


return (s1+s2).split('').filter((item,idx,arr)=>arr.indexOf(item)==idx).sort((a,b)=>{
    
 if(a.toLowerCase()>b.toLowerCase())
 return 1;
 else if(a.toLowerCase()<b.toLowerCase())
 return -1;
 return 0;  
}).join('')


}
console.log(
organizeStrings( "xyaabbbccccdefww",
 "xxxxyyyyabklmopq")

);