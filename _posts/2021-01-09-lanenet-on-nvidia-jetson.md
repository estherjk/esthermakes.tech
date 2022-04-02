---
title: 'LaneNet on NVIDIA Jetson'
dateCreated: '2021-01-09'
image: '/images/lanenet-jetson.jpg'
---

## Introduction

![LaneNet on the NVIDIA Jetson Xavier NX](/images/lanenet-jetson.jpg)

LaneNet is a real-time deep neural network model used for lane detection. An unofficial implementation for TensorFlow is available at this [GitHub repo](https://github.com/MaybeShewill-CV/lanenet-lane-detection), which runs really well on a PC. However, I wanted to get this running on the [NVIDIA Jetson platform](https://developer.nvidia.com/buy-jetson), which is a suite of products made for low-power edge AI. I first targeted the Xavier NX, which offers more compute & power than the entry-level Nano, knowing that this is a pretty intensive task.

## From TensorFlow to TensorRT

Unfortunately, running the TensorFlow model out of the box resulted in memory & performance issues on the Xavier NX. NVIDIA offers TensorRT to speed up inference on their platforms, so the next major step was to port the TensorFlow model to TensorRT. This [forked repo](https://github.com/estherjk/lanenet-lane-detection) contains additional files, as well as a [`Dockerfile`](https://github.com/estherjk/lanenet-lane-detection/blob/master/jetson/Dockerfile) with all the necessary dependencies to run this on the Xavier NX.

Starting with TensorRT 7.0, the preferred method is to use the [ONNX workflow](https://developer.nvidia.com/blog/speeding-up-deep-learning-inference-using-tensorflow-onnx-and-tensorrt/), where a TensorFlow model is converted to the ONNX format, which is then used to build the TensorRT engine. Other frameworks are also supported, e.g. PyTorch, Keras, & Caffe.

### Freezing the TensorFlow graph

The first step requires freezing the TensorFlow graph. The Python script to do this can be found at [`tensorrt/freeze_graph.py`](https://github.com/estherjk/lanenet-lane-detection/blob/master/tensorrt/freeze_graph.py).

To run it:

```bash
python tensorrt/freeze_graph.py --weights_path model/tusimple_lanenet/tusimple_lanenet.ckpt --save_path model/lanenet.pb
```

This creates a frozen graph called `model/lanenet.pb`. The next step is to convert this to ONNX using the [tf2onnx](https://github.com/onnx/tensorflow-onnx) Python package:

```bash
python -m tf2onnx.convert \
    --input ./model/lanenet.pb \
    --output ./model/lanenet.onnx \
    --inputs lanenet/input_tensor:0 \
    --outputs lanenet/final_binary_output:0,lanenet/final_pixel_embedding_output:0
```

This takes the `.pb` file and converts it to an ONNX model, which is saved as `model/lanenet.onnx`.

### Running inference with TensorRT

Using the ONNX model, we can now run inference! The Python script can be found at [`tensorrt/trt_inference.py`](https://github.com/estherjk/lanenet-lane-detection/blob/master/tensorrt/trt_inference.py).

To run it with a sample video file:

```bash
python tensorrt/trt_inference.py \
    --onnx_file ./model/lanenet.onnx \
    --video_src ./data/tusimple_test_video/0.mp4 \
    --engine_file ./tensorrt/pc.engine
```

This can also run with a live video stream if a webcam or camera is connected to the Xavier NX. Just update the `--video_src` flag with the appropriate name for the connected video source.

You can check out [this video](https://www.instagram.com/p/CG7fdYcjBsK/?utm_source=ig_web_copy_link) to see it in action!

## Conclusion

With a little bit of work to convert a TensorFlow model to TensorRT, we can now run real-time lane detection on the NVIDIA Jetson Xavier NX. Next steps are to try this on the entry-level Nano.