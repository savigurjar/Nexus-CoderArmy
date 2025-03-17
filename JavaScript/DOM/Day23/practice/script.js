

// const root = document.getElementById("container");

// root.addEventListener("click", (event) => {
//     if (event.target.tagName === "BUTTON") {
//         document.body.style.backgroundImage = getComputedStyle(event.target).backgroundImage;
//     }
// });

const container = document.getElementById("container");

container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const imgUrl = getComputedStyle(event.target).backgroundImage;

        // Create full-screen image
        const fullImage = document.createElement("div");
        fullImage.classList.add("full-image");
        fullImage.style.backgroundImage = imgUrl;

        // Hide the gallery
        container.style.display = "none";
        document.body.appendChild(fullImage);

        // Click to exit full image mode
        fullImage.addEventListener("click", () => {
            fullImage.remove();
            container.style.display = "flex"; // Show gallery again
        });
    }
});
