const myCountry={

    country:'Germany',
     capital:'Munich',
      language:'Duetch',
       population:'100m'
, neighbours :[1,2,3],
describe:function(){
    return `${this.country} has ${this.population} people, their mother tongue is ${this.language},they 
have ${this.neighbours.length} countries and a capital called ${this.capital}`},

checkIsland:function(){
    
    this.neighbours.length>1?this.isIsland=true:this.island=false;
    return this.isIsland;
}
}

console.log(myCountry.describe());
console.log(myCountry.checkIsland());