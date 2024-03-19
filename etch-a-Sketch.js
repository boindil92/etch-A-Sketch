const superContainer=document.querySelector("#superContainer");

let grid=undefined;

let play=document.querySelector("#play");


play.addEventListener("click",getPlayerChoice);
play.addEventListener("click",createHetchASketch);





function getPlayerChoice (){
   grid= prompt("Please enter a number");
}

function createHetchASketch () {



const gridColumn= [];
const gridRaw=[];

let container=document.createElement("div");
superContainer.appendChild(container);

   for(let i=0 ; i<grid ; i++) {
      gridColumn[i] = document.createElement("div");
      gridColumn[i].classList.add("column");
      container.appendChild(gridColumn[i]);

         for (let a=0; a<grid; a++ ) {
            gridRaw[a] = document.createElement("div");
            gridRaw[a].classList.add("raw");
            gridColumn[i].appendChild(gridRaw[a]);


         }

   }

 container.addEventListener("mouseover", marker);

 function marker (event) {

    let target=event.target;  //event.target è una propietà che indica l' elemento appena raggiunto dal mouse
    target.classList.remove("raw");
    target.classList.add("passedRaw");
      
   }
play.addEventListener("click",clear);
function clear () {
   superContainer.removeChild(container);
}

}
