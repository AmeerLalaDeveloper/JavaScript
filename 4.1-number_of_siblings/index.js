const log=console.log;
let numSiblings=this.prompt("How many siblings do you have?");

if(numSiblings==1)
log('1 sibling');
else if(numSiblings>1)
log('more than 1 siblings');
else log('no siblings');



/**
 * 
 * === Check Value And Type In THis Case Its Not Equal Cuz prompt Value is String
 * 
 * TO Change it let numSiblings=parseInt(this.prompt("How many siblings do you have?"));
 * We Get Input AS Integer
 */
