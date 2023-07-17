document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bg-video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const titleDiv = document.createElement('div');
    titleDiv.id = 'titleDiv';

    const totalCells = 100000;

    let canvasWidth = container.clientWidth;
    let canvasHeight = container.clientHeight;
    let cellSize = Math.sqrt((canvasWidth * canvasHeight) / totalCells);


    let width = Math.floor(container.clientWidth / cellSize);
    let height = Math.floor(container.clientHeight / cellSize);

    let grid = createGrid(width, height);
    let nextGrid = createGrid(width, height);

    let waveAmplitude = 30000;
    let columnsToUpdate = width;
    
    let updateCounter = 0;
    let stopPopTime = 2;
    let resetTime = 250;
    let dePopTime = 60;
    let randAmt = 0.3;
    // Set canvas size to match the container
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Append canvas and title div to the container
    container.appendChild(canvas);
    container.appendChild(titleDiv);

    ctx.globalAlpha = 1.0;

    // Recalculate on resize
    window.addEventListener('resize', () => {
        canvasWidth = container.clientWidth;
        canvasHeight = container.clientHeight;
        cellSize = Math.sqrt((canvasWidth * canvasHeight) / totalCells);
        width = Math.floor(container.clientWidth / cellSize);
        height = Math.floor(container.clientHeight / cellSize);

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
    });

    function createGrid(width, height) {
        return new Array(height).fill(null).map(() => new Array(width).fill(false));
    }

    function countNeighbors(grid, x, y) {
        let count = 0;
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                if (dx !== 0 || dy !== 0) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        count += grid[ny][nx] ? 1 : 0;
                    }
                }
            }
        }
        return count;
    }

    function render(grid) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let y = 0; y < height; y++) {
            waveAmplitude = (waveAmplitude + 1) % 1;
            for (let x = 0; x < width; x++) {
                if (grid[y][x]) {
                    if (Math.sin(2*x+y) > 0.5) {
                        ctx.fillStyle = 'rgba(150, 75, 200, 1.0)';
                    }
                    else {
                        ctx.fillStyle = 'rgba(75,150,200,1.0)';
                    }
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }
    }

    function update() {
        ctx.fillStyle = 'rgba(255,1,1,1.0)'
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < columnsToUpdate; i++) {
            
            for (let y = 0; y < height; y++) {
                offset = Math.sin(updateCounter) * waveAmplitude + Math.cos(updateCounter) * waveAmplitude + Math.sin(updateCounter*1.5) * waveAmplitude;
                columnToUpdate = (Math.round(updateCounter + offset) + i) % width;
                const neighbors = countNeighbors(grid, columnToUpdate, y);
                nextGrid[y][columnToUpdate] = ( neighbors > 6 || neighbors === 3 || neighbors === 2 && grid[y][columnToUpdate]);
                if (updateCounter < stopPopTime) {
                    let random_num = Math.random();
                    if (y > 0) nextGrid[y-1][columnToUpdate] |= (random_num < 0.05);
                    if (columnToUpdate < columnsToUpdate) nextGrid[y][columnToUpdate+1] |= (random_num < 0.01);
                    if (columnToUpdate+1 < columnsToUpdate) nextGrid[y][columnToUpdate+2] |= (random_num < 0.007);
                    if (columnToUpdate+2 < columnsToUpdate) nextGrid[y][columnToUpdate+3] |= (random_num < 0.006);
                    if (columnToUpdate+3 < columnsToUpdate) nextGrid[y][columnToUpdate+4] |= (random_num < 0.9);
                }
                if (updateCounter > resetTime - dePopTime) {
                    let random_num = Math.random();
                    nextGrid[y][columnToUpdate] = ((neighbors == 1 && Math.random() > 0.98) || neighbors == 4 || neighbors === 3 || neighbors === 2) && Math.random() > 0.5375;
                }               
            }
            // Copy the updated column from nextGrid to grid
            for (let y = 0; y < height; y++) {
                grid[y][columnToUpdate] = nextGrid[y][columnToUpdate];
            }
        }

        if ((updateCounter > resetTime && Math.random() > 0.90) || (updateCounter > resetTime*1.5 && Math.random() > 0.4)) {
            updateCounter = stopPopTime;
        }

        render(grid);
        updateCounter++;
    }

    // Initialize the grid with random values
    grid.forEach(row => {
        row.forEach((cell, index) => {
            row[index] = Math.random() + Math.random() < randAmt;
        });
    });

    // Start the animation loop
    // Start the animation loop with initial speed
    let start = performance.now();
    let delay = 20; // Delay between frames in milliseconds

    function startAnimation(timestamp) {
        if (timestamp - start >= delay) {
            update();
            start = timestamp;
        }

        requestAnimationFrame(startAnimation);
    }

    startAnimation(performance.now());

    // After 60 seconds, slow down the animation
    //setInterval(() => {
    //    delay += 1; // Longer delay, slower animation
    //}, 60); // 60 milliseconds =  
});
