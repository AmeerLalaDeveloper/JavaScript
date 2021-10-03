const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];


 const list=document.createElement('ol');
 list.style.listStyleType='none';
 
 users.forEach(user => {
    let list_item=document.createElement('li');
    let att=document.createAttribute('data-id');
    att.value=user.id;
    list_item.setAttributeNode(att);
    list_item.textContent=user.firstName+" "+user.lastName;
    list.appendChild(list_item);

 })

 document.body.appendChild(list)
 console.log(list);