const input=document.querySelector('#myInput');
const button=document.querySelector('.btn')
const container=document.querySelector('.container')
//   <img src="./480px-Smiley.svg.png" alt="" />
function createImages(e){
    e.preventDefault();
    const imagesNumber=input.value;
    for(let i=0; i<imagesNumber;i++)
    {
        container.innerHTML+=`<img src="./480px-Smiley.svg.png" alt="" />`

    }


}
function checkValidation(e){

    const number=Number(e.target.value);
    if(!number){
        alert('Invalid Input')
        e.target.value=''
        return;
    } 
}
input.addEventListener('input',checkValidation);
button.addEventListener('click',createImages);