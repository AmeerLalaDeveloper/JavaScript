const button = document.querySelector('.btn');
const textArea=document.querySelector('#msg')
const alert=document.querySelector('.alert');



button.addEventListener('click', function(e){
    e.preventDefault()

alert.classList.remove('hidden');

if(textArea.value.length >= 100){
alert.classList.add('valid');
alert.textContent = 'Valid Input'
 setTimeout(function(){
    alert.classList.toggle('hidden');
 },2000) 
}


if(textArea.value.length<100){
  alert.classList.add('danger')
  alert.textContent = 'Invalid Input'
 setTimeout(function(){
    alert.classList.toggle('hidden');
 },2000) 
}
})
