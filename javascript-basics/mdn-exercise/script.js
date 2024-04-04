const ul = document.querySelector("ul");
const input = document.querySelector("input");

function appendNewLI(value){
    const newLI = document.createElement("li");

    const liSpanTab = document.createElement("span");
    liSpanTab.textContent = value;

    const liButton = document.createElement("button");
    liButton.textContent = "Delete";

    liButton.addEventListener("click", () => {
        newLI.remove();
        input.focus();
    });
 
    newLI.appendChild(liSpanTab);
    newLI.appendChild(liButton);
    ul.appendChild(newLI);
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    const val = document.querySelector("input").value;
    appendNewLI(val);
});
