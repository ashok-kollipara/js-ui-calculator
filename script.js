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
display.textContent = "8728 + 902 - 453 / 131";


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
addButton.style.flex = "1";
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


// include
specialButtonsContainer.append(clearButton, plusMinusButton, percentageButton);
powerfulContainer.append(zeroButton, dotButton, equalButton);
operationKeysContainer.append(subtractButton, multiplyButton, divideButton, addButton);
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


// manage inputs
// use function style to place code anywhere
function calculation(input) {
    key = input.target.getAttribute("value")
    display_screen = document.querySelector("display")
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
            if (!display.textContent.includes(".")) {
                display.textContent += input.target.value;
            }
            break;

        case "+":
        case "-":
        case "x":
        case "/":
            let pattern = /[x\-\+\\]/
            let result = display.textContent.match(pattern) 
            if (result) {
                console.log("display already has operator", result);
            } else {
                display.textContent += input.target.value;
            }

            break;

    
        default:
            console.warn(`you pressed ${input.target.value} which is not mapped to any functionality`)
            break;
    }
}