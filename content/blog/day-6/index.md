---
title : DAY 6 - Attention to Detail
subtitle : 404 page, Pagination, & Bugs that Don't Exist
slug : day-6
date : 2020-01-06
author : Lucie B
---

Change of pace today as I attended to a few details including the 404 page and blog pagination. These 2 tasks weren’t exactly a priority but I believe that attention to detail is important.

## Getting creative with my 404 page

Since I used [Gatsby’s default](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-default/) starter, a 404.js file comes pre-installed. This is great and does the job but making the 404 page look good doesn’t hurt. Doing this really didn’t take long and it was fun to do. In the event anyone finds their way there, I’m happy with [the final result](https://lbmedia-100daysofgatsby.netlify.com/hello).

![My new 404 page](./day6.jpg)

## Pagination and fixing a bug that never existed

With only 5 posts, pagination isn’t yet important but by day 100 it will be. Pagination is in two parts, the first is on the main blog list and the second on the individual post pages. 

Today, I completed the first part with the help of Gatsby’s Documentation for [adding pagination](https://www.gatsbyjs.org/docs/adding-pagination/). My set up was a little different so it took longer than I expected, having said that the explanation provided is good and the logic applies to other settings. 
It was all working perfectly until... I wrote this post. Then for some, at that point unknown, reason, I couldn't retrieve my post. 

Thinking it was some error I had made in my gatsby-node.js file, I began trying to fix it and I should heve really thought about this a little longer. 
Ater spending some time on it and making a mess of it in the process I decided to revert it back to my last saved version. Then I realized is that the error was not at all in my gatsby-node.js file but very simply due to an error I had made in naming the file for my post: day6-mdx rather than day6.mdx !!! So much for my point of being attentive to details. 

## Lessons Learned Today 

**1. Push to Github more often!** Doing this prior to writing my post would have saved me a good half hour looking for a bug that didn't exist - not counting that redoing my pagination will likely take me another hour. 

**2. Doublecheck the name of files created**  This is such an easy mistake to make but such an easy one to fix. 

#### Till tomorrow, Happy coding! 
