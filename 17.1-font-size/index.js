const text=document.querySelector('p');
const decrease=document.querySelector('.decrease')
const increase=document.querySelector('.increase')
let size=6;
const limit=100


const font_Size=(e)=>{
    
    if(e.target.textContent=='+'&&size<limit){
        size+=4
        text.style.fontSize=size+"px"

    }
    if(size>=6&&e.target.textContent=='-'){
        size-=4;
     text.style.fontSize=size+"px"    

    }
}
decrease.addEventListener('click',font_Size)
increase.addEventListener('click',font_Size)
