function Hello(callback){
  console.log("HEllO");
  callback();
}

function leave(){
  console.log("NIKAL");
}
function bye(){
  console.log("GOODBYE");
}
Hello(leave);

function add(clb,x,y){
  let result=x+y;
  clb(result);
}
 function display(result){
  console.log(result);
 }

 add( display,1,2)
//Q1
 function runTwice(fn){
  fn();
  fn();
 }
function vapas(){
  console.log("ChahaH VASTE GONNA HAYEH")
 }
 runTwice(vapas);

function abcd({name,age}){                      //OBJECT DESTRUCTURING 
  console.log(name,age);
}
abcd({name:'Jasveer',age:19});



//arr.map

let arr=[1,2,3,4,5]

function squared(nums){
  return nums*nums;
}

function cubed(numba){
  return numba*numba*numba;
}


let newarr= arr.map(squared);
console.log(newarr);

let cube= arr.map(cubed)
console.log(cube);

//arr.filter in the same array 

function checkeven(a){
  return a%2===0;
}
let check=arr.filter(checkeven)
console.log(check);

//arr.reduce
// REDUCE KYA KARTA HAI PHELE ACCUMALTOR MEI VALUE 0 HOTI HAI TOH PHELA ELEMENT USMEI JAATA HAI PHIR DUSRA ELEMENT ACC SE ADD HOKE ACC MEI STORE HO JAATA HAI TOH YAHA

//! arr.reduce( accumaltor ie store , next element ie khud ek ke baad ek ayege)

let sal=[1000,2000,3000]
let total= sal.reduce(sum)
console.log(total);

function sum(acc,next){         
  return acc+next;
}

//Object.freeze and Object.seal

let user={
  name:'Jasveer',
  age:19,
  email:'vu1f2425131@pvppcoe.ac.in',
};
Object.freeze(user);
user.social='instagram'; // ye add nhi hua kyuki freeze kiya hai 

// FREEZE KIYA TOH NAA KOYI VALUE CHANGE KAR PAYEGA NA ADD KAR PAYEGA 

console.log(user);



//NESTED OBJ AND ACCESING IT 

let obj1={
  name:'Jasveer',
  address:{
    city:"Mumbai",
    street:{
      naam:'GTB NAGAR'
    }
  }
}
// yaha naam ek variable ban jayega jismei value store hogi
let {naam}=obj1.address.street
console.log(naam);



// DOM 
//! QUERY SELECTOR 
var h1= document.querySelector('h1') // isse h1 select ho gaya 
h1.addEventListener('click',function(){
  h1.innerHTML='CHANGED'
})
h1.style.color='yellow'   // isse css change kar sakta hai 



//EVENT LISTENER

h1.addEventListener('dblclick',function(){
  console.log('KYA CHEDA ');
})

let sound=new Audio('sound1.mp3')
let soundnew=new Audio('sound2.mp3')

var btn=document.querySelector('button')
btn.addEventListener('click',function(){
  sound.play();
})

h1.addEventListener('click',function sound(){
  soundnew.play()
})

let count=0
let num=document.querySelector('#count')
let plus=document.querySelector('#inc')
let re=document.querySelector('#reset')

plus.addEventListener('click',function(){
  count++;
 num.innerHTML=count;
 click.play(click)
})

re.addEventListener('click',function(){
  count=0;
  num.innerHTML=count;
  click.play()
})


let icon=document.querySelector('#back')
icon.addEventListener('click',function(){
  let r=Math.floor(Math.random()*256)
let g=Math.floor(Math.random()*256)
let b=Math.floor(Math.random()*256)
let rgb= `rgb(${r},${g},${b})`
  document.body.style.backgroundColor=rgb
  woo.play()
})

let click = new Audio('sound3.mp3')
let woo=new Audio('sound4.mp3')

let teams = [
  {
    team: "CSK",
    captain: "MS DHONI",
    color: "#F7D117"
  },
  {
    team: "MI",
    captain: "HARDIK PANDYA",
    color: "#004BA0"
  },
  {
    team: "RCB",
    captain: "RAJAT PATIDAR",
    color: "#D71920"
  },
  {
    team: "KKR",
    captain: "AJINKYA RAHANE",
    color: "#3A225D"
  },
  {
    team: "SRH",
    captain: "PAT CUMMINS",
    color: "#FF822A"
  },
  {
    team: "GT",
    captain: "SHUBMAN GILL",
    color: "#1C2C5B"
  },
  {
    team: "DC",
    captain: "AXAR PATEL",
    color: "#0078BC"
  },
  {
    team: "PBKS",
    captain: "SHREYAS IYER",
    color: "#ED1B24"
  },
  {
    team: "RR",
    captain: "SANJU SAMSON",
    color: "#EA1A85"
  },
  {
    team: "LSG",
    captain: "RISHABH PANT",
    color: "#00AEEF"
  }
];

let random1= teams[Math.floor(Math.random()*teams.length)];
let randomteam=random1.team;
let div=document.querySelector("#box")
div.innerHTML=randomteam

let guess=document.querySelector("#guess")
let chuck = document.querySelector("#check")
let result = document.querySelector("#result");

chuck.addEventListener('click',function(){
  let userguess = guess.value;

    if(userguess.toUpperCase() === random1.captain){

        result.innerHTML = "Correct 🎉";

        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 }
        });

    } else {

        result.innerHTML = "Wrong ❌";

    }

    guess.value = "";
});

