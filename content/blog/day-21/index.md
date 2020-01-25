---
title : DAY 21 - Gatsby & Semantic UI 
subtitle : A step by step guide
slug : day-21
date : 2020-01-21
author : Lucie B
---
As some of you might know, I have been working on a React project and using Semantic UI. Being quite impressed with this, I wanted to include Semantic UI in Gatsby. Unfortunatelly the resources on how to do so are quite limited so I thought I'd put together this short step-by-step guide to add Semantic UI to your next Gatsby project. It takes a few steps but it's actually a lot easier than I thought it would be. 

Ok, here we go...

## The default Gatsby Starter

Start by installing the default Gatsby starter from the command line: 
```javascript
gatsby new yourprojectname
```
I named mine Gatsby-Semantic but you can name your project which ever you like.
Then cd into the new project (still in the command line) and open it in your code editor, e.g. VS Code.

## Dependencies and gatsby-config update

First, you need to install the required dependencies via the command line:

```jsx
npm install --save semantic-ui-css semantic-ui-react
```
as well as:

```jsx
npm install --save gatsby-plugin-less less
```
and 
```jsx
npm install --save semantic-ui-less
```

Then make sure to add the Gatsby plugin to your gatsby-config.js file

```jsx
module.exports = {
    plugins: [
        `gatsby-plugin-less`,
    ]
}
```
Ok, now for the tricky part... sort of...

## Digging through your node-modules

In the scr folder, create a new folder and name it: semantic

Then, its time to go dig around in your node-modules for the semantic-ui-less folder. Within it, you'll find a folder named: _site,
and a file named: theme.config.example. Copy both of these into your new semantic folder, which you just created within your src folder. 

Now rename the folder _site to: site  and rename the file theme.config.example to theme.config

With this taken care of, open your new theme.config file. On line 91 (or thereabouts) replace: 
```jsx
@import (multiple) “theme.less";
```
with
```jsx
@import (multiple) ‘~semantic-ui-less/theme.less';
```
Then, just above, (should be on line 84), replace the path to site override folder
```jsx
@siteFolder  : ‘site';
```
with
```jsx
@siteFolder  : ‘../../src/semantic/site’;
```
For the fonts, at the end of the file, above /* End Config */ add: 
```jsx
@fontPath : "../assets/fonts";
```

## Gatsby-node.js update

Ok, we're nearly done. In you gatsby-node.js file, add the following lines of code:

```jsx
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config'),
            },
        },
    });
};
```
then... 

## Just 2 more things to do

Add the following to your gatsby-browser.js file:

```jsx
require("semantic-ui-css/semantic.min.css")
```
and finally in your layout.js file, import the followings:

```jsx
import "semantic-ui-less/semantic.less";
import "semantic-ui-css/semantic.min.css";
```
## Success ! 

There you go! You’re all set. 
Just run gatsby develop from the command line and make sure it all works. 

Now that you have semantic up and going you can create your own theme as well as import all of the Semantic UI React elements as needed. For example: 

```jsx
import { Segment, Container, Button, Header } from "semantic-ui-react"
```

I hope this helps. I will keep playing around with this and create a demo page at some point. In the meanwhile the code is availble in [my Github Repo](https://github.com/luciebaker/gatsby-semantic).

More info on Semantic UI for React can be found at their [official site](https://react.semantic-ui.com/). If you have any questions or comments about the above, let me know on [Twitter](https://twitter.com/LBMedia7)

#### Till tomorrow, Happy coding!