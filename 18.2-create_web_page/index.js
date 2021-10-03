
const h1=document.createElement('h1');
h1.textContent='Webpage'
const container=document.createElement('div');
container.classList.add('container');
const p=document.createElement('p');
p.textContent=`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
officia, amet quis nihil laborum ipsum nisi, impedit nam fugiat eaque
vel repellendus exercitationem optio nesciunt tempora voluptatibus
repellat eligendi atque quod minus saepe sint. Iure sunt soluta nisi
repudiandae vero a omnis iste consequuntur facere fuga fugiat nemo quia
voluptatem natus, impedit eaque sed eveniet sapiente rerum? Aliquid
perspiciatis veniam quisquam veritatis nihil architecto, deleniti
dolorem esse eveniet laborum molestias tempora exercitationem ea dolores
nesciunt quaerat aspernatur, optio autem aperiam cumque placeat sapiente
dicta tempore. Mollitia facere cumque saepe nobis aperiam voluptates,
eveniet tempora repudiandae velit consequatur! Sint, recusandae qui?`;

const form=document.createElement("form");
const textarea=document.createElement("textarea");
const input=document.createElement("input");
const div=document.createElement("div");
div.classList.add('buttons');
const btn1=document.createElement("button")
btn1.textContent='AA';
const btn2=document.createElement("button")
btn2.textContent='BB';
div.appendChild(btn1);
div.appendChild(btn2);
form.appendChild(textarea);
form.appendChild(input);
form.appendChild(div);
//<div class="buttons"><button>AA</button><button>BB</button></div>

form.appendChild(textarea);
form.appendChild(input);

container.appendChild(p);
container.appendChild(form);
document.body.appendChild(h1);
document.body.appendChild(container);
