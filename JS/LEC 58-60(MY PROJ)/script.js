const brakebtn=document.querySelector("#brake");
const refuelbtn=document.querySelector("#refuel");
const boostbtn=document.querySelector("#boost");
const curentfuel=document.querySelector("#fuel");
const currentspeed=document.querySelector("#speed");
const carName=document.querySelector('#carName');

class Car{
  constructor(brand,speed,fuel){
    this.brand=brand;
    this.speed=speed;
    this.fuel=fuel;
  }
  accelerate(){
    this.speed += 5;
    this.fuel -= 5;
  }
  brake(){
    this.speed = Math.max(0, this.speed - 10);
  }
  boost(){
    if(this.fuel<=0){
      alert("PLEASE REFUEL");
      return;
    }
    this.speed=Math.max(0,this.speed+35);
    this.fuel = Math.max(0, this.fuel - 10);
  }
  refuel(){
    this.fuel=100
  }
}
let newcar= new Car("BMW",100,100);

function UpdateUI(){
  console.log(newcar);
  carName.innerHTML=newcar.brand;
  currentspeed.innerHTML=newcar.speed;
  curentfuel.innerHTML=newcar.fuel;
}
UpdateUI();

boostbtn.addEventListener("click", ()=>{
  newcar.boost();
  UpdateUI();

});

brakebtn.addEventListener("click",()=>{
  newcar.brake();
  UpdateUI();
})
refuelbtn.addEventListener("click", () => {
    newcar.refuel();
    UpdateUI();
});