---
title: Getting started with Next.js and TypeScript
dateCreated: '2022-03-11'
image: '/images/next-ts-template/new-repo.png'
---

## Introduction

Next.js is a great framework for building web applications. But, there's a little bit of extra work required for TypeScript support. [`next-ts-template`](https://github.com/estherjk/next-ts-template) solves this problem by letting you get up & running with all the boilerplate code you need.


## The Template Repository

[`next-ts-template`](https://github.com/estherjk/next-ts-template) comes configured with the following:

* The latest version of Next.js (which as of this writing is `12.0.7`)
* Support for TypeScript
* ESLint & Prettier: for enforcing good practices with TypeScript & Next.js / React
* [husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged): for Git pre-commit hooks (prevents you from committing code with any ESLint errors)

## Using the Template

To use [`next-ts-template`](https://github.com/estherjk/next-ts-template):

* Click the green button labeled, **Use this template**
* Select the desired **Owner** of the repository
* Type in the name for the repository
* Add an optional description
* Select the desired visibility of the repository (**Public** or **Private**)
* De-select the option, **Include all branches**

The form should look something like this:

![New Repo](/images/next-ts-template/new-repo.png)

Click **Create repository from template** and after a few moments, the new repository page should be available on GitHub.

## Cloning & Running the New Project

Clone the new repository with `git clone`. Then, to run it:

```bash
# Install the dependencies
yarn

# Run the application in development mode
yarn dev
```

The web application should be up & running at [http://localhost:3000](http://localhost:3000).

![App Running](/images/next-ts-template/app-running.png)