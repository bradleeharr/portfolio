---
slug: "a-dance-rhythm-game"
date: "2022-12-15"
title: "A Dance Rhythm Game using an LPC1769 Microcontroller and DE10-Lite FPGA"
---
**Authors**: Bradlee Harrison and [Adam Tran](https://www.linkedin.com/in/adam-tran-60a0b0268/)

## Introduction

The goal of our project was to emulate an arcade-style music rhythm game based on the music video game series [Dance Dance Revolution](https://www.ddrgame.com/).

![Example of Game Machine](assets/images/782px-DanceDanceRevolution_White_Machine_with_DDR_A_installed.png)

*Image: LABcrabs 27 January 2019 | [DanceDance Revolution](https://commons.wikimedia.org/wiki/File:DanceDanceRevolution_White_Machine_with_DDR_A_installed.png) - A machine in Oakville, Ontario, Canada. Licensed under the [Creative Commons Attribution-Share Alike 4.0 International license](https://en.wikipedia.org/wiki/en:Creative_Commons). No changes were made.*

## Design

We developed a basic dance pad game using an LPC1769 microcontroller and a DE-10 Lite FPGA. 

### Microcontroller

The microcontroller handles the user input from the dance pad, the game state logic, and the music output logic. 

### FPGA

The FPGA handles the processing of storing the display data, buffering it in its RAM and outputting the display information along with a vertical sync and horizontal sync to maintain the timing constraints of the VGA standard.

![A block diagram of the system](assets/images/DDLBlockDiagram.drawio (1).png)

## Capabilities

The microcontroller is capable of playing two different songs which are programmed into it. 

### Song Selection and Start Process

- Turn on the microcontroller and FPGA
- Press the SELECT button to select the song from two different tracks.
- ...

## Software Description

### Input

The LPC1769 microcontroller receives digital input from a PlayStation 2 Dance Dance Revolution Regular Dance Pad.

### Audio

The music is generated using the Digital-to-Analog Converter present on the LPC1769.

### Display

The graphical video output is displayed using a data connection to a basic VGA controller implemented on a DE10-LITE FPGA board.

![VGA Signals](assets/images/ddl_vsync.png)
![VGA Signals](assets/images/ddl_hsync.png)
![VGA Signals](assets/images/ddl_colordataline.png)

### Memory Buffering

The key to achieving seamless data handling and display was the implementation of a memory buffer using the FPGA.

### UART Communications

To communicate from the LPC176 to the DE10-LITE FPGA board, we implemented a UART interface running at 900,000 baud rate. 

![Example UART Transaction](assets/images/ddl_uart.png)

## Hardware Description

Our audio hardware uses an audio amplifier connected to a speaker. 

![Hardware Schematic](assets/images/ddl_fullschematic.png)

## Final Screens and Circuits

![Final Screen of a Game](assets/images/ddl_screen.png)
![Test screen showing drawing of multiple rectangles for graphical output](assets/images/ddl_screen2.png)
![Final breadboarded circuit](assets/images/ddl_breadboard_circuit.png)
