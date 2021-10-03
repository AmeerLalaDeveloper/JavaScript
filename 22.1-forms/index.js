const submit=document.querySelector('form');
const information=Array.from(document.querySelectorAll('input'))
const labels=Array.from(document.querySelectorAll('label'))
//Function After  Submit
function submit_info(e){
e.preventDefault();

let string=''
for(let i=0;i<information.length;i++)

string+=labels[i].textContent +" "+information[i].value+"\n"

if(window.confirm(string))
    window.alert('congratulations you successfully sent this form')
}


submit.addEventListener('submit', submit_info)