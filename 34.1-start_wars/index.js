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

(async function(){
 const items=
 await Promise.all(await createWarriors())
  
  createTable(items)
  //createTable2(items)
})();

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


// function createTable2(warriors){
//   let keys=['name','hair','height','planet name','planet population']
//   let table=document.createElement('table');
//   table.style.width='100%';
//   let row=document.createElement('tr');
//   for(let i=0;i<5;i++)
//   {
//     let head=document.createElement('th')
//     head.textContent=keys[i]
//     row.appendChild(head)
//   }
//   table.appendChild(row)
//   for(let warrior of warriors){
//    let tr=document.createElement('tr');
//    let td1=document.createElement('td')
//    td1.textContent=warrior.name;
//    let td2=document.createElement('td')
//    td2.textContent=warrior.hair;
//    let td3=document.createElement('td')
//    td3.textContent=warrior.height;
//    let td4=document.createElement('td')
//    td4.textContent=warrior.planet.name;
//    let td5=document.createElement('td')
//    td5.textContent=warrior.planet.population;
//   tr.appendChild(td1)
//   tr.appendChild(td2)
//   tr.appendChild(td3)
//   tr.appendChild(td4)
//   tr.appendChild(td5)
//   table.appendChild(tr)
//   }

//   document.body.appendChild(table);

// }