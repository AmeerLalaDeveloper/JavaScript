function maskify(cardNumber){

    if(cardNumber.length<=4)
        return cardNumber

   return '#'.repeat(cardNumber.length-4)+cardNumber.slice(cardNumber.length-4)     

}

console.log(
    maskify('4556364607935616')
);