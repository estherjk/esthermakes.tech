---
title: Reading Quantified, iOS Edition
dateCreated: '2019-06-11'
---

## Introduction

It's finally here! The [iOS version](https://github.com/estherjk/reading-quantified-ios) of Reading Quantified. Here's a [video](https://youtu.be/y5PhF_Pu6CA) demonstrating its capabilities.

## Features

The UI is pretty barebones at the moment. The goal was to focus on the features I've been most particularly interested in, which are centered around two views:

* Dashboard: Shows key metrics filtered by year. The metrics are: number of books finished, average days to finish, shortest read in days, and longest read in days.
* Books: Provides a table of all the books that are searchable and sortable by title, date started, and date finished.

## How it works

The app communicates with the [REST API server](https://github.com/estherjk/reading-quantified-server) using a network abstraction library called [Moya](https://moya.github.io/). Access to the REST APIs require a JSON Web Token, which is generated for a valid username and password. The data are then stored locally in a [Realm database](https://realm.io/).

The app also attempts to use software design best practices for Swift. (The keyword is **attempts**.... :)) This includes using an MVVM architecture, [Swinject](https://github.com/Swinject/Swinject) for dependency injection, and [RxSwift](https://github.com/ReactiveX/RxSwift) to communicate changes between logically separated portions of the app.

Here's a high-level diagram that illustrates the architecture:

![Reading Quantified iOS App Architecture](/images/reading-quantified-ios-architecture.png)

## Next steps

This is just the beginning of the project's iOS journey. Expect enhancements and new features!