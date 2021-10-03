const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

function compareTwoArrays(a, b) {
let sameValue=[]
for(let i = 0; i < a.length; i++)
{


    for(let j = 0; j < b.length; j++)
        if(a[i]==b[j])
            sameValue.push(a[i]);
        
}
return sameValue.length==0?false:sameValue
}

console.log(
    compareTwoArrays(food,food1)
);