let currentScreen = 1;
const totalScreens = 4;

const music = document.getElementById("music");

function nextScreen() {

document.getElementById("screen"+currentScreen).classList.remove("active");

currentScreen++;

if(currentScreen<=totalScreens){

document.getElementById("screen"+currentScreen).classList.add("active");

}

if(currentScreen===2){

music.play().catch(()=>{});

}

}

function restart(){

document.getElementById("screen"+currentScreen).classList.remove("active");

currentScreen=1;

document.getElementById("screen1").classList.add("active");

window.scrollTo(0,0);

}

const emojis=["💖","🌸","🌷","🌺","✨","💗"];

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(6+Math.random()*6)+"s";

heart.style.fontSize=(18+Math.random()*28)+"px";

document.getElementById("particles").appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,300);

for(let i=0;i<25;i++){

setTimeout(createHeart,i*200);

}

document.addEventListener("click",()=>{

music.play().catch(()=>{});

},{once:true});

document.addEventListener("touchstart",()=>{

music.play().catch(()=>{});

},{once:true});

document.addEventListener("mousemove",(e)=>{

if(Math.random()>0.92){

const sparkle=document.createElement("div");

sparkle.className="heart";

sparkle.innerHTML="✨";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

sparkle.style.position="fixed";

sparkle.style.animationDuration="2s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},2000);

}

});