const checkBox=document.querySelector('#check');
const image=document.querySelector('img');

function isChecked(e){

    if(e.target.checked)
        image.style.display="block";
    else  image.style.display="none";
}

checkBox.addEventListener('change',isChecked)