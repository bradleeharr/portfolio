---
slug: "an-amplitude-modulator"
date: "2022-05-22"
title: "A Design and Implementation of a 100 kHz Amplitude Modulator Circuit Using Basic Components"
author: "Bradlee Harrison"
---

## Overview

In today's world, efficient and effective communication systems are more necessary than ever before. Billions of devices communicate with each other in an interconnected network that dominates the natural sphere. WiFi routers, radio broadcasts, and weather radars are able to seamlessly transmit information across space and time.

But how does it all work? The short answer is only one word -- "Modulation."

![555-Timer Circuit to generate signal](https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)

The objective of this project was to gain an understanding of radio communications by studying one specific type of modulation -- *Amplitude Modulation* (AM).

## Materials

The primary components involved in the process are a microphone, an LM386 audio amplifier, an operational amplifier, a 2N222A MOSFET transistor, a speaker, and passive elements such as resistors, inductors, and capacitors.

## Description

In this project, I designed a basic communication system consisting of a transmitter and receiver that is capable of processing an input signal through an amplitude modulator and transmitting it through a medium.

### Transmitter

For a communication system, there are many possible [modulation types](https://en.wikipedia.org/wiki/Modulation). For the sake of simplicity, I designed an [Amplitude Modulating (AM)](https://en.wikipedia.org/wiki/Amplitude_modulation) transmitter that performs [Double-Sideband](https://en.wikipedia.org/wiki/Sideband) Large Carrier (DSB-LC) modulation.

![Amplifier Circuit](assets/images/AM_Amplifier.png)

### Receiver

To receive this signal, I use an envelope detector consisting of a diode and an RC circuit to recover the envelope of the DSB-LC signal.

## Methods

The first step in the design was in creating a useful transmitter, capable of generating and modulating an audio signal.

![Transmitter Breadboard Circuit](assets/images/Transmitter.png)

## Results

The resulting circuit successfully transmitted and received audio signals over a short distance.

![Receiver Breadboard Circuit](assets/images/Receiver.png)

