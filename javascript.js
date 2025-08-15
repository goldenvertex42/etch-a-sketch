// Define the grid container
const gridContainer = document.getElementById("grid-container");
// Set variables for grid size and total cells to be used for changing the grid later
const gridSize = 16;
const totalCells = gridSize * gridSize;
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

const changeGridButton = document.getElementById("new-grid");

changeGridButton.addEventListener('click', () => {
    
    const gridSize = parseInt(window.prompt('How many squares per side for the new grid?'));
    const totalCells = gridSize * gridSize;

    if (gridSize && !isNaN(gridSize) && parseInt(gridSize) > 0) {
        gridContainer.innerHTML = '';
        
        const containerWidth = gridContainer.clientWidth;
        const itemSize = containerWidth / gridSize;

        for (let i = 0; i < parseInt(totalCells); i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.style.width = `${itemSize}px`;
            cell.style.height = `${itemSize}px`;
            gridContainer.appendChild(cell);
    }} else if (gridSize && !isNaN(gridSize) && parseInt(gridSize) >= 101) {
        alert('Please enter a number less than or equal to 100');
    } else {
        alert('Please enter a valid positive number');
    }
    
});