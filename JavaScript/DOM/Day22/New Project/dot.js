document.body.addEventListener("click", (event) => {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.innerHTML = "&#128538"; // Proper emoji rendering
    // circle.innerHTML = "&#129297"; // Proper emoji rendering
  
    const x = event.clientX;
    const y = event.clientY;
  
    circle.style.position = "absolute";
    circle.style.left = `${x-25}px`;
    circle.style.top = `${y-25}px`;
  
    // Background colors
    const back = ["red", "blue", "green", "yellow", "brown", "pink", "purple"];
    circle.style.backgroundColor = back[Math.floor(Math.random() * back.length)];
  
    document.body.appendChild(circle);
    
    setTimeout(() => {
      circle.remove();
    }, 5000);
  });
  