// function afterDelay(time,callback){
//   console.log("Fetching Details...");
//   setTimeout(() => {

    
//     callback();
//   }, time);
// }
// afterDelay(2000,function(){
//   console.log("Callback executed");
// })


// function getUser(username,cb) {
//   setTimeout(() => {
//     cb({
//       id:"1313",
//       username:username,
//     }  
// )
//   }, 1000);
// }
// function getUserPosts(id, callb) {
//   setTimeout(() => {
//     callb([
//   { id: 1, title: "My first post" },
//   { id: 2, title: "Learning JavaScript" }
// ])
//   }, 1000);
// }
// getUser("based.jasveer",function(user){
//   getUserPosts(user.id,function (allposts) {
//     console.log(user.username,allposts);
//   })
// })