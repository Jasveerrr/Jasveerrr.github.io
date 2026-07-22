async function getWeather(city) {
  try {
  let apikey=`208a32a7ee8c41f2f0b2abcbe23edf9d`;
  let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
  let res= await data.json();
  console.log(res);
  } catch (err) {
   console.log('BHADVE SAHI SE LIKH LE'); 
  }
}

getWeather("MUMBAI")