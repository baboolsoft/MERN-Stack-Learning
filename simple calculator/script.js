document.addEventListener("DOMContentLoaded", () =>{

    const inputs = document.querySelectorAll(".calc-input");
    const buttons = document.querySelectorAll(".calc-btn")
    const output = document.getElementById("output");

buttons.forEach((btn) => {
btn.addEventListener("click", () => {
const a = Number(inputs[0].value);
const b = Number(inputs[1].value);
let result;

switch (btn.textContent){
case "+": result = a + b; break;
case "-": result = a - b; break;
case "*": result = a * b; break;
case "/": result = b !== 0 ? a / b: "Error"; break;
}

output.textContent = "Output =" + result;
});



});

});