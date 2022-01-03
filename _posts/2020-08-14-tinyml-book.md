---
title: TinyML Book
dateCreated: '2020-08-14'
image: '/images/tinyml-micro-speech-training.png'
---

I've been slowly making my way through the [TinyML Book](https://tinymlbook.com/). It's been a nice introduction to machine learning on resource-constrained devices. Things are constantly evolving though, and I found that using the book and the [TensorFlow Lite Micro examples](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples) together is the best way to get started.

I also created a [GitHub repo](https://github.com/estherjk/tinyml-book) which contains my own copies of the examples. Each example is in its own folder. And each folder contains the Jupyter notebooks used for training, as well as the files needed to deploy to an edge device (in my case, the [Arduino Nano 33 BLE Sense](https://store.arduino.cc/usa/nano-33-ble-sense)). The most notable addition is a `Dockerfile` within each folder to run the notebooks in my own development environment. This has made it easier for me to experiment with and re-train models locally without having to worry about Google Colab sessions timing out.

Here's a screenshot of the Jupyter notebook used to train the `micro_speech` model:

![Training the micro_speech model](/images/tinyml-micro-speech-training.png)

And here's the [resulting model deployed to a device](https://twitter.com/esthermakestech/status/1280671290769072128?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1280671290769072128%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=http%3A%2F%2Festhermakes.tech%2Fblog%2F2020%2F08%2F14%2Ftinyml-book%2F).

Hope my learnings can help you start on your own journey with TinyML.