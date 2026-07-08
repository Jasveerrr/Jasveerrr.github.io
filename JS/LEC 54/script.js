const box = document.querySelector('.box');
const h1=document.querySelector(".goat");
const para=document.querySelector(".para");
const text=para.innerHTML;
const str=text.split(' ');
let count=0;
box.addEventListener("mouseenter",()=>{
  count=0;
  
  let interval=setInterval(()=>{
    let newpara=str.slice(0,count).join(" ")
    count++;
    if(count >= str.length){
    clearInterval(interval);
  }
  para.innerHTML=newpara;
  },250)
  
  console.log(str)
})