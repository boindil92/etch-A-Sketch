const container=document.querySelector("#container");
const gridColumn= []

for(let i=0 ; i<16 ; i++) {
   gridColumn[i] = document.createElement("div");
   container.appendChild(gridColumn[i]);
   gridColumn[i].textContent="hi";

   for (let e=0 ; e<16 ; e++) {
    
   }
}