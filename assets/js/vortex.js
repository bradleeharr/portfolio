document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bg-video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const titleDiv = document.createElement('div');
    titleDiv.id = 'titleDiv';

    const totalCells = 150000;

    let canvasWidth = container.clientWidth;
    let canvasHeight = container.clientHeight;
    let cellSize = Math.sqrt((canvasWidth * canvasHeight) / totalCells);


    let width = Math.floor(container.clientWidth / cellSize);
    let height = Math.floor(container.clientHeight / cellSize);

    let grid = createGrid(width, height);
    let nextGrid = createGrid(width, height);

    let waveAmplitude = 30000;
    let columnsToUpdate = 1000;
    let updateCounter = 0;

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

        grid = createGrid(width, height);
        grid.forEach(row => {
            row.forEach((cell, index) => {
                row[index] = Math.random() + Math.random() < 0.3;
            });
        });
        nextGrid = createGrid(width, height);
        nextGrid.forEach(row => {
            row.forEach((cell, index) => {
                row[index] = Math.random() + Math.random() < 0.3;
            });
        });
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
                    if (y%2 ||  x%2 == 1) {
                        ctx.fillStyle = 'rgba(51, 20, 128, 1.0)';
                    }
                    else {
                        ctx.fillStyle = 'rgba(51,51,140,1.0)';
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
                nextGrid[y][columnToUpdate] = (Math.random() < 0.001 || neighbors === 3 || neighbors === 2 && grid[y][columnToUpdate]);
            }
            // Copy the updated column from nextGrid to grid
            for (let y = 0; y < height; y++) {
                grid[y][columnToUpdate] = nextGrid[y][columnToUpdate];
            }
        }

        if ((updateCounter > 200 && Math.random() > 0.90) || (updateCounter > 300 && Math.random() > 0.4)) {
            for (let i2 = 0; i2 < columnsToUpdate; i2++) {
                for (let y2 = 0; y2 < height; y2++) {
                    grid[y2][i2] = Math.random() + Math.random() < 0.3;
                }
            }
            updateCounter = 0;
        }

        render(grid);

        updateCounter++;
    }

    // Initialize the grid with random values
    grid.forEach(row => {
        row.forEach((cell, index) => {
            row[index] = Math.random() + Math.random() < 0.3;
        });
    });

    // Start the animation loop
    // Start the animation loop with initial speed
    let start = performance.now();
    let delay = 60; // Delay between frames in milliseconds

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
