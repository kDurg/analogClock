# Background:

Astro Clock is a project inspired by a coding challenge. The challenge given to me was to use HTML, CSS and Javascript to create an analog clock. While I have done plenty of CSS, I have always focused more on functionality of my projects, rather than how 'polished' they look. This was a fun way to get myself to play with transitions and styling again... and I started to go a little overboard. While I had a few more ideas, I had a deadline to stay within. 

# Process:

### Clock:

My process was straightforward, starting with the clock itself:

- Set up containing circle
- Draw four lines that will become hour markers
- Add inside 'Face' to cover intersecting lines
- Draw hands
- Basic styling

Once I had the basic shape and style, I could use JS to start the clock. Initially, I was rendering the second hand each second, which caused a jerky 'snap', but then opted in to move the transition into milliseconds for the smooth movement. 

### Stars:

Next was getting the 'stars' up and going. This process was mostly done with Javascript:

- Make 50 stars on initial load
- Get the browser window size for the Canvas
- Randomize the size of the stars
- Randomize the position of the stars within the Canvas
- Add a smooth transition to move the stars

### Loading Transition:

Finally, once I had my stars flying around the clock, it was time to make the initial load transition. This was the easiest part of the project. I added a fade and a blur to the background while keeping the text readable.

# Screen Shot: