const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
   ];

   function getNames(data){
    return data.map(item=>item.name)
   }
   console.log(getNames(data));

   function groupByYear(data){

    return data.filter(item=>
    parseInt(item.birthday.split('-')[2])<1990
   )

   }
   console.log(
       groupByYear(data)
   );


   
function foodCategory(array) {{

    
   
   return array.reduce((obj,currentVal)=>{
    
        obj.hasOwnProperty(currentVal)
        ?obj[currentVal]++
        :obj[currentVal]=1
        return obj}
    ,{})

   
}}
   function getDiffFoods(data){
    let allFoods=[]   
    data.map(item=>{

        item.favoriteFoods.meats.forEach(meat=>allFoods.push(meat))
        item.favoriteFoods.fish.forEach(fi=>allFoods.push(fi))
      
       })

      return foodCategory(allFoods)
 
    
   }
   console.log(
   getDiffFoods(data)
   );