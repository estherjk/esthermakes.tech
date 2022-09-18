---
title: New year, new website
dateCreated: '2022-01-03'
---

## Introduction

After 7 years on GitHub Pages, it's time for a change! The tech stack for this website has been completely overhauled.

## Out with the old...

![Previous website on GitHub Pages](/images/new-website/github-pages.png)

The previous version of this site was hosted on GitHub Pages & used the following tech stack:

* [Jekyll](http://jekyllrb.com/): A static site generator
* [Bootstrap](https://getbootstrap.com/): A UI framework that comes with pre-styled components
* [GitHub Pages](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll): For hosting & deployment

The biggest advantage at the time was how quickly I could get blog posts created & get the overall site up & running. However, I started to run into the following limitations:

* As web tools advanced, using Liquid templating began to feel dated.
* Bootstrap was a good choice to build UI quickly, but as I wanted to add more customization, it felt like I was fighting the framework.
* Over time, it became less enjoyable to maintain the site & to write posts. Sad.

## In with the new...

Over the last year, [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), & [Vercel](https://vercel.com/) have been part of my professional web development workflow. So, I was eager to use them as the building blocks for the next iteration of this website.

For styling, I opted for [Tailwind](https://tailwindcss.com/), which is a utility-first framework. It provides a lot of helper CSS classes that are easy to put together to build out custom components. It also makes it very easy to support light & dark mode.

![New website in light mode](/images/new-website/light-mode.png)

![New website in dark mode](/images/new-website/dark-mode.png)

[React Markdown](https://github.com/remarkjs/react-markdown) is used to render the blog posts. This was the most challenging part of the migration. The original Markdown files also included raw HTML, which I'd like to avoid moving forward. So, there was some manual labor involved to sanitize the posts. Besides raw HTML, all other content have been preserved.

In summary, here's a list of the new tech stack components:

* [Next.js](https://nextjs.org/): "The [React](https://reactjs.org/) framework for production"
* [TypeScript](https://www.typescriptlang.org/): Types for JavaScript
* [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework
* [React Markdown](https://github.com/remarkjs/react-markdown): For rendering markdown content (i.e. the blog posts)
* [Vercel](https://vercel.com/): For making web deployments easy

The source code is available on GitHub in a [new repo](https://github.com/estherjk/esthermakes.tech).

## Conclusion

Overall, I'm excited with the new changes & hope to post more regularly in the new year. Here's to a fresh start!