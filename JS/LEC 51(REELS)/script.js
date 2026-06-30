const reels = [
  {
    username: "rise.and.grind",
    likeCount: "3.8M",
    isLiked: false,
    commentCount: "94K",
    caption: "The hardest worker in the room wins. Stay locked in.",
    video: "./reels/proj.mp4",
    userprofile: "https://i.pinimg.com/736x/42/fb/80/42fb80fbf00d0c0da3640a16462f91ed.jpg",
    shareCount: "1.5M",
    isFollowed: false
},
{
    username: "discipline.daily",
    likeCount: "1.2M",
    isLiked: false,
    commentCount: "32K",
    caption: "Nobody is coming to save you. Start today.",
    video: "./reels/projreels2.mp4",
    userprofile: "https://i.pinimg.com/736x/09/ff/2b/09ff2b85f5c9eda02740cfc135154d98.jpg",
    shareCount: "245K",
    isFollowed: false
},
{
    username: "grindculture",
    likeCount: "2.8M",
    isLiked: true,
    commentCount: "81K",
    caption: "Discipline will take you where motivation never can.",
    video: "./reels/projreels3.mp4",
    userprofile: "https://i.pinimg.com/736x/1b/37/6e/1b376efd334574683266abf4b8951234.jpg",
    shareCount: "1.2M",
    isFollowed: true
},
{
    username: "alphamindset",
    likeCount: "4.3M",
    isLiked: false,
    commentCount: "210K",
    caption: "Wake up. Work hard. Repeat.",
    video: "./reels/projreels4.mp4",
    userprofile: "https://i.pinimg.com/736x/3e/5b/05/3e5b05a1d5bf47a2ba63d8c2a56276b9.jpg",
    shareCount: "2M",
    isFollowed: false
},
{
    username: "beyondlimits",
    likeCount: "3.6M",
    isLiked: true,
    commentCount: "58K",
    caption: "Small progress every day becomes massive results.",
    video: "./reels/projreels5.mp4",
    userprofile: "https://i.pinimg.com/736x/57/8a/da/578ada8e2baa16377ce59a147fe09aa9.jpg",
    shareCount: "720K",
    isFollowed: true
},
{
    username: "relentless",
    likeCount: "2.5M",
    isLiked: false,
    commentCount: "46K",
    caption: "The pain you feel today is the strength you'll have tomorrow.",
    video: "./reels/projreels6.mp4",
    userprofile: "https://i.pinimg.com/736x/42/fb/80/42fb80fbf00d0c0da3640a16462f91ed.jpg",
    shareCount: "610K",
    isFollowed: false
},
{
    username: "ironmentality",
    likeCount: "1.8M",
    isLiked: true,
    commentCount: "27K",
    caption: "Your only competition is the person you were yesterday.",
    video: "./reels/projreels7.mp4",
    userprofile: "https://i.pinimg.com/736x/46/ec/86/46ec8677e45bcee5b3acd02d133256aa.jpg",
    shareCount: "340K",
    isFollowed: true
},
{
    username: "warriorwithin",
    likeCount: "5.7M",
    isLiked: true,
    commentCount: "310K",
    caption: "Dreams don't work unless you do.",
    video: "./reels/projreels8.mp4",
    userprofile: "https://i.pinimg.com/736x/ed/be/fa/edbefac629b89b04099545078a6c6749.jpg",
    shareCount: "2.6M",
    isFollowed: true
},
{
    username: "mindset.mov",
    likeCount: "2.2M",
    isLiked: false,
    commentCount: "39K",
    caption: "Success is earned in silence, not announced.",
    video: "./reels/projreels9.mp4",
    userprofile: "https://i.pinimg.com/736x/6b/1c/39/6b1c3977c861c02cc226cf485513a53e.jpg",
    shareCount: "530K",
    isFollowed: false
},
{
    username: "builtfordreams",
    likeCount: "1.9M",
    isLiked: true,
    commentCount: "21K",
    caption: "One year from now, you'll wish you had started today.",
    video: "./reels/projreels10.mp4",
    userprofile: "https://i.pinimg.com/736x/09/ff/2b/09ff2b85f5c9eda02740cfc135154d98.jpg",
    shareCount: "410K",
    isFollowed: true
}
];

const allReels=document.querySelector('.allreels');
const videos = document.querySelectorAll("video");


function addData(){

  var clutter=''
reels.forEach(function(elem,idx){
  clutter+=`<div class="reels">
          <video loop src="${elem.video}" ></video>
        <div class="bottom">

          <div class="user">
            <img src="${elem.userprofile}" alt="">
            <h4>${elem.username}</h4>
            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
          </div>
          <h3 class="caption">${elem.caption}</h3>
        </div>
        <div class="right">
          <div id=${idx}>
            <h4 class="like-icon">
            ${elem.isLiked?'<i class="love ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</i>
          </h4>
          <h6>${elem.likeCount}</h6>
        </div>
          <div class="comment">
            <h4 class="class-icon"><i class="ri-chat-1-line"></i></h4>
            <h6>${elem.commentCount}</h6>
          </div>
          <div class="share">
            <h4 class="share-icon"><i class="ri-send-ins-line"></i></h4>
            <h6>${elem.shareCount}</h6>
          </div>
           <div class="menu">
            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
          </div>
        </div>
        </div>`
})

allReels.innerHTML=clutter

}
addData();
let scrollTimeout;

allReels.addEventListener("scroll", () => {

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

        const videos = document.querySelectorAll("video");

        const index = Math.round(allReels.scrollTop / allReels.clientHeight);

        videos.forEach((video, i) => {

            if (i === index) {
                video.play();
            } else {
                video.pause();
            }

        });

    }, 150);

});


// allReels.addEventListener("click", function () {

//     const index = Math.round(allReels.scrollTop / allReels.clientHeight);

//     const currentVideo = videos[index];

//     if (currentVideo.paused) {
//         currentVideo.play();
//     } else {
//         currentVideo.pause();
//     }

// });
