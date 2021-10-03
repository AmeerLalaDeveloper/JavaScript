const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
   }
   //The function should return the candy element with the specified id
function getCandy(candyStore, id){
    //your code

    
        let objArr=candyStore.candies;
        for(let key in objArr){
            if(objArr[key].id==id)
                return objArr[key];
        }

    }
console.log(getCandy(candyStore,'as12f'));

//The function should return the price (number) of the candy with the specified
function getPrice(candyStore, id){
        //your code
        let objArr=candyStore.candies;
        for(let key in objArr){
            if(objArr[key].id==id)
                return objArr[key].price;
        } 
    }

 console.log(getPrice(candyStore,'as12f'));


function addCandy(candyStore, id, name, price){
        //your code
        candyStore.candies.push({id:id,name:name,price:price,amount:1});

 }
        
 function buy(candyStore, id){
            //your code
            let objArr=candyStore.candies;
            for(let key in objArr){
                if(objArr[key].id==id)
                    {
                        
                        objArr.cashRegister+=objArr[key].price ;
                        objArr[key].amount--;
                    }
            } 
}