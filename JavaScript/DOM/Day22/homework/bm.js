document.getElementById("b1").addEventListener("click", () => {
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    const result = document.getElementById("result");

    if (height > 0 && weight > 0) {
        const bmi = weight / ((height / 100) * (height / 100));
        result.textContent = "Your BMI is: " + bmi.toFixed(2);
    } else {
        result.textContent = "Please enter valid height and weight!";
    }
});

// Clear button functionality
document.getElementById("b2").addEventListener("click", () => {
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").textContent = "";
});


