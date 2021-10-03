function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    }

    Pokemon.prototype.callPokemon=function(){
        console.log(`I Choose You ${this.name}`);
    }
    Pokemon.prototype.attack=function(val=0){
        if(this.attackList[val])
        console.log(`${this.name} used ${this.attackList[val]}`);
        if(this.attackList.length==0)
            console.log('No Attack Move Was Used');
    }
const pokemonAttackList=['Fire','Water','Rock']  
 const pokemon1=new Pokemon('Ameer', 'Fly', pokemonAttackList)   
 const pokemon2=new Pokemon('AmeerLala', 'Snake', pokemonAttackList)   
 const pokemon3=new Pokemon('AmeerLalaPokemon', 'Animal', pokemonAttackList)   

pokemon1.callPokemon()
pokemon2.callPokemon()
pokemon3.callPokemon()
pokemon1.attack(2)
pokemon2.attack(1)
pokemon3.attack(0)