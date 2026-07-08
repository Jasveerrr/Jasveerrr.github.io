var arr = [
  {
    name: "f1 motivation",
    image: "https://i.pinimg.com/736x/6a/89/b3/6a89b394b515d749f7df5741f5f17399.jpg"
  },
  {
    name: "funny meme",
    image: "https://i.pinimg.com/474x/d6/12/26/d6122644fbacc22fc0d342c68639cfb8.jpg"
  },
  {
    name: "f1 god",
    image: "https://i.pinimg.com/736x/00/9d/47/009d47f4e5bd21029e7b253681cfacfb.jpg"
  },
  {
    name: "football motivation",
    image: "https://i.pinimg.com/736x/e8/d3/78/e8d3787cb3156ce8f8567f7b9ef35709.jpg"
  },
  {
    name: "ronaldo",
    image: "https://i.pinimg.com/736x/47/68/94/4768943d51cc646f84ae65b754d51ee6.jpg"
  },
  {
    name: "cristiano ronaldo",
    image: "https://i.pinimg.com/736x/74/b8/23/74b8237eee074f6ee0fcbde4c9cbe0d5.jpg"
  },
  {
    name: "messi neymar",
    image: "https://i.pinimg.com/736x/8e/2e/e5/8e2ee5f87b9a019d88e454b7d7bb0173.jpg"
  },
  {
    name: "punjab",
    image: "https://i.pinimg.com/736x/6a/b3/cb/6ab3cbd4bb0f70f257eaad20af53745c.jpg"
  },
  {
    name: "golden temple night",
    image: "https://i.pinimg.com/736x/ec/17/bb/ec17bb2cb1f8de69b790581ef364c863.jpg"
  },
  {
    name: "golden temple",
    image: "https://i.pinimg.com/736x/2b/97/0f/2b970ff3211305d6825ab84689ac10ca.jpg"
  },
  {
    name: "sikh aesthetic",
    image: "https://i.pinimg.com/736x/73/9e/e9/739ee9a3b4e54737159116e6ead502e6.jpg"
  },
  {
    name: "ferrari aesthetic",
    image: "https://i.pinimg.com/736x/95/fc/5e/95fc5e3a24bd540c4d48416b06aeae3b.jpg"
  }
];


const img=document.querySelector(".container");

var clutter="";
arr.forEach(function(obj){
    clutter +=`
    <div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">${obj.name}</div>
    </div>
    `
})

img.innerHTML=clutter;


const search=document.querySelector("#searchinput")
const overlay=document.querySelector(".overlay")
const searchData = document.querySelector(".searchdata");

search.addEventListener("focus",function(){
    overlay.classList.remove('hidden')
})
overlay.addEventListener("click", function(){
    overlay.classList.add("hidden")
    searchData.style.display="none"

})

search.addEventListener("input", function(){
  let clutter2 = "";


    let value = search.value.toLowerCase();

    let filteredarr = arr.filter(function(val){
        return val.name.toLowerCase().includes(value);
    });
    

    filteredarr.forEach(function(obj){
        clutter2 += `
        <div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`;
      });
    searchData.style.display = "block";
    searchData.innerHTML=clutter2

})
