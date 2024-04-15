// populate outer body div
outerDiv = document.querySelector(".outer-body");
outerDiv.style.width = "800px";
outerDiv.style.display = "flex";
outerDiv.style.flexDirection = "column";

// display segment font
display = document.createElement("div");
display.className = "display";
display.style.fontFamily = "Orbitron, 'sans serif'";
display.style.fontSize = "72px";
display.style.flex = "1 1 0";
display.style.textAlign = "right";
display.style.backgroundColor = "#ebe9e6";
display.style.padding = "20px";
display.textContent = "0";


// Keypad area container
keypadContainer = document.createElement("div");
keypadContainer.className = "keypad-container";
keypadContainer.style.flex = "1 1 0";
keypadContainer.style.display = "flex";

// Buttons major div
buttonsContainer = document.createElement("div");
buttonsContainer.className = "button-container";
buttonsContainer.style.flex = "1 1 0";
buttonsContainer.style.display = "flex";
buttonsContainer.style.flexDirection = "column";

// Buttons additional operations div
specialButtonsContainer = document.createElement("div");
specialButtonsContainer.className = "special-buttons-container";
specialButtonsContainer.style.display = "flex";
specialButtonsContainer.style.flexWrap = "wrap";
// AC
clearButton = document.createElement("button");
clearButton.className = "clear special";
clearButton.textContent = "AC";
clearButton.setAttribute("value", "clear");
// +/-
plusMinusButton = document.createElement("button");
plusMinusButton.className = "plus-minus special";
plusMinusButton.textContent = "+/-";
plusMinusButton.setAttribute("value", "invertSign");
// %
percentageButton = document.createElement("button");
percentageButton.className = "percentage special";
percentageButton.textContent = "%";
percentageButton.setAttribute("value", "%");

// Numbers Div
numbersContainer = document.createElement("div");
numbersContainer.className = "numbers-container";
numbersContainer.style.display = "flex";
numbersContainer.style.flexWrap = "wrap";
numbersContainer.style.flexDirection = "row-reverse";
// add numbers
for (let i = 9; i>0; i--) {
    num = document.createElement("button");
    num.className =  "number";
    num.textContent = `${i}`;
    num.style.width = "200px";
    num.style.color = "white";
    num.style.backgroundColor = "black";
    num.setAttribute("value", i.toString());
    numbersContainer.appendChild(num);
}
// add the powerful buttons with their div
powerfulContainer = document.createElement("div");
powerfulContainer.className = "powerful-container";
powerfulContainer.style.display = "flex";
powerfulContainer.style.flexWrap = "wrap";
// add powerful numbers and operations
// the almighty zero
zeroButton = document.createElement("button");
zeroButton.className = "zero powerful";
zeroButton.textContent = "0";
zeroButton.setAttribute("value", "0");
// the powerful "." dot
dotButton = document.createElement("button");
dotButton.className = "dot powerful";
dotButton.textContent = ".";
dotButton.setAttribute("value", ".");
// The final one "="
equalButton = document.createElement("button");
equalButton.className = "equal powerful";
equalButton.textContent = "=";
equalButton.setAttribute("value", "=");

// operation-keys container
operationKeysContainer = document.createElement("div");
operationKeysContainer.className = "operationKeys-container";
operationKeysContainer.style.display = "flex";
operationKeysContainer.style.flexDirection = "column";
// add operations
// add
addButton = document.createElement("button");
addButton.className = "add operationKeys";
addButton.textContent = "+";
addButton.setAttribute("value", "+");
// subtract
subtractButton = document.createElement("button");
subtractButton.className = "subtract operationKeys";
subtractButton.textContent = "-";
subtractButton.setAttribute("value", "-");
// multiply
multiplyButton = document.createElement("button");
multiplyButton.className = "multiply operationKeys";
multiplyButton.textContent = "x";
multiplyButton.setAttribute("value", "x");
// divide
divideButton = document.createElement("button");
divideButton.className = "divide operationKeys";
divideButton.textContent = "/";
divideButton.setAttribute("value", "/");
// backspace
delButton = document.createElement("button");
delButton.className = "delete operationKeys";
delButton.textContent = "DEL";
delButton.setAttribute("value", "delete");


