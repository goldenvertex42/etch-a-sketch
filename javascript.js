const gridContainer = document.getElementById("grid-container");
const gridSize = 16;
const totalCells = gridSize * gridSize;

for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    gridContainer.appendChild(cell);
}



gridContainer.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('grid-cell')) {
        e.target.style.backgroundColor = 'black';
    };
});