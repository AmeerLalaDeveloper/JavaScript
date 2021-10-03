const stop_watch=document.querySelector('.clock')
const start=document.querySelector('.start')
const stop=document.querySelector('.stop')
let obj;
let counter=0;
let miliseconds=0;
let seconds=0;
let minutes=0;

function startTimer(e){


e.preventDefault();
stop_watch.textContent=''

start.disabled=true;

//counter=0;

obj=setInterval(()=>{

    counter++;
    miliseconds=('0'+(counter%100).toString()).slice(-2);
    seconds=('0'+parseInt(counter/100%60).toString()).slice(-2);
    minutes=('0'+parseInt(counter/100/60).toString()).slice(-2)
    stop_watch.textContent=minutes+' : '+seconds+' : '+miliseconds
},10)

}


function stopTimer(e){

clearInterval(obj)
start.disabled=false;
}
start.addEventListener('click',startTimer)
stop.addEventListener('click',stopTimer)