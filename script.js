let menuAnimated = document.querySelector(".menuAnimated");

function myFunction() {
    this.classList.toggle("change");
}

menuAnimated.addEventListener("click", myFunction);

let newTab = document.querySelector (".newTab");

function fly(){
  newTab.classList.toggle("show")
}

menuAnimated.addEventListener("click", fly)