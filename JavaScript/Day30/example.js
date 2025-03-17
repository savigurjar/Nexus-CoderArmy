fetch(
    "http://api.weatherapi.com/v1/current.json?key=2f9d642bb14b425387171813252001&q=London&aqi=yes"
  )
    .then((response) => response.json()) //arrow fun me same only one ke liye return krne ki need nhi hoti
    .then((data) => console.log(data.current.temp_f))
    .catch((error) => console.log(error)); //catch ek bar hi  lgana h