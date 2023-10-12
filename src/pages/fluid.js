/*
Copyright (c) 2023 by kynd (https://codepen.io/kynd/pen/jOXZXWB)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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

        let colorMap, velocityMap;
        let mapDisplaySize, mapResolution, gridSize;

        function setup() {
            frameRate(5);
            // Initialize canvas and map settings
            createCanvas(windowWidth, windowHeight)
            mapDisplaySize = Math.min(width, height);
            mapResolution = 48;
            gridSize = mapDisplaySize / mapResolution;

            initialize();
        }

        function mousePressed() {
            // On mouse press, re-render
            initialize();
        }

        function draw() {
            background(255);
            const xOffset = (width - mapDisplaySize) / 2;
            const yOffset = (height - mapDisplaySize) / 2;
        }
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

