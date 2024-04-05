fetch("https://goweather.herokuapp.com/weather/%7Bcity%7D")//ek wheather ki dummy api daal di hai
  .then(data1 => {
    return data1.json();
  })
  .then(data2 => {
    console.log(data2);
  });