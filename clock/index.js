function update(){
    var date = new Date();
    var time =document.getElementById("time");
    time.innerHTML= date.getHours() +":" + date.getMinutes() + ":"+ date.getSeconds();
    var tar = document.getElementById("date");
    tar.innerHTML= date.getDate()+"/"+parseInt( date.getMonth()+1)+"/"+date.getFullYear();
}
setInterval(update,100);
onload= update();
function setColor(){
    var fg=document.getElementById("colooo").value;
    localStorage.setItem("color",fg);
    document.body.style.background=localStorage.getItem("color");
}
function getColor(){
    document.getElementById("colooo").value = localStorage.getItem("color");

    document.body.style.background=localStorage.getItem("color");
}
setInterval(getColor,100);