// const gridButton = document.querySelector(".grid")
// const container = document.querySelector(".container")
// let input = 0
// gridButton.addEventListener('click', () => {
//     input = prompt("What size grid do you need");
//     // console.log('Input------->', typeof input, Number(input));
//     if (Number(input) && Number(input) <= 100 ) {
//         console.log(input)
//         for (i=0; i < input; i++){
//             const container = document.getElementById('container1'); // Replace with your actual container ID
//             const newDiv = document.createElement('div');
//             // container.parentNode.insertBefore(newDiv, container.nextSibling)
//             newDiv.textContent = 'This is the new div content';
//         }
//     } else {
//         alert("Please enter a valid number");
//     }
// })

function createGrid() {
    // Get the grid size input
    const gridSize = document.getElementById('gridSizeInput').value;
    
    // Get the grid container
    const gridContainer = document.getElementById('gridContainer');
    
    // Clear any existing grid items
    gridContainer.innerHTML = '';
    
    // Set grid template columns and rows based on the grid size
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    // Create grid items
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = i + 1;
        gridContainer.appendChild(gridItem);
    }
}