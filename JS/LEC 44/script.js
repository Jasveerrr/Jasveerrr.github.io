const btn=document.querySelector('button')
const main = document.querySelector('main')

btn.addEventListener('click',function(){
  var h1=document.createElement('h1')
  const quotes = [
  "Discipline beats motivation.",
  "Dream big. Start small.",
  "Consistency creates results.",
  "Action cures fear.",
  "Stay hungry. Stay foolish.",
  "Make yourself proud.",
  "Hard work beats talent.",
  "Never give up."
];

const random=Math.floor(Math.random()*quotes.length)

h1.innerHTML=quotes[random];

var x=Math.random()*80;
var y=Math.random()*80;
var c=Math.random()*360;
var scl=Math.random()*2;

var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);

h1.style.position='absolute'
h1.style.left=x+'%'
h1.style.top=y+'%'
h1.style.color=`white`
h1.style.rotate=c+'deg'
h1.style.scale=scl

main.appendChild(h1);
console.log(h1);
})
