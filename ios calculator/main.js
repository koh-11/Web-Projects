const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
let historyDisplay = document.querySelector(".history")


//function to calculate based on buttons clicked
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== ""){
        historyDisplay.innerHTML = output;

        //when output has "%", replace it with "/100" before evaluating
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
        historyDisplay.innerHTML = ""
    } else if (btnValue === "DEL") {
        //when del button is clicked, the last character gets removed from the output
        output = output.toString().slice(0, -1);
    } else{
        //when the output is empty and button clicked is specialChars it will return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};


//add an event listener to buttons and call calculate() function on click
for(let button of buttons) {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
}