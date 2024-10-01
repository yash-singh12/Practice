let name= document.getElementsByClassName("yash")
let greeting= `hello ${name}`;

let buttu= document.querySelector(".but");
function print(){alert(greeting);}
buttu.addEventListener("click",print);
