---
title: Asking Alexa for the temperature and humidity from a Particle Photon
dateCreated: '2016-08-30'
---

Last week, I received an [Amazon Tap](https://www.amazon.com/dp/B01BH83OOM), which was given to those who successfully published 3 Alexa skills within 1 month of attending a sponsored [Alexa 101 hackathon](http://www.meetup.com/Hackster-Hardware-Meetup-SJC/events/232329858/). I even [tweeted](https://twitter.com/esthermakestech/status/767841485370732545?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E767841485370732545%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=http%3A%2F%2Festhermakes.tech%2Fblog%2F2016%2F08%2F30%2Fasking-alexa-for-the-temperature-and-humidity-from-a-particle-photon%2F) my excitement!

A lot of the use cases floating around for Alexa are related to making a smarter home. My first step towards achieving this is asking Alexa what the current temperature and humidity is in my house. To do this, I used my original [particle-weather-station](https://github.com/estherjk/particle-weather-station) project.

The project still uses the [Particle](https://www.particle.io/) Photon and a [DHT11](https://www.adafruit.com/product/386) sensor. But, instead of visualizing the data on a dashboard, I can ask Alexa for the current temperature or humidity.

To see how it works, check out the [source code](https://github.com/estherjk/particle-weather-station-alexa) and [video](https://youtu.be/j5CpMcM5yRI).