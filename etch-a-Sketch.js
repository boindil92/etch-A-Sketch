const container=document.querySelector("#container");
const gridColumn= [];
const gridRaw=[];

let grid=6

for(let i=0 ; i<grid ; i++) {
   gridColumn[i] = document.createElement("div");
   gridColumn[i].classList.add("column");
   container.appendChild(gridColumn[i]);
   // gridColumn[i].textContent="hi";
   for (let a=0; a<grid; a++ ) {
      gridRaw[a] = document.createElement("div");
      gridRaw[a].classList.add("raw");
      gridColumn[i].appendChild(gridRaw[a]);
      gridRaw[a].textContent="yo";

   }

}