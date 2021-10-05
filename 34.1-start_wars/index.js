// let warriors=[];
// async function tenPeople(){
    
//     for(let i=1;i<=10;i++){
//      let person= await (await fetch(`https://swapi.dev/api/people/${i}`)).json()
  
//     let planet=await (await fetch(`${person.homeworld}`)).json()
 
//     let obj={
//         hair:person.hair_color,
//         height:person.height,
//         name:person.name,
//         planet:{
//             name: planet.name,
//             population:planet.population
//                 }
//     };
//     warriors.push(obj)
//    }
// return warriors;
// }
// tenPeople().then((data)=>createTable(data))

// function createTable(warriors){
    
//     let table=
//    `<table style="width:100%">
//   <tr>
//     <th>name</th>
//     <th>hair</th>
//     <th>height</th>
//     <th>planet name</th>
//     <th>planet population</th>
//   </tr>`
//   for(let warrior of warriors){

//    table+=
//    `<tr>
//    <td>${warrior.name}</td>
//    <td>${warrior.hair}</td>
//    <td>${warrior.height}</td>
//    <td>${warrior.planet.name}</td>
//    <td>${warrior.planet.population}</td>
//    </tr>`

//   }

//   table+='</table>'

//   document.body.innerHTML=table;
// }

async function createWarriors(){
  return Array.from({length:10}).map(async (item,idx)=>{
   const mainReq= (await axios.get(`https://swapi.dev/api/people/${idx+1}`)).data
   const planet=(await axios.get(`${mainReq.homeworld}`)).data
   return {
      name:mainReq.name,
      hair:mainReq.hair_color,
      height:mainReq.height,
      planet:{
        name:planet.name,
        population:planet.population
      }
   }
  })
}

createWarriors().then((data)=>{
 Promise.all(data).then((items)=>{
   createTable(items)
 })
}
)

function createTable(warriors){
    
    let table=
   `<table style="width:100%">
  <tr>
    <th>name</th>
    <th>hair</th>
    <th>height</th>
    <th>planet name</th>
    <th>planet population</th>
  </tr>`
  for(let warrior of warriors){

   table+=
   `<tr>
   <td>${warrior.name}</td>
   <td>${warrior.hair}</td>
   <td>${warrior.height}</td>
   <td>${warrior.planet.name}</td>
   <td>${warrior.planet.population}</td>
   </tr>`

  }

  table+='</table>'

  document.body.innerHTML=table;
}