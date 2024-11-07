const display = document.querySelector(".displayinput"); 
const buttons = document.querySelectorAll("button");
const chars = ["%", "/", "+", "-", "*"];

let result = "";

const calc = (btnValue) => {
    if (btnValue === "=" && result !== "") {
        
        try {
            result = eval(result.replace("%", "/100"));
        } catch {
            result = "Error";
        }
    } else if (btnValue === "AC") {
        
        result = "";
    } else if (btnValue === "DEL") {
       
        result = result.toString().slice(0, -1);
    } else {
        
        if (result === "" && chars.includes(btnValue)) return;
        result += btnValue;
    }
    display.value = result; 
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calc(e.target.getAttribute("data-value")));
});
