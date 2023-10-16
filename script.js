let count = 0;

const lightbulb_message = document.querySelector(".subtitle");

function lightbulb_handler(ev) {
    // Turn off all other lights
    const active_lightbulbs = document.querySelectorAll(".lightbulb.active");

    if (active_lightbulbs.length !== 1) {
        alert("An error occurred");
        return;
    }

    const lightbulb = ev.target;
    const active_lightbulb = active_lightbulbs[0];

    // Don't do anything if clicking on an active lightbulb
    if (active_lightbulb === lightbulb) return;


    // Activate the target
    active_lightbulb.classList.remove("active");
    lightbulb.classList.add("active");
    lightbulb_message.textContent = `You've clicked the lights ${++count}`;

    if (count === 1) lightbulb_message.textContent += " time";
    else lightbulb_message.textContent += " times";

}

for (const lightbulb of document.getElementsByClassName("lightbulb")) {
    lightbulb.addEventListener("click", lightbulb_handler);
}