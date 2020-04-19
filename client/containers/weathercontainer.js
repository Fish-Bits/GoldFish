// import React, { useState } from 'react';

// const api = {
//   key: "65118a1874eef31ac222ec8064b0b161",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// function Weather() {
//   const [query] = useState('');
//   const [weather, setWeather] = useState({});

//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then(res => res.json())
//         .then(result => {
//           setWeather(result);
//           // let descValue = result['weather'][0]['description'];
//           // let tempValue = result['main']['temp'];
          
//           console.log(result);
//         });
//     }
//   return (
//     <div className={
//       ((weather.main.temp > 16) ? 'weather warm' : 'app')}> 
//     </div>
//   );
// };


// export default Weather;