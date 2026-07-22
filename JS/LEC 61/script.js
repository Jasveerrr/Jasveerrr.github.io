// let prm =new Promise((resolve,reject)=>{
//   console.log("PROMISE PENDING");
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// })
// prm
// .then(()=>{
//   console.log("APRROVEED");
// })
// .catch(()=>{
//   console.log("REJECTED");
// })

async function abcd() {
  let raw= await fetch(`https://randomuser.me/api/`);
  let data= await raw.json();
  console.log(data.results[0].name.first);
}
abcd();