window.onload=function(){

let seconds = 0;
let milliSeconds=0;
let interval;


let addSeconds = document.querySelector(".seconds");
let addMilliSeconds = document.querySelector(".milliSeconds");

let starBtn= document.querySelector(".start");
let stopBtn= document.querySelector(".stop");
let resetBtn= document.querySelector(".reset");


starBtn.onclick= function (){
    clearInterval(interval);
    interval = setInterval( start, 10);
}
stopBtn.onclick= function(){
    clearInterval(interval);
}
resetBtn.onclick= function(){
    clearInterval(interval);
    milliSeconds=0;
    addMilliSeconds.innerHTML="00";
    seconds=0;
    addSeconds.innerHTML="00";
}

function start(){
    milliSeconds++;
    if(milliSeconds<10){
        addMilliSeconds.innerHTML="0"+milliSeconds;
    }
    else{
        addMilliSeconds.innerHTML=milliSeconds;
    }
    if(milliSeconds>99){
        seconds++;
        addSeconds.innerHTML= seconds<10?"0"+seconds: seconds;
        milliSeconds=0;
        addMilliSeconds.innerHTML="00";
    }
}



};