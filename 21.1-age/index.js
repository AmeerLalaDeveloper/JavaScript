const button=document.querySelector('.btn')
const input=document.querySelector('.input')
const msg=document.querySelector('.msg')
msg.textContent=''
button.addEventListener('click', function(e) {
    let val=Number(input.value);
    if(val)
        {
            if(val>=18)
                msg.textContent='You can drink appear'    
            else msg.textContent='Your\'e too young'

        }
    else     msg.textContent='Invalid Input'
})