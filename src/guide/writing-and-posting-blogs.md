---
tags:
  - blog
---

# Writing and posting blogs

As a member of **AG**, you will have the opportunity to showcase your writing skills. You can share your knowledge and ideas over beautifully crafted blogs that reach millions. Our blog topics include:

1. Feature updates and walkthrough
1. Product reviews
1. Tips for smart business growth
1. New SaaS worth integrating
1. Tips for smart remote working
1. Steps to build tech features
1. Industry trends
1. Technology insights

# Writing and posting blogs

As a member of **AG**, you will have the opportunity to showcase your writing skills. You can share your knowledge and ideas over beautifully crafted blogs that reach millions. Our blog topics include:

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
1. Write in a hierarchical manner `(Heading > Sub-Heading > Sub Sub-Heading)`
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

4. Also, Navigate to the `static/img` folder at the root of the project
5. All blog images should be added here and make sure
 > - Image should be in `.png` format
 > - If using screenshots use [Pika.style](https://stackoverflow.com/questions/21636503/use-svg-as-ogimage) to make it look attractive
 > - Image name should be in `blog-name__image-name` format, for example `my-first-blog__image-1` , `my-first-blog__image-2`
6. The cover image `should not be svg` and `should not exceed 300 kb` in size. <br>
As a result, image previews will appear on all platforms when sharing the blog link
> - SVG image previews are not supported by most platforms ([source](https://stackoverflow.com/questions/21636503/use-svg-as-ogimage))
> - Images larger than 300 kb are ignored by WhatsApp ([source](https://help.branch.io/faq/docs/why-are-some-quick-link-thumbnails-not-shown-in-whatsapp))
7. Follow [markdown syntax](https://www.markdownguide.org/basic-syntax/ "Basic Markdown Syntax") to add your content and images to the file
8. Make sure you add proper title and alt texts for the images and links, see here on how to write [good alt text](https://www.semrush.com/blog/alt-text/)
9. By default the page contains a [Call To Action Section](https://formester.com/blog/best-online-form-builders#:~:text=online%20form%20builders.-,Ready%20to%20dive%20in%3F,-Register%20with%20us), `optionally` you can update the title and button text just by adding some more meta data:

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

> TIP: checkout the previous blog files to understand the pattern

## How to write and post blogs through CMS

Posting blog through CMS is now much easier, you just need to have everything like the content (word document) and the blog images at place and then follow the simple steps involved for posting:

1. Navigate to `https://formester.com/admin` and login with your credentials 
2. To post a blog click on `New Blog` button 
3. Add required fields with proper data
4. The cover image `should not be svg` and `should not exceed 300 kb` in size.
<br>
As a result, image previews will appear on all platforms when sharing the blog link

> - SVG image previews are not supported by most platforms ([source](https://stackoverflow.com/questions/21636503/use-svg-as-ogimage))
> - Images larger than 300 kb are ignored by WhatsApp ([source](https://help.branch.io/faq/docs/why-are-some-quick-link-thumbnails-not-shown-in-whatsapp)) 
5. Toggle `PUBLISHED` button to save it as draft or mark it to go live
6. Use tools provided by the text editor in body to design and add content in blog
7. While adding images in blog make sure
 > - Image should be in `.png` format
 > - If using screenshots use [Pika.style](https://stackoverflow.com/questions/21636503/use-svg-as-ogimage) to make it look attractive
 > - Image name should be in `blog-name__image-name` format, for example `my-first-blog__image-1` , `my-first-blog__image-2` 
8. Every image should have a good title and alt text, see here on how to write [good alt text](https://www.semrush.com/blog/alt-text/)
9. Once satisfied with your content click the `Publish` button on top and select your desired option and your blog is live.
