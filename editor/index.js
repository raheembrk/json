var text =document.getElementsByClassName("text");
var add =document.getElementsByClassName("add");
var remove =document.getElementsByClassName("remove");
var space=document.getElementById("space");


function addo(){
    space.innerHTML= text.value;
    localStorage.setItem("result",text.value);
};
function remo(){
    space.innerHTML="";
};



onload=()=>{
    addo(localStorage.getItem("result"))};
