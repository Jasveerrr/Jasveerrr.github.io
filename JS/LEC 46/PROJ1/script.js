const hrtbtn = document.querySelector('#heartbtn');
const img=document.querySelector('#imgmain');
const love=document.querySelector('#love');
const follow = document.querySelector('#follow');
const main = document.querySelector('main');
const cursor = document.querySelector('#cursor');


  
  love.style.opacity=1;
  love.style.transform='translate(-50%,-50%) scale(1) rotate(0deg)'

  setTimeout(function(){
  love.style.transform = 'translate(-50%,-320%) scale(1) rotate(60deg)'
  love.style.opacity=0;
  },600)

    setTimeout(function(){
love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'

  },800)


var check=0;
follow.addEventListener('click',()=>{
  if(check===0){
    follow.innerHTML='FOLLOWED'
    check=1;
  }else if(check===1){
    follow.innerHTML='FOLLOW'
    check=0;
  }
    // follow.style.pointerEvent='none'
})

main.addEventListener('mousemove',function(details){
  cursor.style.left= details.x + 'px';
  cursor.style.top= details.y + 'px';
})

// ----------------------STORY PROJECT----------------------
let currentstory=0;
var arr = [
  {
    dp: "https://i.pinimg.com/736x/09/ff/2b/09ff2b85f5c9eda02740cfc135154d98.jpg",
   story: "./pakad.mp4",
   type: "video"
  },
  {
    dp: "https://i.pinimg.com/control1/736x/1b/37/6e/1b376efd334574683266abf4b8951234.jpg",
    story: "https://i.pinimg.com/control1/736x/1b/37/6e/1b376efd334574683266abf4b8951234.jpg"
  },
  {
    dp: "https://i.pinimg.com/control1/736x/3e/5b/05/3e5b05a1d5bf47a2ba63d8c2a56276b9.jpg",
    story: "https://i.pinimg.com/control1/736x/3e/5b/05/3e5b05a1d5bf47a2ba63d8c2a56276b9.jpg"
  },
  {
    dp: "https://i.pinimg.com/736x/57/8a/da/578ada8e2baa16377ce59a147fe09aa9.jpg",
    story: "https://i.pinimg.com/736x/57/8a/da/578ada8e2baa16377ce59a147fe09aa9.jpg"
  },
  {
    dp: "https://i.pinimg.com/control1/736x/42/fb/80/42fb80fbf00d0c0da3640a16462f91ed.jpg",
    story: "https://i.pinimg.com/control1/736x/42/fb/80/42fb80fbf00d0c0da3640a16462f91ed.jpg"
  },
  {
    dp: "https://i.pinimg.com/736x/46/ec/86/46ec8677e45bcee5b3acd02d133256aa.jpg",
    story: "https://i.pinimg.com/736x/46/ec/86/46ec8677e45bcee5b3acd02d133256aa.jpg"
  },
  {
    dp: "https://i.pinimg.com/736x/ed/be/fa/edbefac629b89b04099545078a6c6749.jpg",
    story: "https://i.pinimg.com/736x/ed/be/fa/edbefac629b89b04099545078a6c6749.jpg"
  },
  {
    dp: "https://i.pinimg.com/736x/6b/1c/39/6b1c3977c861c02cc226cf485513a53e.jpg",
    story: "https://i.pinimg.com/736x/6b/1c/39/6b1c3977c861c02cc226cf485513a53e.jpg"
  }
];

var clutter=""
arr.forEach(function(elem,idx){
  clutter+=`  
  <div id="dp">
    <img id="${idx}"src="${elem.dp}" alt="">
  </div>
  `
})
console.log(clutter);

var story=document.querySelector('#story')
story.innerHTML=clutter;




var fullscreen =document.querySelector("#fullscreen")

story.addEventListener('click',function(dets){
  
  var strval=(arr[dets.target.id].story)
  var id=arr[dets.target.id]
  
fullscreen.classList.add("active")





//-----------VIDEO VALI KE LIYE ONLY-------------------

  
  if(id.type==='video'){
    
    fullscreen.style.backgroundImage = 'none'
    fullscreen.innerHTML=`
    <div id="close">
    <i class="ri-close-line"></i>
    </div>
    
    <video id="strvid"
    src="${id.story}"
    autoplay
    style="width:100%;height:100%;object-fit:cover;border-radius:10px;
    ">
    </video>
    
    `
    var vidclose=document.querySelector('#strvid')
    vidclose.addEventListener('ended',function(){
      fullscreen.classList.remove("active")
      vidclose.pause()
      vidclose.currentTime = 0
      
    })
    var close=document.querySelector("#close")
    
    close.addEventListener('click',function(){
      vidclose.pause()
      vidclose.currentTime = 0
      fullscreen.classList.remove("active")
    })
    
  }else{
    
    fullscreen.style.backgroundImage=`url(${strval})`
    fullscreen.style.backgroundSize = "cover"
    fullscreen.style.backgroundPosition = "center"
    
    
    fullscreen.innerHTML=`<div id="close">
    <i class="ri-close-line"></i>
    </div>`
    
    var close=document.querySelector("#close")
    close.addEventListener('click',function(){
      fullscreen.classList.remove("active")
      
    })
    setTimeout(function(){
      fullscreen.classList.remove("active")
    }, 9000)
  }
  
})
