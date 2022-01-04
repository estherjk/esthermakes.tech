---
title: Alexa, turn on the light
dateCreated: '2016-09-10'
---

I'm having too much fun playing with my Amazon Tap and Particle Photon.

My first two Alexa-Particle projects utilize two different types of [Particle Cloud Functions](https://docs.particle.io/reference/firmware/photon/#cloud-functions). In my first [project](https://github.com/estherjk/particle-weather-station-alexa), I used [Particle variables](https://docs.particle.io/reference/firmware/photon/#particle-variable-) to ask Alexa for data using GET requests. In this project, I use [Particle functions](https://docs.particle.io/reference/firmware/photon/#particle-function-) that can be called with POST requests. The Alexa skill then makes these requests to control a light&mdash;a [NeoPixel ring](https://www.adafruit.com/products/2856) to be more precise.

To see how it works, check out the [source code](https://github.com/estherjk/particle-light-alexa) and [video](https://youtu.be/y9VvusYF1sg).
