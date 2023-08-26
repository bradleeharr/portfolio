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

This transmitter takes an audio signal, mixes it with a modulating sinusoid, and adds a large high-frequency carrier to create a DSB-LC signal. Mixer circuits and summer circuits are important to design and configure throughout the scope of this project.

After modulation, the signal will have to be amplified to a sufficiently large level for transmission. For this, an amplifier was designed using a 2N222A MOSFET transistor.



### Receiver

To receive this signal, I use an envelope detector consisting of a diode and an RC circuit to recover the envelope of the DSB-LC signal.

## Methods
Throughout the implementation of this project, I encountered many challenges, which prompted several innovative solutions.


The first step in the design was in creating a useful transmitter, capable of generating and modulating an audio signal.

Aside from the 555-timer signal for testing, a small electret microphone was also used as the input device, capturing audio signals from a headphone speaker that was placed next to it. Using the microphone, these analog signals are converted to electrical signals.

 # Amplitude Modulator
The electrical signals are then fed into an amplitude modulator. The modulator multiplies the input signal with a carrier signal of frequency 100kHz, resulting in an amplitude-modulated signal.

The modulated signal is then fed into an amplifier to strengthen the signal for transmission.


# Demodulator
Once the signal is received, it is fed into an envelope detector, which demodulates the signal. This component uses a diode and LC circuit to remove the carrier signal, leaving only the original audio signal.

# Speaker 
Finally, the demodulated signal is fed into an audio amplifier, which strengthens the signal enough to drive a speaker. The speaker then converts these electrical signals back into sound, effectively reproducing the original audio.


![Transmitter Breadboard Circuit](assets/images/Transmitter.png)

## Results

The resulting circuit successfully transmitted and received audio signals over a short distance. To increase the transmission distance, boosting the power of the transmitter would be required. However, the carrier frequency I used, 100kHz, could propagate over long distances due to its lower frequency nature, which necessitated a limitation on the power to very low wattage. The final circuit put together can be seen in the images below.


![Receiver Breadboard Circuit](assets/images/Receiver.png)

