const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const pRed = document.createElement("p");
pRed.style.color = "red";
pRed.textContent = "Hey I'm red";
container.appendChild(pRed);

const hBlue = document.createElement("h3");
hBlue.style.color = "blue";
hBlue.textContent = "I'm a blue h3!";
container.appendChild(hBlue);

const nDiv = document.createElement("div");
nDiv.style.cssText = "border: 1px solid black; background-color: pink;"

const nH3 = document.createElement("h3");
nH3.textContent = "I'm in a div";
nDiv.appendChild(nH3);

const nP = document.createElement("p");
nP.textContent = "ME TOO!";
nDiv.appendChild(nP);

container.appendChild(nDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello mammaa");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
    alert("The last one!");
})

btn2.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
})

btn2.addEventListener("click", (e) => {
    e.target.style.background = "blue";
})

const butlist = document.querySelectorAll("button");

butlist.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
