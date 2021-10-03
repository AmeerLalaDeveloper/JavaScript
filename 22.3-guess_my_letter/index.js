let letter=String.fromCharCode(Math.floor(Math.random()*26+1)+96)
const message=document.querySelector('.msg'),
 result=document.querySelector('.result'),
 pressedKeys=document.querySelector('.key-pressed'),
 h3=document.querySelector('h3'),
 guessedLetters=[],
 button=document.querySelector('button');
button.style.display='none'

function userGuess(e){
    e.preventDefault();
    let guessedKey = String.fromCharCode(e.keyCode).toLowerCase();
    
    if(!/[a-zA-Z]/.test(guessedKey)){
        message.textContent='Enter Valid Input'
        return;
    }
     if(guessedLetters.indexOf(guessedKey)>-1)
    {   
        message.textContent=`${guessedKey} has already been gussed!`
        return;
    }  
    if(guessedKey==letter){
        result.textContent=`${guessedKey}`;
        message.textContent='Right letter!'
        message.style.color='green';
        h3.textContent='Would you like to play again'
        pressedKeys.style.display='none'
        button.style.display='block'
    } 
    else {
        message.textContent='Nope,Wrong Letter'
    guessedLetters.push(guessedKey)
    }

    pressedKeys.textContent=guessedLetters.toString()

}
button.addEventListener('click', function(e){location.reload()})
window.addEventListener('keyup',userGuess)