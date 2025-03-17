function timing() {
    const d1 = new Date();
    const d2 = new Date("2028-07-14T00:00:00"); // Set to midnight of the Olympics date
    const dateDiff = d2 - d1;

    // Calculate remaining time
    const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((dateDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((dateDiff / 1000) % 60);

    // Get Indian time
    const now = new Date();
    const IndianTime = now.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

    // Display countdown and current time
    const timer = document.getElementById("root");
    timer.innerHTML = `
        <div>
            <p>Countdown to Olympics 2028</p>
            <p>${days} Days ${hours}h ${minutes}m ${seconds}s</p>
            <p>Current Indian Time: ${IndianTime}</p>
        </div>
    `;
}

// Update every second
setInterval(timing, 1000);

document.getElementById("root").style.cssText = `
    font-size: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
`;
