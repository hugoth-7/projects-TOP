const container = document.querySelector("#container");
const btnGrid = document.querySelector(".btnSquares");
const textDimensions = document.querySelector(".dimension p");

let numSquares = 16;

gridFill(numSquares);

btnGrid.addEventListener('click', grid => {

    do {
        numSquares = Number(prompt("Enter desire picture grid:\n The number must be between 1 and 100 includive: "));
    } while (
        numSquares < 1 ||
        numSquares > 100 ||
        !Number.isInteger(numSquares)
    );

    textDimensions.textContent = `${numSquares}x${numSquares}`;
    container.replaceChildren();
    gridFill(numSquares);
});

function gridFill(numSquares){
    const squareDim = 490 / numSquares;4
    for(let i = 0; i<numSquares * numSquares; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareDim}px`;
        square.style.height = `${squareDim}px`;
        container.appendChild(square);
    }
}

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = randomColor();
    }
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


