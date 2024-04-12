const buttons = document.querySelectorAll(".buttons");
const dispText = document.querySelector(".disp-text");
const resultText = document.querySelector(".result");

let track = 0;
let temp = '';

const clearText = () => {
    dispText.innerText = "";
}
const clearTextAll= ()=>{
    resultText.innerText = 0;
    dispText.innerText = "";
}
const evaluateExpression = (expression) => {
    try {
        return eval(expression);
    } catch (error) {
        return "Error";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;
        
        if (buttonText === 'C') {
            clearText();
            temp = '';
            track = 0;
        }
        else if (buttonText === 'AC') {
            clearTextAll();
            temp = '';
            track = 0;
        } 
        else if (buttonText === '=') {
            resultText.innerText = evaluateExpression(dispText.innerText);
        } else {
            if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
                if (track === 1) {
                    resultText.innerText = evaluateExpression(dispText.innerText);
                    dispText.innerText = resultText.innerText;
                    track = 0;
                }
                track = 1;
            }

            dispText.innerText += buttonText;
            temp += buttonText;
        }
    });
});
