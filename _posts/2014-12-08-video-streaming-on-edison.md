---
title: Video streaming on Edison
dateCreated: '2014-12-08'
---

My earlier posts on Edison have been building to this, and here is the result: video streaming to a browser from a webcam connected to Edison... all powered by a 9V battery. It's a relatively simple starter project, and one that I thought would be a nice introduction to Edison, especially if you have some experience with Linux and Node.js.

The setup involves connecting a UVC-compatible webcam and supplying external power to Edison (see this [post](/blog/2014-11-06-connecting-a-usb-device-to-the-edison-mini-breakout-board)). A Node.js web server runs on Edison, listens for the incoming video stream via HTTP (the video is encoded with [ffmpeg](https://www.ffmpeg.org/)), and broadcasts the stream to all connected browsers via WebSockets. The video is then decoded on the client-side using [jsmpeg](https://github.com/phoboslab/jsmpeg) and rendered onto a canvas element.

The setup instructions and source code are available on [GitHub](https://github.com/estherjk/edi-cam), and it is also on the [Intel Edison Project Gallery](https://communities.intel.com/docs/DOC-23530). Hopefully, this will help with getting a bit more comfortable tinkering on Edison. Here's a [video](https://youtu.be/nVDL2-bFT3Y) of it in action.

One last thing... for those who have read my post on [real-time face detection using OpenCV and Node.js](/blog/2014-12-02-real-time-face-detection-using-opencv-nodejs-and-websockets), it might be a fun follow-up project to get this to run on Edison. You may need to lower the frame rate to 1fps (in [socket.js](https://github.com/estherjk/face-detection-node-opencv/blob/master/server/lib/routes/socket.js)) to get it to run successfully. An even more fun follow-up would then be to figure out ways to increase the frame rate.
