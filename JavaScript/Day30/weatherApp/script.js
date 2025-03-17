const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  // Access value
  const place = document.getElementById("location").value; // Use .value

  function updateTemp(data) {
    const ele = document.getElementById("weatherInfo"); 
    if (data.error) {
      ele.innerHTML = `Error: ${data.error.message}`; // Handle errors
    } else {
      ele.innerHTML = `Today's Temperature: ${data.current.temp_c}°C`;
    }
  }

  const apiKey = "2f9d642bb14b425387171813252001"; 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&aqi=yes`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => updateTemp(data))
    .catch((error) => {
      console.error("Fetch error:", error);
    });
});

