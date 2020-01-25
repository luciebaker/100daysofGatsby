---
title : DAY 8 - Challenge 2 
subtitle : Deploying a Gatsby Site for Free
slug : day-8
date : 2020-01-08
author : Lucie B
---

Already into the second week of the [#100DaysofGatsby](https://twitter.com/hashtag/100DaysofGatsby) challenge and the second challenge has been announced: 

> **Build and Deploy Your Gatsby Site (Using Free Tools)**

I actually completed that part on Day 2 of the challenge so I guess I have a bit of time to spare in the week to come (more on that tomorrow!), but for today, I’ll let you know where I deployed my blog and why.

## Deployment Options
As noted in the [Gatsby documentation](https://www.gatsbyjs.org/docs/deploying-and-hosting/), when it comes to deployment, there are many options, including Netlify, AWS Amplify, Heroku, and Surge, just to name a few. Previously, I have used Github Pages, Heroku, and Netlify, but with Gatsby sites I have, so far, found Netlify to be the best option. 

## Why Netlify?
There are a number of reasons why I use [Netlify](https://www.netlify.com/), but here are the main 3:

First of all, Netlify's free tier is very generous and you can literally host unlimited personal (and commercial) projects for free.

The initial set up is made extremely easy by simply by connecting with your Github account. Then to deploy your site you simply give Netlify access to your Github repo (it also works with Gitlab and Bitbucket) and within minutes your website it deployed and live. In addition to that, anytime you push to your github repo, your site is automatically updated. This continuous deployment is not limited to the repo itself either. 
For example, if, for a project, I use Contentful as a headless CMS, I can connect Contentful and Netlify so that when content is added, modified or removed, the site is automatically updated. 

Finaly, your site is hosted on HTTPS rather than HTTP, and that is also free! This is important. Matt Billman, founder of Netlify, provides [5 good reasons for wanting HTTPS for your site](https://www.netlify.com/blog/2014/10/03/five-reasons-you-want-https-for-your-static-site/), even a static site that doesn't handle sensitive information!. These include: better SEO and analytics, protection of your content, and protection of your users. 

More info on deploying a Gatby site to Netlify can be found [here](https://www.gatsbyjs.org/docs/deploying-to-netlify/). While I will, in the future, explore other deployment options, Netlify is for now my first choice.  

#### Till tomorrow, Happy coding! 