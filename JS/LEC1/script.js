// let attempts=0;
// let flag=false;
// let password="Jasveer16";
// let pass=prompt("PASSWORD DO")
// attempts++;
// if (pass.trim()===password) flag=true;
// while (pass!==password){
//     if (attempts===3){
//         console.error("ACCOUNT LOCKED");
//         break;
//     }
//     pass=prompt("PASSWORD DO");
//     if (pass.trim()===password) flag=true;
//     attempts++;
// }
// if (flag===true)console.log("ACCOUNT OPENED");

// let attempts=0;
// let userpass="JASVEER";
// let pass=prompt("PASSWORD DO");
// attempts++; //1
// while (attempts<3 && userpass!==pass){
//     pass=prompt("PASSWORD DE");
//     attempts++;
// }
// if (attempts===3 && userpass!==pass){
//     console.error("ACCOUNT LOCKED");
// }else {
//     console.log("ACCOUNED OPENED");
// }

// let count=0
// let words=prompt("WORDS DE");
// if (words==="yes") count++;
// while (words!=="STOP"){
//     if (words==="yes") count++;
// }
// let count=0;
// for (let i = 1; i <=50 ; i++) {
//     if (i%7===0){
//         console.log(i);
//         count++;
//     }
// }
// console.log(`TOTAL COUNT IS EQUAL TO ${count}`)

// let sum=0;
// for (let i = 1; i <=30; i++) {
//     if (i%2!==0){
//         console.log(i);
//         sum+=i;
//     }
// }
// console.log(`TOTAL VALUE IS EQUAL TO ${sum}`)

// let start=+prompt("GIVE START NUMBER");
// let end=+prompt("GIVE END NUMBER");
// if (start<end) console.error("SAHI SE NUMBER DE");
// for (i=start;i<=end;i++){
//     console.log(i);
// }

// let count=0;
// for (i=1;i<=20;i++){
//     if (i%2!==0){
//         count++;
//         while (count<4){
//             console.log(i)
//             break;
//         }
//     }
// }


// let count=0;
// for (let i = 1; i <= 5; i++) {
//     let nums = +prompt("NUMBER DO")
//     if (nums > 0) count++;
// }
// console.log(count);


// let balance=1000;
// for (let i = 1; i <=3 ; i++) {
//     let ask=+prompt("HOW MUCH MONEY DO YOU WANT TO WITHDRAW?");
//     if (ask<=balance) {
//         balance -= ask;
//     }else {
//         console.log(`YOUR ASK FOR ${ask} IS NOT APPROVED AS YOUR REMAINING BALANCE IS ${balance}`);
//         break;
//     }
// }
// console.log(`YOUR BALANCE REMAINING IS ${balance}`)

// const arr=[1,2,3,4,5,6]
//     let max=Math.max(...arr);
//     let m2=max-1;
//     let total=max*m2;
//     console.log(total);

// function abcd(){
//   console.log("1 chala");
//   function defg(){
//     console.log("2 CHALA");
//   }
// defg();
// }
// abcd();
