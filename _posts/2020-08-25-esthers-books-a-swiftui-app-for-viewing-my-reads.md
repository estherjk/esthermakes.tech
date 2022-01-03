---
title: Esther's Books, a SwiftUI app for viewing my reads
dateCreated: '2020-08-25'
image: '/images/projects/esthers-books-swiftui.png'
---

## Introduction

I've been itching to play with SwiftUI for awhile, and I finally made some time by giving a visual refresh to my original [Reading Quantified iOS app](/blog/2019/06/11/reading-quantifed-ios-edition/). I also renamed it to Esther's Books, since it's focused more on showing what I've read and less on the metrics; my [dashboard](http://esthermakes.tech/reading-quantified/) is focused on that.

Here it is [in action on my iPad](https://www.instagram.com/p/CES262hDjM-/?utm_source=ig_web_copy_link), and it also runs on iPhone & Mac.

## Features

Everything is built with Swift or SwiftUI. The only external dependency is [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) for saving JSON web tokens to persist a user's login. Network requests are built with [URLSession](https://developer.apple.com/documentation/foundation/urlsession) (i.e. not using Alamofire or Moya) to fetch data from the [Reading Quantified Server](https://github.com/estherjk/reading-quantified-server).

The UI itself has three tabs: Library, Books, & Profile. The Library tab displays all the books I've read so far in the current year. It also provides a yearly summary highlighted on a card that features a random book from that year. Tapping on a card navigates to a grid view of books finished in that given year.

The [card also adjusts the text color](https://www.instagram.com/p/CD-UUc3jo9B/?utm_source=ig_web_copy_link) based on the background color for better readability.

The Books tab contains a list view of all the books I've read. In the future, the plan is to make it searchable and sortable.

The Profile tab contains a user's info. It's not editable at the moment, but that's also a planned future feature.

## Wrapping it up

Overall, I was amazed at how quickly I could build this app compared to when I first built the original Reading Quantified iOS app. Before SwiftUI, there was a lot more plumbing required with storyboards and configuring table views, collection views, etc. Then there were all the extra dependencies to use a reactive programming paradigm (i.e. [RxSwift](https://github.com/ReactiveX/RxSwift)). With SwiftUI, the declarative approach makes it really easy to build UIs and to indicate the data dependencies so that updates occur automagically. Hope this encourages others to try out SwiftUI, especially with the latest [Xcode 12 beta](https://developer.apple.com/xcode/).