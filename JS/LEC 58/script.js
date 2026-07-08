
//*! SECTION 1: Objects and OOPS Thinking (Foundation)
//*? 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

// let User1={
//   name:"Jasveer",
//   email:'vu1f2425131@pvppcoe.ac.in',
//   login: ()=>{
//     console.log('Logged in');
//   }
// }
// let User2={
//   name:"Anish",
//   email:'vu1f2425123@pvppcoe.ac.in',
//   login: ()=>{
//     console.log('Logged in');
//   }
// }
// let User3={
//   name:"Rishi",
//   email:'vu1f2425116@pvppcoe.ac.in',
//   login: ()=>{
//     console.log('Logged in');
//   }
// }
// let User4={
//   name:"Aniruddha",
//   email:'vu1f2425134@pvppcoe.ac.in',
//   login: ()=>{
//     console.log('Logged in');
//   }
// }
// let User5={
//   name:"Datta",
//   email:'vu1f2425108@pvppcoe.ac.in',
//   login: ()=>{
//     console.log('Logged in');
//   }
// }


//*? 	2.	Imagine you now have 5 users.
//*? First, think how you would manage them without using a class.
//*! Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.


// class User{
//   constructor(name,email){
//     this.name=name;
//     this.email=email;
//   }
//   login(){
//     console.log("LOGGED IN");
//   }
// }

// let User1=new User('Jasveer','vu1f2425131@pvppcoe.ac.in')
// let User2=new User('Jasveer','vu1f2425131@pvppcoe.ac.in')
// let User3=new User('Jasveer','vu1f2425131@pvppcoe.ac.in')
// let User4=new User('Jasveer','vu1f2425131@pvppcoe.ac.in')
// let User5=new User('Jasveer','vu1f2425131@pvppcoe.ac.in')


//*!---Q3
//*? 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// let Product={
//   name:'key',
//   price:2000,
//   discount:function(){
//     return this.price-200
//   },
// }
// console.log(Product.discount())


//*! SECTION 2: Classes and Objects
//*?	4.	Create a Car class with the following:
//*! brand
//*! speed
//*! a drive method that prints the car brand and speed
	

// class Car{
//   constructor(brand,speed){
//     this.brand=brand;
//     this.speed=speed;
//   }
//   Drive(){
//     return `${this.brand}'s top speed is ${this.speed}`
//   }
// }

// let c1= new Car('KIA',200);
// console.log(c1.Drive());

//*!5.	Create two different car objects from the same class and verify that their data is different.

// let c2=
// new Car('Lambo',500)
// console.log(c2.Drive());


// *! SECTION 3: Constructor and this keyword
//*?	7.	Create a Student class whose constructor accepts name and roll number.
//*! Add a method introduce that prints both values.


// class Student{
//   constructor(name,roll){
//     this.name=name;
//     this.roll=roll;
//   }
//   Intro(){
//     return `My Name Is ${this.name} And My Roll No Is ${this.roll}`
//   }
// }
// let s1=new Student('Jasveer',131);
// console.log(s1.Intro());


//*! SECTION 5: call, apply, bind
//? 13.	Create a function that prints this.name.

function Print(){
  console.log(this.name);
}
