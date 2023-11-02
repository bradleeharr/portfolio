/*
Copyright (c) 2023 by kynd (https://codepen.io/kynd/pen/jOXZXWB)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
function Animation() {
    const containerRef = useRef(null);
  
    useEffect(() => {
      let sketch = (p) => {
        let colorMap, velocityMap;
        let mapDisplaySize, mapResolution, gridSize;
  
        p.setup = () => {
          p.frameRate(30);
          // Initialize canvas and map settings
          p.createCanvas(p.windowWidth, p.windowHeight);
          mapDisplaySize = Math.min(p.width, p.height);
          mapResolution = 100;
          gridSize = mapDisplaySize / mapResolution;
  
          initialize();
        };
  
        p.mousePressed = () => {
          initialize();
        };

        p.windowResized = () => {
            // Update canvas size
            p.resizeCanvas(p.windowWidth, p.windowHeight);
            
            // Update any other properties that depend on canvas size
            mapDisplaySize = Math.min(p.width, p.height);
            gridSize = mapDisplaySize / mapResolution;
        };
  
        p.draw = () => {
          p.background(255);
          const xOffset = (p.width - mapDisplaySize) / 2;
          const yOffset = (p.height - mapDisplaySize) / 2;
          renderColorMap(xOffset, yOffset);
          renderVelocityMap(xOffset, yOffset);
          updateColorMap();
        };

        function renderColorMap(xOffset, yOffset) {
            p.noStroke();
            for (let y = 0; y < mapResolution; y++) {
                for (let x = 0; x < mapResolution; x++) {
                    p.fill(arrayToColor(colorMap[y][x]));
                    p.rect(xOffset + gridSize * x, yOffset + gridSize * y, gridSize, gridSize);
                }
            }
        }

        function renderVelocityMap(xOffset, yOffset) {
            p.noFill();
            p.stroke(0);
            for (let y = 0; y < mapResolution; y++) {
                for (let x = 0; x < mapResolution; x++) {
                    const cx = xOffset + gridSize * x + gridSize * 0.5;
                    const cy = yOffset + gridSize * y + gridSize * 0.5;
                    const g = velocityMap[y][x];
                    drawArrow(cx - g[0] * gridSize * 0.25, cy - g[1] * gridSize * 0.25, cx + g[0] * gridSize * 0.25, cy + g[1] * gridSize * 0.25);
                }
            }
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

        function arrayToColor(arr) {
            return p.color(arr[0] * 255, arr[1] * 255, arr[2] * 255);
        }

        function lerpArrays(arrayA, arrayB, t) {
            const newArray = [];
            for (let i = 0; i < arrayA.length; i++) {
                newArray.push(arrayA[i] * (1 - t) + arrayB[i] * t);
            }
            return newArray;
        }

        // Sample the color interpolating 4 cells around the specified point
        function sampleMap(map, sx, sy) {
            const ix0 = smallerIndex(sx);
            const ix1 = largerIndex(sx);
            const iy0 = smallerIndex(sy);
            const iy1 = largerIndex(sy);
            const tx = sx - Math.floor(sx);
            const ty = sy - Math.floor(sy);
            const mixA = lerpArrays(map[iy0][ix0], map[iy0][ix1], tx);
            const mixB = lerpArrays(map[iy1][ix0], map[iy1][ix1], tx);
            const mix = lerpArrays(mixA, mixB, ty);
            return mix;
        }

        function wrap(n) {
            return (n + mapResolution) % mapResolution;
        }

        function smallerIndex(n) {
            return Math.floor(n + mapResolution) % mapResolution;
        }

        function largerIndex(n) {
            return Math.ceil(n + mapResolution) % mapResolution;
        }

        function initialize() {
            // Use array fill and map meth9ods for cleaner map initialization
            colorMap =
                Array(mapResolution).fill().map((_, y) =>
                    Array(mapResolution).fill().map((_, x) => [
                        x < mapResolution / 2 ? -0.5*Math.random() : Math.random() ,
                        y < mapResolution / 2 ? 0.5*Math.random() : Math.random(),
                        1
                    ])
                );

            velocityMap =
                Array(mapResolution).fill().map((_, y) =>
                    Array(mapResolution).fill().map((_, x) => [
                        y < mapResolution / 2 ? 2*Math.random() : -2*Math.random(),
                        x < mapResolution / 2 ? 2*Math.random() : -2*Math.random()
                    ])
                );
        }

        function drawArrow(x0, y0, x1, y1) {
            const headSize = 3;
            p.line(x0, y0, x1, y1);
            let v = p.createVector(x1 - x0, y1 - y0).normalize();
            p.line(x1, y1, x1 - v.y * headSize - v.x * headSize, y1 + v.x * headSize - v.y * headSize);
            p.line(x1, y1, x1 + v.y * headSize - v.x * headSize, y1 - v.x * headSize - v.y * headSize);
        }
    };
    let myp5 = new p5(sketch, containerRef.current);
    return () => {
        myp5.remove(); // This will remove the canvas and clean up the p5 sketch on component unmount
      };
  
    }, []);
  
    return <div style={{ width: '100vw', height: '100vh' }} ref={containerRef}></div>;
  }
  
  export default Animation;

 */