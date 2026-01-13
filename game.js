// --- CONFIGURATION ---
const TILE_SIZE = 32; // Size of one square in pixels
const ROWS = 20;
const COLS = 30;

// --- SETUP CANVAS ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fit the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// --- DATA STRUCTURES ---
// The 'Map' is a 2D array. 
// We are not defining what the numbers mean yet.
let map = [];

// Initialize the Map with Zeros (Empty)
function initMap() {
    for (let r = 0; r < ROWS; r++) {
        let row = [];
        for (let c = 0; c < COLS; c++) {
            row.push(0); 
        }
        map.push(row);
    }
}

// --- INPUT HANDLING ---
// Tracks where the mouse is
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    // Update UI coordinate display
    const gridX = Math.floor(mouseX / TILE_SIZE);
    const gridY = Math.floor(mouseY / TILE_SIZE);
    document.getElementById('coords').innerText = `${gridX}, ${gridY}`;
});

window.addEventListener('mousedown', (e) => {
    const gridX = Math.floor(mouseX / TILE_SIZE);
    const gridY = Math.floor(mouseY / TILE_SIZE);
    
    // Placeholder for "Place Item" logic
    console.log(`Clicked on tile: ${gridX}, ${gridY}`);
    
    // Example: Toggle a number just to see it works
    if(gridX < COLS && gridY < ROWS) {
        map[gridY][gridX] = map[gridY][gridX] === 0 ? 1 : 0;
    }
});

// --- THE GAME LOOP ---
function update() {
    // LOGIC: This is where calculations happen
    // (Moving items, crafting, fuel consumption)
}

function draw() {
    // RENDER: Clear the screen
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the Grid
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            let x = c * TILE_SIZE;
            let y = r * TILE_SIZE;

            // Draw grid outline
            ctx.strokeStyle = "#333";
            ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);

            // Draw content (Visual placeholder)
            if (map[r][c] === 1) {
                ctx.fillStyle = "#666"; // Grey box for now
                ctx.fillRect(x + 2, y + 2, TILE_SIZE - 4, TILE_SIZE - 4);
            }
        }
    }
    
    // Loop
    requestAnimationFrame(draw);
}

// --- START ---
initMap();
// Start the loop. We can add a specialized 'tick' timer later.
setInterval(update, 1000 / 60); // 60 times per second for logic
draw(); // Start rendering
