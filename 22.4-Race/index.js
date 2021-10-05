const race_1=document.querySelector('#player1-race')
const race_2=document.querySelector('#player2-race')
const raceLength=race_1.children.length;
let currentPosition=0;


function playerUpdate(race){
    
const playerRace=Array.from(race.children)
currentPosition=0;
for(let i=0;i<playerRace.length; i++)
    if(playerRace[i].className=='active')
        currentPosition=i

if((currentPosition+1)<(raceLength-1)){
        race.children[currentPosition].classList.toggle('active')
        race.children[currentPosition+1].classList.toggle('active')
}
else {
    location.reload()
    alert(`Player ${race.id.match(/\d/)} Won`)
  
}



}
window.addEventListener('keyup',function(e){

    if(e.keyCode==39){
      playerUpdate(race_1);
 
        return;
    }
    else
        playerUpdate(race_2);
       
    
})