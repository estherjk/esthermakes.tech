---
title: Using Notion to track my books
description: Notion is a document organizing tool that has really enabled me to centralize all my books information in one place.
dateCreated: '2022-05-29'
image: '/images/bookshelf-notion/gallery.png'
---

## The history

Since 2015, I've maintained various projects for tracking my reading habits. The [first iteration](blog/2015-11-24-introducing-reading-quantified) used Trello, Node.js, & Parse. The [second iteration](/blog/2017-04-11-redesigning-reading-quantified) was focused on visualization improvements using Angular & d3. The [third iteration](/blog/2018-12-19-refactoring-reading-quantified) moved away from a custom UI to using a 3rd party visualization tool called Metabase; the backend also changed from Node.js to Django. The [fourth iteration](blog/2019-06-11-reading-quantifed-ios-edition) introduced an iOS app. And now, we're finally at today, where everything&mdash;book info, basic stats, & even the notes&mdash;are all in one place... [Notion](https://www.notion.so/).

## Notion for organization

Simply put, Notion is a document organizing tool & it has really enabled me to centralize all my books information in one place. This is done by using a Notion [database](https://www.notion.so/help/intro-to-databases), which is a collection of pages with additional [properties](https://www.notion.so/help/guides/database-properties-help-organize-your-teams-information). Properties can be text, dates, as well as formulas. For example, `Days to Finish` is a formula that's computed from two others properties, `Date Started` & `Date Finished`.

![Notion board](/images/bookshelf-notion/table.png)

It's also possible to create custom views. For example, here's a simple kanban board that's identical to Trello:

![Notion board](/images/bookshelf-notion/board.png)

Yet another supported view is the gallery view. In this case, the finished books are grouped by year, similar to the iOS app:

![Notion board](/images/bookshelf-notion/gallery.png)

Since each database row is a page, this is where notes for a specific book are captured:

![Notion board](/images/bookshelf-notion/page.png)

## Importing data into Notion

While Notion does provide a way to import data directly from Trello, it doesn't include all the information like activity timestamps. This information was parsed out separately & stored in a database that powered my latter projects. To get all the desired information, both from Trello & the database, a very [simple Python script](https://github.com/estherjk/reading-quantified-trello2notion) was created to combine the two sources of data & export them into a CSV. The CSV file was then imported into Notion.

As for the actual notes themselves... unfortunately, this was a manual job. They were originally typed up in Apple Notes; to move them into Notion was a copy & paste job. It actually wasn't too painful & was also a nice way to review the notes I had written up.

## So what's next?

The previous projects will remain online (at least for the time being), but will not be maintained. This doesn't end my coding journey with books though... my focus will now shift to building other things!