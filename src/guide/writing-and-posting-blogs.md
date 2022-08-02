---
tags:
  - blog
---

# Writing and posting blogs

As a member of **AG**, you will have the opportunity to showcase your writing skills. Share your knowledge and ideas over beautifully crafted blogs that reach millions. Our blog topics include:

1. Feature updates and walkthrough
1. Product reviews
1. Tips for smart business growth
1. New SaaS worth integrating
1. Tips for smart remote working
1. Steps to build tech features
1. Industry trends
1. Technology insights

## How to write blogs

The first thing you should do before you start writing a blog is to read what others have written about similar topics. It will give you a broader scope and better results.

When you feel you are ready to write, just follow the below steps:

1. Create a word document `(preferably online)`
1. Organize in a hierarchical manner `(Heading > Sub-Heading > Sub Sub-Heading)`
1. Place site links wherever needed
1. Upload any images for the blog to a drive folder
1. Add images or image links in your content
1. Share the word document and drive folder with the team for [posting](#how-to-post-blogs)

## How to post blogs

Posting blogs in the platform is as easy as reading this blog. Aside from posting your own blogs, you may occasionally help other content writers by posting theirs.

Have everything like the content (word document) and the blog images at place and then follow the simple steps involved for posting:

1. Navigate to the `content/blog` folder at the root of the project
2. Create a new markdown file with the blog name, for example `building-your-first-form-with-formester.md`
3. At the top of the file, Add meta data for the blog as per the format:

```
---
title: Building your first form with formester
description: Different approaches to building web forms with formester
author: Piyush Singhania
coverImg: formester-form-builder-background.png
coverImgAlt: Cover image for the blog, "Building your first form with formester"
featured: false
published: true
createdAt: '2022-05-10'
---
```

4. Navigate to the `static/blog` folder at the root of the project
5. Create a new folder with the blog name, for example `building-your-first-form-with-formester`
6. Add all the blog images there
7. Follow [markdown syntax](https://www.markdownguide.org/basic-syntax/ "Basic Markdown Syntax") to add your content and images.
8. Make sure you add proper title and alt texts for the images and links
9. By default the page contains a Call To Acton Seciton, however `optionally` you can update the title and button text just by adding some more meta data:

```
cta:
  hidden: true
  heading: Ready to dive in?
  subheading: Register with us Now.
  btnPrimary: Sign Up
  btnSecondary: Contact Us
  btnPrimaryLink: https://app.formester.com/users/sign_up
  btnSecondaryLink: /contact
```

10. Commit and push the changes as per the [git conventions](./the-git-flow.md)