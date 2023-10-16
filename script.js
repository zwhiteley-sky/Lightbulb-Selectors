let count = 0;

const lightbulb_message = document.querySelector(".subtitle");

for (const lightbulb of document.getElementsByClassName("lightbulb")) {
    lightbulb.addEventListener("click", () => {
        lightbulb.classList.toggle("active");
        lightbulb_message.textContent = `You've clicked the lights ${++count}`;

        if (count === 1) lightbulb_message.textContent += " time";
        else lightbulb_message.textContent += " times";
    });
}