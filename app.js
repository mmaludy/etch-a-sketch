let container = document.getElementById("container");



function addElement() {
    const newDiv = document.createElement("div");
    newDiv.className = "box";
    document.getElementById("container").appendChild(newDiv);
}

for (let i = 0; i < 256; i++) {
    addElement();
}


/*
container.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "purple";
})

*/