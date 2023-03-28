var roww=document.getElementById("row");
var coll=document.getElementById("col");
var choose=document.getElementById("sel");

coll.addEventListener("input",()=>{
    make_it();
});

choose.addEventListener("change",()=>{
    make_it();
});

function make_it(){
    if(choose == "decode"){
        roww.value = window.atob(coll.value);
    }
    else{
        roww.value = window.btoa(coll.value);
    }
}