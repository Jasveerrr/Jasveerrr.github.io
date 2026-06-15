const btn = document.querySelector('button');
const h2 = document.querySelector('h2');
const inner = document.querySelector('.inner');
let interval;
let grow=0;
btn.addEventListener('click',function(){
  btn.style.pointerEvents='none'
  var num=50+Math.floor(Math.random()*50)
  interval=setInterval(function(){
    grow++;
    h2.innerHTML=grow+'%'
    inner.style.width=grow+'%'
    btn.innerHTML='Downloading...'
  },num)
  setTimeout(function(){
    clearInterval(interval)
    btn.innerHTML='Downloaded'
    btn.style.opacity='0.5'
    h2.style.color = "green"
  },num*100)
})