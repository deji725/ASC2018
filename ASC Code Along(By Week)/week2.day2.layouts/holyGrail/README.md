# To Do List
1. ![Wireframe](https://github.com/AllStarCodeOrg/week2.day2.layouts/blob/master/holyGrail/wireframe.png?raw=true)
2. You've been given the HTML and some CSS for this exercise. Take a minute to look at the general structure of the HTML to get a feel for how things are organized.
3. Start with the `.main_container`
   - The items in this div will be positioned using the flexbox model
   - *Note: the height might be tricky. You can set height relative to a percentage of the view window: `height: 100vh`*
4. Without content, the `.main_content_container` has no height, allowing the nav bar and footer to connect. Even with little or no content, this layout should have `.main_content_container` fill the space
   - Hint: continue using the flex model for this. If you're having trouble, try looking up how the [`flex` property](https://www.w3schools.com/cssref/css3_pr_flex.asp) works.
5. Copy and paste the entire content in "_content_filler.html" into the `.main_content` div.
6. We could use left and right padding to center the content better, but what if we want to use that space for more content (in another div)? We can use the flexbox model to do that!
   - The items in the `.main_content_container` div will be positioned using the flexbox model
   - You should already have a `.flex_padding` div before and after the `.main_content` div, which will serve as the padding mentioned above.
     - Give `.flex_padding` a width of 10% of it's container, and a `background-color` of pink (to keep with the theme, and to help visualize where it is!)
7. Hmm, that doesn't look like 10%. What's going on!? Effectively, the content in `.main_content` is messing up how flex fills space (check out this link on [why flex is weird sometimes](https://css-tricks.com/flex-grow-is-weird/)).
   - Recall how we forced the height to fill the space between the nav bar and footer. The same trick can be use to force elements to shrink into place.
   - If you're having trouble, try looking up how the [`flex` property](https://www.w3schools.com/cssref/css3_pr_flex.asp) works.
   - Now just add 26px padding on the left and right, give the text some themed color (#739273), and allow the user to see all of the content by scrolling
     - If you're having issues with making it scroll, check out how [`overflow-y`](https://www.w3schools.com/cssref/css3_pr_overflow-y.asp) works
