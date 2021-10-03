const length=document.querySelector('#length')
const operator=document.querySelector('#operator')
const table=document.querySelector('.multi-table')
let lengthValue=10;
let operatorValue='+';

function createTable(operator){
let string=''
string='<table border=1px;><tr><td></td>'
for(let i=1;i<=lengthValue; i++){ string+=`<th style="font-weight:bold">${i}</th>`}
string+=`</tr><tr>`
for(let i=1;i<=lengthValue; i++){
    string+=`<td style="font-weight:bold">${i}</td>`
    for(let j=1;j<=lengthValue;j++){

        string+=`<td>${eval(i.toString()+operator+j.toString())}</td>`
    } 
    string+=`</tr>`

}
string+='</table>'
table.innerHTML=string;


}

createTable(operatorValue);

length.addEventListener('change',function(e) {
    lengthValue=e.target.value;
    if(lengthValue>=1&&lengthValue<=20)
    createTable(operatorValue);

})
operator.addEventListener('change',function(e) {
    operatorValue=e.target.value;
    console.log(operatorValue);
    if(
    operatorValue=='*'||
    operatorValue=='-'||
    operatorValue=='+'

    )
    createTable(operatorValue);
})
