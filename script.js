function calculators(a, b, operator){
    switch(operator){
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            return "Masukkan ulang!";
            break;
    }
}

let hitung1 = calculators(10, 30, "+");
console.log(hitung1);

let currentInput = '';
let operator = '';
let previousInput= '';

document.querySelector(".btn-container").addEventListener('click', (e) => {
    const value = e.target.dataset.value;
    const content = document.querySelector(".content");

    if(!value) return;

    if(!isNaN(value)){
        currentInput += value;
        console.log('Angka ditekan: ', value);
        console.log('current input: ', currentInput);
        content.textContent = currentInput;
    }else if(['+', '-', '*', '/'].includes(value)){
        previousInput = currentInput;
        operator = value;
        currentInput = '';
        console.log('operator: ', operator);
        console.log('previous input', previousInput);
        content.textContent = operator;
    }else if(value === '='){
        const a = parseFloat(previousInput);
        const b = parseFloat(currentInput);
        
        if(operator === '+') currentInput = String(a + b);
        if(operator === '-') currentInput = String(a - b);
        if(operator === '*') currentInput = String(a * b);
        if(operator === '/') currentInput = String(a / b);
        
        console.log('Hasil: ', currentInput);
        content.textContent = currentInput;
        previousInput = '';
        operator = '';
    }

    if(value === "C"){
        currentInput = '';
        previousInput = '';
        operator = '';
        content.textContent = "0";
    }
});
