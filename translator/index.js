let arabic=document.getElementById("ar");
let english = document.getElementById("eng");
var text1 = document.getElementById("vba");
var text2 = document.getElementById("vbo");
var text3 = document.getElementById("vbi");

arabic.addEventListener("click",()=>{
    set_lang("arabic");
    localStorage.setItem("lang","arabic");
})

english.addEventListener("click",()=>{ 
    set_lang("english");
    localStorage.setItem("lang","english");
    })

function set_lang(get_lang){
    if(get_lang=="arabic"){ text1.innerHTML = "تواصل معنا";
    text2.innerHTML= "فخورون بكم";
    text3.innerHTML= "افضل استاذ";}
    else if(get_lang=="english"){
        text1.innerHTML = "contact us";  
        text2.innerHTML= "we are proud of you";
        text3.innerHTML= "the best teatcher in the world";
    }
}


onload=()=>{
    set_lang(localStorage.getItem("lang"));
}