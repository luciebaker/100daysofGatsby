---
title : DAY 7 - Styling in Gatsby
subtitle : Taking A Closer Look at Styled Components
slug : day-7
date : 2020-01-07
author : Lucie B
---

Styling is important to any website or web application and something I’m quite fussy about.
When I first started learning web development I just used one styles.css file and all the styling lived there. For a very simple webpage that can be an option but more often than not, it quickly becomes a mess. 

## Syntatically Awesome Style Sheets (SASS)

Since I like being organized and having clean code, this single file setup wasn’t suitable. For that reason I learned about [SASS](https://sass-lang.com/), which stands for Syntatically Awesome Style Sheets. SASS claims to be CSS with superpowers. It has several cool features but it also allows me organize my files. 

For example, within my components folder, I would have my SASS folder. Within it, I would have two folders: 1-basics and 2-components. The Basics folder would include things like, _global.scss, _typography.scss, and _variables.scss. The Components folder would include styles specific to a component such as: _navbar.scss or _footer.scss. All of these files would then be imported into a layout.scss, which would look something like this:

```jsx
// 1-BASICS
@import ‘1-basics/variables';
@import ‘1-basics/global';
@import ‘1-basics/typography';

// 2-COMPONENTS
@import ‘2-components/navbar';
@import ‘2-components/footer';
```

The layout.scss file would then be imported only once to the layout.js: 
```jsx
import “../sass/layout.scss"
```

I have found this set up very practical and clean, therefore suiting my personal preference. Having said that, this was prior to my React and Gatsby days and it makes sense that I review if it is still the best option. 

## Styling for React and Gatsby

When it comes to styling there are many options and neither React or Gatsby are opinionated in what option should be chosen. Ultimately, it comes down to personal preferences and the situation at hand. SASS works well within React/Gatsby and till now this is mainly what I have been using. For one of my projects, I used styled components but at that time I felt that the concept of CSS in JS was a bit messy. As I am learning more about working with React and Gatsby, however, this concept is starting to make sense and may not so messy after all.

## Styled Components

As always the [official documentation](https://www.styled-components.com/docs) is a useful starting point. For a brief introduction to styled components, there is also a [free 1-hour course](https://www.udemy.com/course/react-styled-components/) on Udemy. The course doesn’t cover all aspects of styled components but it provides a good bite-size overview. 

After taking a closer look, styled components isn’t that intimidating or messy. My first thought was that instead of having my component specific css living in a .scss file it would live on the component’s .js file, nested with template literals. This itself isn’t a difficult change in the way I currently do things. 

It seems there are several advantages to using styled components in React (and therefore Gatsby). From the documentation and various other resources I read, these where the 3 main takeaway points for me. 

1.  **Styled Components only injects critical CSS** on the page. This contributes to performance by making pages load faster. 

2.  **Unused CSS is easy to identify**. This reduces bundle size and improves best practice score on [Google's Lighthouse audit](https://web.dev/measure/) score.

3.  Due to automatically generated vendor prefixing, styling is specific to a component, which **avoids naming collision**. 

Being a little more knowledgable about styled components, I have decided to use it for my next project and I will post about my experience putting it into practice in a future post. 

#### Till tomorrow, Happy coding! 
