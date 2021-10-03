const result=document.querySelector('.result');
const inputs=Array.from(document.querySelectorAll('input'));
const button=document.querySelector('.verify');
button.addEventListener('click',function(e) {
    result.innerHTML=''
    for(let input of inputs) {
    result.innerHTML += input.value
       input.value='' 
    }
})
for(let i=0; i<inputs.length-1; i++) {
    let input=inputs[i]
input.addEventListener('keyup',function(e) {
    if(e.target.value.length > 0)
    e.target.nextElementSibling.focus()
})



}

inputs[0].addEventListener('paste',function(e){
    
    if(e.clipboardData.getData('text').length==6){
    for(let i=0; i<inputs.length; i++) {
        let input=inputs[i];

     input.value = e.clipboardData.getData('text')[i]
 
    }
}
else alert("Please Enter 6 Digits Only")
 })

