import {forms} from './form.js'
 const randForm=forms[Math.floor(Math.random()*4)]
 const gameBoard=document.querySelector('.game-board')
 let currentTool=null;
 let currentBox=null;
draw() ;
function draw(){
    for(let i=0; i<randForm.length; i++) {
        const div=document.createElement('div')
        div.classList.add('box')
    
        if(randForm[i]=='s')
            div.classList.add('sky')
        else if(randForm[i]=='c')
           div.classList.add('cloud')
        else if(randForm[i]=='w')
          div.classList.add('wood')
        else if(randForm[i]=='t')
            div.classList.add('tree');
        else if(randForm[i]=='o')
            div.classList.add('stone');
        else if(randForm[i]=='e')
            div.classList.add('water');
        else if(randForm[i]=='l')
            div.classList.add('land');
        else if(randForm[i]=='d')
            div.classList.add('dirt');
        gameBoard.append(div)
    }
    }

function updateCounter(box){
        let itemToUpdate=null;
        items.forEach(item=>{  
          const itemClass=item.className.split(' ')[1];
            if(itemClass==currentBox)
                itemToUpdate=item;
        })
        let currentAmount=parseInt(itemToUpdate.firstChild.textContent);
        currentAmount++;
        itemToUpdate.firstChild.textContent=currentAmount.toString();
}
function updateBox(box){
   
 if((currentBox=='wood'&&currentTool=='axe')
 ||(currentBox=='tree'&&currentTool=='axe')
 ||((currentBox=='dirt'&&currentTool=='shovel')
 ||(currentBox=='land'&&currentTool=='shovel'))
 ||((currentBox=='stone'&&currentTool=='pickaxe')))
    box.classList.remove(currentBox)
    box.classList.add('sky')
    updateCounter(box);
}
const tools=Array.from(document.querySelectorAll('.tool'))
tools.forEach(tool=>{
    tool.addEventListener('click',function(e){
        currentTool=this.className.split(' ')[1];
        document.body.style.cursor=url(`../img/${currenTool}.png`);
    })
  currentTool=null;
})

const boxes=document.querySelectorAll('.box')
Array.from(boxes).forEach(box=>{

    box.addEventListener('click',function(e){
        currentBox=this.className.split(' ')[1];
        updateBox(this);
    })
    currentBox=null;
})
const items=document.querySelectorAll('.item')