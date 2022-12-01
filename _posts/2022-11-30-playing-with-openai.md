---
title: Playing with OpenAI
description: 
dateCreated: '2022-11-30'
image: '/images/openai/openai-playground-image.png'
---

## Introduction

Generative AI is a hot topic these days, where companies like [OpenAI](https://openai.com/), [Midjourney](https://www.midjourney.com/), & [Stability AI](https://stability.ai/) are providing capabilities that allow you to generate long-form text, images, & even code from simple text prompts.

To familiarize myself better in this space, I built a simple web app with OpenAI's APIs. TLDR: They do make it pretty easy to integrate into an application.

## The web app

In addition to the OpenAI APIs, the project is built with [Next.js](https://nextjs.org/) & [Chakra UI](https://chakra-ui.com/). Chakra UI is a React component library that allows you to build UI very quickly.

The web app configures two routes:

- `/playground/text`: A page to try out the [text completion API](https://beta.openai.com/docs/guides/completion)
- `/playground/image`: A page to try out the [image generation API](https://beta.openai.com/docs/guides/images)

On both pages, you can enter a simple text prompt & then click on **Submit** to get the results.

Here's a short story example:

![A short story created with Open AI](/images/openai/openai-playground-text.png)

And here's an image example:

![An image created with OpenAI](/images/openai/openai-playground-image.png)

## Final thoughts

OpenAI offers a pretty powerful set of tools for generative AI. However, it does come at a cost. You get an $18 credit when you first create an account, but after that, you have to [pay](https://openai.com/api/pricing/). This is something to keep in mind if you want to build out real-world applications.
