// populate outer body div
outerDiv = document.querySelector(".outer-body");
outerDiv.style.width = "600px";
outerDiv.style.display = "flex";
outerDiv.style.flexDirection = "column";

// display segment
display = document.createElement("div");
display.className = "display";
display.style.fontFamily = "Orbitron, 'sans serif'";
display.style.fontSize = "32px";
display.style.flex = "1 1 0";
display.style.textAlign = "right";
display.style.backgroundColor = "#ebe9e6";
display.style.padding = "20px";
display.textContent = "8728 + 902 - 453 / 131";


// Buttons major div
buttonsContainer = document.createElement("div");
buttonsContainer.className = "button-container";
buttonsContainer.style.flex = "1 1 0";
buttonsContainer.style.display = "flex";
buttonsContainer.style.flexDirection = "column";

// Buttons additional operations div
specialButtonsContainer = document.createElement("div");
specialButtonsContainer.className = "special-buttons-container";
// AC
clearButton = document.createElement("button");
clearButton.className = "clear special";
clearButton.textContent = "AC";
percentageButton.setAttribute("value", "clear");
// +/-
plusMinusButton = document.createElement("button");
plusMinusButton.className = "plus-minus special";
plusMinusButton.textContent = "+/-";
percentageButton.setAttribute("value", "invertSign");
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

// include
specialButtonsContainer.append(clearButton, plusMinusButton, percentageButton);
buttonsContainer.appendChild(specialButtonsContainer);
buttonsContainer.appendChild(numbersContainer);



// inclusions
outerDiv.appendChild(display);
outerDiv.appendChild(buttonsContainer);


// change button size
buttons = document.querySelectorAll("button");
let classList = [];
Array.from(buttons).map((currentButton) => {
    currentButton.style.fontSize = "64px";
    currentButton.style.padding = "10px";
    classList.push(currentButton.className);
    if (currentButton.className.includes("special")) {
        currentButton.style.width = "200px";
        currentButton.style.backgroundColor = "orange";
    }
})
console.table(classList);