---
title: Migrating my website to Jekyll
dateCreated: '2014-09-03'
---

This website was originally developed on the MEAN stack (for those of you who aren't familiar with it, check out this [post](/blog/2013-12-30-the-mean-stack)). While MEAN is really great for creating data-driven websites, it's definitely overkill for primarily static websites... like mine. The only dynamic content I had were the blog posts. However, I'd argue that blog posts aren't necessarily dynamic after creation, since they are rarely modified afterwards.

I wanted to leverage the best of MEAN though, so I set up a database to store my blog posts, created the REST API, developed a separate admin interface (with my own [rich-text editor](http://estherjk.github.io/rte-angular)) to write posts, added security so that only I could create posts, and so on. It was really great learning how to build everything out, but it quickly became unwieldy. And I spent more of my time worrying about keeping the admin interface secure rather than blogging (although I doubt someone would want to hack my little website).

As a result, I turned to [Jekyll](http://jekyllrb.com), a Ruby-based blog-aware, static site generator. In just a few hours, I had a full-fledged site that allowed me to add blog posts by simply creating Markdown files. It's also much more secure, since there's no admin interface to hack.

[GitHub Pages](https://pages.github.com) provides free hosting directly from a GitHub repository and provides a nice set of [instructions](https://help.github.com/articles/using-jekyll-with-pages) to help get your site online very quickly. You can also check out [my source code](https://github.com/estherjk/estherjk.github.io) to see how I set up this site. I encourage you to check both resources out! You'll be up and running very quickly!