// include
specialButtonsContainer.append(clearButton, plusMinusButton, percentageButton);
powerfulContainer.append(zeroButton, dotButton, equalButton);
operationKeysContainer.append(delButton, subtractButton, multiplyButton, divideButton, addButton);
buttonsContainer.appendChild(specialButtonsContainer);
buttonsContainer.appendChild(numbersContainer);
buttonsContainer.appendChild(powerfulContainer);
keypadContainer.appendChild(buttonsContainer);
keypadContainer.appendChild(operationKeysContainer);



// inclusions
outerDiv.appendChild(display);
outerDiv.appendChild(keypadContainer);


// change button size
buttons = document.querySelectorAll("button");
let classList = [];
Array.from(buttons).map((currentButton) => {
    currentButton.style.fontSize = "64px";
    currentButton.style.padding = "10px";
    currentButton.addEventListener("click", calculation);
    classList.push(currentButton.className);
    if (currentButton.className.includes("special")) {
        currentButton.style.width = "200px";
        currentButton.style.backgroundColor = "orange";
    } else if (currentButton.className.includes("powerful")) {
        currentButton.style.width = "200px";
        if (currentButton.getAttribute("value") === "=") {
            currentButton.style.color = "black";
            currentButton.style.backgroundColor = "MediumSeaGreen";
        } else {
            currentButton.style.color = "white";
            currentButton.style.backgroundColor = "black";
        }
    } else if (currentButton.className.includes("operationKeys")) {
        currentButton.style.width = "200px";
        currentButton.style.backgroundColor = "Tomato";
    }
})
console.table(classList);

function performComputation () {
    let displayString = display.textContent
    let num1
    let num2
    let operator
    let operationResult
    [num1, operator, num2] = displayString.split(" ");
    if (isNaN(num2)) {
        console.warn("Second number not present")
        return
    }
    console.log("Performing", num1, operator, num2)
    num1 = Number(num1)
    num2 = Number(num2)
    if (num2 === 0) {
        console.warn("Cannot divide by zero")
        display.textContent = "BooooM...!"
        return
    }

    switch (operator) {
        case "+":
            operationResult = num1 + num2
            display.textContent = parseFloat(operationResult % 1 ? operationResult.toFixed(6) : operationResult)
            break;
        case "-":
            operationResult = num1 - num2
            display.textContent = parseFloat(operationResult % 1 ? operationResult.toFixed(6) : operationResult)
            break;
        case "/":
            operationResult = num1 / num2
            display.textContent = parseFloat(operationResult % 1 ? operationResult.toFixed(6) : operationResult)
            break;
        case "x":
            operationResult = num1 * num2
            display.textContent = parseFloat(operationResult % 1 ? operationResult.toFixed(6) : operationResult)
            break;

    }
    
}


// manage inputs
// use function style to place code anywhere
function calculation(input) {
    let key = input.target.getAttribute("value")
    // display_screen = document.querySelector("display")
    switch (key) {
        case "clear":
            display.textContent = "0"
            break;
        
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (display.textContent === "0") {
                display.textContent = ""
            }
            display.textContent += input.target.value;
            break;

        case ".":
            let num1
            let num2
            let operator
            [num1, operator, num2] = display.textContent.split(" ");
            console.log(num1, operator, num2)
            if (num2 && !num2.includes(".")) {
                display.textContent += input.target.value;
            }
            if (num1 && !num1.includes(".")) {
                display.textContent += input.target.value;
            }
            break;

        case "+":
        case "-":
        case "x":
        case "/":
            let pattern = /[x\-\+\/]/
            let result = display.textContent.match(pattern) 
            // only '-' is allowed at index 0
            if (result && isNaN(display.textContent)) {
                console.log("display already has operator", result);
                console.log("performing calculation and updating display");
                performComputation();
                display.textContent += ` ${input.target.value} `;
            } else {
                display.textContent += ` ${input.target.value} `;
            }

            break;

        case "invertSign":
            // could also make into another function
            console.log("Inverting sign of display value")
            let displayValue = Number(display.textContent)
            displayValue *= -1;
            display.textContent = displayValue.toString();
            break;

        case "=":
            console.log("performing calculation and updating display");
            performComputation();
            break;

    
        case "%":
            console.log("performing percentage calculation and updating display");
            let num = Number(display.textContent)
            num = num / 100
            display.textContent = num
            break;

        case "delete":
            console.log("deleting a character from input")
            display.textContent = display.textContent.slice(0, display.textContent.length-1)
            if (display.textContent === "") {
                display.textContent = "0"
            }
            break;

        default:
            console.warn(`you pressed ${input.target.value} which is not mapped to any functionality`)
            break;
    }
}