document.addEventListener("DOMContentLoaded", function() {
    const screen = document.getElementById("screen");
    let currentInput = "";

    function updateScreen() {
        screen.textContent = currentInput || "0";
    }

    document.querySelectorAll(".digit, .operator").forEach(button => {
        button.addEventListener("click", function() {
            const value = button.textContent;
            if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                } catch (error) {
                    currentInput = "Error";
                }
            } else if (value === "C") {
                currentInput = "";
            } else if (value === "←") {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput += value;
            }
            updateScreen();
        });
    });
});
