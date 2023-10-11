import React, { useEffect, useRef } from 'react';

function Animation() {
    const containerRef = useRef(null);
    useEffect(() => {

        console.log('Script Loaded');
        const container = containerRef.current;
        if (!container) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const titleDiv = document.createElement('div');
        titleDiv.id = 'titleDiv';

        // Set canvas size to match the container
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;

        // Append canvas and title div to the container
        container.appendChild(canvas);
        container.appendChild(titleDiv);

        let mapResolution = 10000;
        let colorMap = [];
        let velocityMap = [];
        let sampleMap = [];

        function updateColorMap() {
            const newColorMap = [];
            for (let y = 0; y < mapResolution; y++) {
                newColorMap.push([])
                for (let x = 0; x < mapResolution; x++) {
                    const sx = x - velocityMap[y][x][0];
                    const sy = y - velocityMap[y][x][1];
                    newColorMap[y].push(sampleMap(colorMap, sx, sy));
                }
            }
            colorMap = newColorMap;
        }


        // Start the animation loop
        // Start the animation loop with initial speed
        let start = performance.now();
        let delay = 20; // Delay between frames in milliseconds

        function startAnimation(timestamp) {
            if (timestamp - start >= delay) {
                updateColorMap();
                start = timestamp;
            }

            requestAnimationFrame(startAnimation);
        }

        startAnimation(performance.now());

    }, []);

    return <div style={{ width: '100vw', height: '100vh' }} ref={containerRef}></div>;
}

export default Animation;

