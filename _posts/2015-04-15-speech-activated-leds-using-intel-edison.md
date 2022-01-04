---
title: Speech-activated LEDs using Intel Edison
dateCreated: '2015-04-15'
---

This has been a really fun project for me to learn and build. I am a bit rusty with my circuit basics, so this was a nice re-introduction.

In this demo, the circuit basically consists of 4 LEDs, and as the title suggests, they are controlled by speech. Check out the [video](https://youtu.be/kVTV_qZtwlY).

I want to thank my Intel colleague, [Stephanie Moyerman](https://github.com/smoyerman), who created the original version of this demo with the Arduino expansion board. I then replicated her setup with the [SparkFun](https://www.sparkfun.com/categories/272) Base and GPIO blocks. This required some modifications to the circuit (namely using transistors as switches to light the LEDS), as a well as a change in the IO communication library used to interface with the GPIOs. I also created a couple example programs to test out the circuit.

For more details on how to set this up, please take a look on [GitHub](https://github.com/estherjk/led-speech-edison).
