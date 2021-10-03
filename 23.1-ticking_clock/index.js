const h=document.querySelector('.hours')
const m=document.querySelector('.minutes')
const s=document.querySelector('.seconds')
setInterval(function(){
    h.textContent=('0'+new Date().getHours()).slice(-2);
    m.textContent=('0'+new Date().getMinutes()).slice(-2);
    s.textContent=('0'+new Date().getSeconds()).slice(-2);

},1000)
