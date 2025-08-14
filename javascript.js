// Define the grid container
const gridContainer = document.getElementById("grid-container");
// Set variables for grid size and total cells to be used for changing the grid later
let gridSize = 16;
let totalCells = gridSize * gridSize;
// For loop that creates a grid
for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
}
// Event listener that executes a background color change on the element if it has 'grid-cell' class 
gridContainer.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('grid-cell')) {
        e.target.style.backgroundColor = 'black';
    };
});