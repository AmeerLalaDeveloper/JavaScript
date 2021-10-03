//Change Title Of First Li
const startLi=document.querySelector('.start-here');
startLi.textContent='main title'


//ADd Subtitle
const list=startLi.nextElementSibling.firstElementChild;
const subTitle=document.createElement('li');
subTitle.textContent='sub title 4'
list.appendChild(subTitle);
console.log(subTitle);


//Remove Last Child
list.removeChild(list.lastElementChild)



//Change Title 
document.title="Master Of The Dom"
console.log(document.title);

//change p Element
const para=document.querySelector('p')
para.textContent='GoodBye'