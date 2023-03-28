class Iii{
constructor(){
var mainheight=document.getElementById("mn");
mainheight.style.height=screen.height+"px";
if(screen.width<500){
    mainheight.style.width=screen.width+"px";
}
var divcontent=document.getElementById("content");
divcontent.style.height=screen.height-100 +"px";
}}
onload= new Iii();

class Audio_play{
    constructor(){
    this.paara=document.getElementById("para");
    this.pla=document.getElementById("pl");
    this.aus=document.getElementById("aud");
    this.ispalyed;
    this.pla.addEventListener("click",()=>{
        this.audio();
    });

    this.name_audio=[];
    this.name_audio[0]="radio 1";
    this.name_audio[1]="radio 2";
    this.name_audio[2]= "radio 3";

    this.radio=[];
    this.radio[0]="http://yayin.firatfm.com:3065/;audio.mp3&bufferlength=2&volume=100&streamer=rtmp://wowza.firatfm.com:3270/shoutcast/firatfm&skin=https://www.firatfm.com/ekle/yanyesil/videosmartclassic.zip&autostart=true&stretching=fill";
    this.radio[1]="./audio.mp3";
    this.radio[2]="https://webradio.tda.dz/Chaine1_64K.mp3";

    this.server=0;

    this.rio();

    document.getElementById("next").addEventListener("click",()=>{
        if(this.server<this.radio.length-1){
          ++this.server;
        }
        else{
            this.server=0;
        }
        localStorage.setItem("save",this.server);
         this.rio();
         this.ispalyed==false;
    })
  document.getElementById("back").addEventListener("click",()=>{
    if (this.server>0) {
        --this.server;
    }
    else{
        this.server=this.radio.length-1;
    }
    localStorage.setItem("save",this.server);
    this.rio();
    this.ispalyed==false;
  })
    }

    rio(){
        if (localStorage.getItem("save")) {
            this.server=localStorage.getItem("save");
        }
        this.aus.src = this.radio[this.server];
        this.paara.innerHTML=this.name_audio[this.server];
        this.audio();
    }

    audio(){
        if (this.ispalyed==false) 
        {this.pla.src= "./images/pause.png";
            this.aus.play();
            this.ispalyed==true;
        }
        else{
            this.pla.src= "./images/play.png";
            this.aus.pause();
            this.ispalyed==false;
        }
    }
};
onload = new Audio_play();

class Volume{
constructor(){
    this.aus.Volume= 50/100 ;
    this.aus.playckRate=1;
    this.volou=document.getElementById("vol");
    this.volou.addEventListener("change",()=>{
        this.aus.Volume=this.volou.value/100;
    })

    this.spi=document.getElementById("spd");
    this.spi.addEventListener("change",()=>{
        this.aus.playckRate=this.spi.value/100;
    })
}
};
onload =new Volume();

class Color{
    constructor(){
        this.color1 =document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            Select("colr1"); 
        })

        this.color2 =document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            Select("color2"); 
        })
        this.color3 =document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            Select("color3"); 
        })

        this.color4 =document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            Select("color4"); 
        })
    }
    Select(color){
        if(color=="color1"){
            document.body.style.background="rgb(241, 53, 28)";
        }
        else if (color=="color2") {
            document.body.style.background="rgb(64, 64, 234)";
        }
        else if (color=="color3") {
            document.body.style.background="rgb(2, 32, 2)";
        }
        else if (color=="color4") {
            document.body.style.background="black";
        }
    }
}
onload=new Color();