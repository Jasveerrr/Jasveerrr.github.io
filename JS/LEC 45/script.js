const time=document.querySelector('#timer')
const start=document.querySelector('#start')
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

start.addEventListener('click',()=>{
  interval=setInterval(function(){
    seconds++;
    if(seconds===60){
      minutes++;
      seconds=0;
    }
    if(minutes==60){
      hours++;
      minutes=0;
    }
    time.innerHTML=`${hours}:${minutes}:${seconds}`
  },1000)
})
stop.addEventListener('click',()=>{
  clearInterval(interval);
})
reset.addEventListener('click',function(){
  time.innerHTML='00:00:00'
  seconds=0;
  minutes=0;
  hours=0;
})