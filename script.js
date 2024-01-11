const colors = ["red", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c", "#d35400", "#27ae60", "#c0392b", "#f1c40f"];
const shapes = ["circle", "rectangle", "diamond", "star","hexagon"];

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function changeColor() {
    const shapeElement = document.getElementById("shape");
    const randomColor = colors[getRandomIndex(colors)];
    shapeElement.style.backgroundColor = randomColor;
}

function changeShape() {
    const shapeElement = document.getElementById("shape");
    const randomShape = shapes[getRandomIndex(shapes)];
    shapeElement.className = "shape";
    shapeElement.classList.add(randomShape);
}
