const keys= document.querySelectorAll(".white");
const left=document.querySelector('.left')
const right=document.querySelector('.right')
const validKeys = [
  "a","s","d","f","g","h","j","k","l",
  "z","x","c","v","b"
];
const sounds = {
  a: "A4",
  s: "A4",
  d: "C5",
  f: "C4",
  g: "C5",
  h: "A4",
  j: "D4",
  k: "D4",
  l: "E4",
  z: "F4",
  x: "F4",
  c: "G4",
  v: "C4",
  b: "A4"
};
document.addEventListener("keydown", function(dets){
    let key = dets.key.toLowerCase();
  keys.forEach(function(val){
    if(val.dataset.key===dets.key){
      val.classList.add('active')
      
      setTimeout(function(){
        val.classList.remove('active')
      },100);
    }
  })

    if(validKeys.includes(dets.key)){
      const audio=new Audio(`./piano-sounds/${sounds[dets.key]}.mp3`);
      audio.play();
      left.innerHTML = dets.key;
      right.innerHTML += dets.key;
    }
});


keys.forEach(function(value){

    value.addEventListener("click", function(){

        let key = value.dataset.key;

        const audio = new Audio(`./piano-sounds/${sounds[key]}.mp3`);
        audio.play();

        left.innerHTML = key;
        right.innerHTML += key;

    });

});