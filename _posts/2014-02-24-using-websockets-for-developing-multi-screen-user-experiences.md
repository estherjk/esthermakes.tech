---
title: Using WebSockets for developing multi-screen user experiences
dateCreated: '2014-02-24'
---

Although I can't give too much detail about my work while I was at Samsung, there are a few tidbits that I can share now that some aspects have been made public. One key area that Samsung has focused on is multi-screen user experiences, where devices like your smartphone and TV can connect and communicate with each other. The [Samsung MultiScreen SDK](http://multiscreen.samsung.com) was released to help developers create such experiences.

While our team didn't work on the MultiScreen SDK, we certainly built multi-screen prototypes. And what's common between the SDK and one of the prototypes that I built was the use of [WebSockets](http://en.wikipedia.org/wiki/WebSocket), which is a persistent, two-way channel between a client and server for exchanging data at any time. Since multi-screen experiences require quick data exchanges, especially when two clients need to interact with one another in realtime, using HTTP requests / responses or XHR polling can cause unwanted latency.

For [Node.js](http://nodejs.org), there is a really nice package called [socket.io](http://socket.io) that enables WebSockets. To illustrate its use, I've created a small demo, which you can see in action [here](http://multi-screen-demo.herokuapp.com) ([source](https://github.com/estherjk/multi-screen-demo)). In just a few lines of code, it's possible to have a seamless, realtime experience between your connected devices. Hopefully, this demo will inspire you to come up with some of your own multi-screen scenarios.
