const para=document.querySelector("p");
const charac="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text=para.innerHTML;

let iteration=0;
para.addEventListener("mouseenter",()=>{
  setInterval(()=>{
    const str=text.split('').map((char,index)=>{
      if(index<iteration){
        return char;
      }
      return charac.split('')[Math.floor(Math.random()*52)]
    }).join('');
    para.innerHTML=str;
    iteration+=0.2;
  },50)
})  

