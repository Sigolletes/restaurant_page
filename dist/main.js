(()=>{"use strict";const e=function(){!function(){const e=document.querySelector("main");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");t.classList.add("section"),n.classList.add("section"),a.classList.add("section"),t.innerHTML="<h1>ECO RESTAURANT</h1>",n.innerHTML="<h3>INFORMATION</h3>",n.innerHTML+="<p>This restaurant was created in 2000 with the purpose of serving the best natural, ecological and delicious vegan recipes of the area.</p>",n.innerHTML+="<p>All ingredients have been cultivated, collected or produced for ecological farmers of the area and all have the green seal.</p>",a.innerHTML="<h3>SCHEDULE</h3>",a.innerHTML+="<p>Monday: Closed</p>",a.innerHTML+="<p>Tuesday: 12:00 - 23:00</p>",a.innerHTML+="<p>Wednesday: 12:00 - 23:00</p>",a.innerHTML+="<p>Thursday: 12:00 - 23:00</p>",a.innerHTML+="<p>Friday: 12:00 - 00:00</p>",a.innerHTML+="<p>Saturday: 10:00 - 00:00</p>",a.innerHTML+="<p>Sunday: 10:00 - 00:00</p>",e.appendChild(t),e.appendChild(n),e.appendChild(a)}()};addEventListener("load",(()=>{!function(){const e=document.querySelector("#content"),t=document.createElement("header"),n=document.createElement("main"),a=document.createElement("footer"),i=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div");i.innerHTML="<button id='homeTag' type='button'>HOME</button>",c.innerHTML="<button id='menuTag' type='button'>MENU</button>",d.innerHTML="<button id='contactTag' type='button'>CONTACT</button>",a.innerText="Coded by Sigolletes",e.appendChild(t),e.appendChild(n),e.appendChild(a),t.appendChild(i),t.appendChild(c),t.appendChild(d)}(),function(){const t=document.querySelector("#homeTag"),n=document.querySelector("#menuTag"),a=document.querySelector("#contactTag");t.addEventListener("click",(()=>{e(),t.classList.add("active"),n.classList.remove("active"),a.classList.remove("active")})),n.addEventListener("click",(()=>{(function(){const e=document.querySelector("main");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(i),e.appendChild(c),t.classList.add("section"),n.classList.add("section"),a.classList.add("section"),i.classList.add("section"),c.classList.add("section"),t.innerHTML="<h1>MENU</h1>",n.innerHTML+="<h3>VEGAN BURGUER</h3>",n.innerHTML+="<img src='https://realfood.tesco.com/media/images/1400x919-BBQ-jackfruit-22982f73-d9e0-4ff1-a990-581a5481028d-0-1400x919.jpg'></img>",a.innerHTML+="<h3>MISO AUBERGINES</h3>",a.innerHTML+="<img src='https://realfood.tesco.com/media/images/RFO-1400x919-MisoAubergine-ffc6baab-2e15-43ca-8302-3301e8ab48d3-0-1400x919.jpg'></img>",i.innerHTML+="<h3>VEGAN MUSHROOM CARBONARA</h3>",i.innerHTML+="<img src='https://realfood.tesco.com/media/images/RFO-1400x919-Mushroom-Carbonara-09a42f48-b468-40d8-8214-3622f0776b45-0-1400x919.jpg'></img>",c.innerHTML+="<h3>SWEET POTATOS</h3>",c.innerHTML+="<img src='https://realfood.tesco.com/media/images/1400x919-SweetPotatoSpinachCurry-353928fe-2d02-4119-b174-3aedef7ea8ca-0-1400x919.jpg'></img>",c.innerHTML+="<p>Pictures by <a href='https://realfood.tesco.com/'>realfood.tesco.com</a></p>"})(),t.classList.remove("active"),n.classList.add("active"),a.classList.remove("active")})),a.addEventListener("click",(()=>{!function(){const e=document.querySelector("main");e.innerHTML="";const t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");e.appendChild(t),e.appendChild(n),e.appendChild(a),t.classList.add("section"),n.classList.add("section"),a.classList.add("section"),t.innerHTML="<h1>CONTACT US</h1>",n.innerHTML+="<h3>CONTACT</h3>",n.innerHTML+="<p>Phone: 555 123 123</p>",n.innerHTML+="<p>Email: ecorestaurant@eco.tree</p>",a.innerHTML+="<h3>LOCATION</h3>",a.innerHTML+="<p>Maple Street 13, Riverside Mountain</p>"}(),t.classList.remove("active"),n.classList.remove("active"),a.classList.add("active")}))}(),e(),homeTag.classList.add("active"),menuTag.classList.remove("active"),contactTag.classList.remove("active")}))})();