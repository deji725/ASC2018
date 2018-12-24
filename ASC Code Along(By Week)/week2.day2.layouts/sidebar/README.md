# To Do List
1. ![Wireframe](https://github.com/AllStarCodeOrg/week2.day2.layouts/blob/master/sidebar/wireframe.png?raw=true)
2. You've been given the HTML for this exercise. So just focus on the CSS.
3. First, set up the `.main_container` div
   - The items in this div will be positioned using the flexbox model
   - *Note: the height might be tricky. You can set height relative to a percentage of the view window: `height: 100vh`*
4. Next, set up the `.sidebar` img
   - It should be 72px in width
5. Next, work on the `.sidebar` div
   - Set the width to 30% of the container. Did you see anything change?
     - Try using [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
   - Set the background to the "crash.jpg" found in the "assets" folder.
   - To add an overlay, see this [css-trick for tinting background image](https://css-tricks.com/tinted-images-multiple-backgrounds/) - The wireframe features a 45% opacity black overlay
   - Position the background image to be centered in the div
     - Try using the `background-position-x` property
6. Now use flex properties to position the content as shown in the wireframe
   - You may be curious about how to make the black .svg image white...try Googling "black svg to white"
   - Remember to add 40px padding at the bottom
7. Lastly, the `.scrolling_content` requires 26px padding and centering the text
   - To make the window scroll properly, consider the `overflow` property.
     - Can you guess how `overflow-y` works?

