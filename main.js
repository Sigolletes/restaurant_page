(()=>{"use strict";const e=function(){!function(){const e=document.querySelector("main");e.innerHTML="";const n=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div");n.classList.add("section"),t.classList.add("section"),i.classList.add("section"),n.innerHTML="<h1>ECO RESTAURANT</h1>",t.innerHTML="<h3>INFORMATION</h3>",t.innerHTML+="<p>This restaurant was created in 2000 with the purpose of serving the best natural, ecological and delicious vegan recipes of the area.</p>",t.innerHTML+="<p>All ingredients have been cultivated, collected or produced for ecological farmers of the area and all have the green seal.</p>",i.innerHTML="<h3>SCHEDULE</h3>",i.innerHTML+="<p>Monday: Closed</p>",i.innerHTML+="<p>Tuesday: 12:00 - 23:00</p>",i.innerHTML+="<p>Wednesday: 12:00 - 23:00</p>",i.innerHTML+="<p>Thursday: 12:00 - 23:00</p>",i.innerHTML+="<p>Friday: 12:00 - 00:00</p>",i.innerHTML+="<p>Saturday: 10:00 - 00:00</p>",i.innerHTML+="<p>Sunday: 10:00 - 00:00</p>",e.appendChild(n),e.appendChild(t),e.appendChild(i)}()},n=function(){document.querySelector("main").innerHTML=""},t=function(){!function(){document.querySelector("main").innerHTML="";const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div");e.classList.add("section"),n.classList.add("section"),t.classList.add("section"),e.innerHTML="<h1>CONTACT US/h1>",n.innerHTML="<h3>CONTACT</h3>",n.innerHTML="<p>Phone: 555 123 123</p>",n.innerHTML="<p>Email: ecorestaurant@eco.tree</p>"}()};addEventListener("load",(()=>{!function(){const e=document.querySelector("#content"),n=document.createElement("header"),t=document.createElement("main"),i=document.createElement("footer"),d=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");d.setAttribute("id","homeTag"),a.setAttribute("id","menuTag"),c.setAttribute("id","contactTag"),d.innerHTML="<a href='./home.js'>HOME</a>",a.innerHTML="<a href='./menu.js'>MENU</a>",c.innerHTML="<a href='./contact.js'>CONTACT</a>",i.innerText="Coded by Sigolletes",e.appendChild(n),e.appendChild(t),e.appendChild(i),n.appendChild(d),n.appendChild(a),n.appendChild(c)}(),function(){const i=document.querySelector("#homeTag"),d=document.querySelector("#menuTag"),a=document.querySelector("#contactTag");i.addEventListener("click",e),d.addEventListener("click",n),a.addEventListener("click",t)}(),e()}))})();