# Demographic Bubble
[Live Version!](https://kmojabe.github.io/DemographicBubble/)
Demographic Bubble is a data visualization application that allows users to view statistics such as population and GDP with respect to time. Each circle on the map represents a country and the radius of the circle is proportional to the country's population/GDP. There is also a timeline on the bottom of the page to adjust statistics by time.

![alt text](https://github.com/kmojabe/WorldVisualizer/blob/master/population_data/Screen%20Shot%202018-08-24%20at%204.33.51%20PM.png)

* GDP and Population stats are represented by their relative size based on the world's total GDP/Population.
* All of these statistics are adjustable by dragging the timeline icon on the bottom of the page.

### Functionality & MVP  

In WorldVisualizer, users will be able to:

- [ ] Interact with the 2D map by dragging 
- [ ] See color vizualizations based on certain statistics
- [ ] Adjust the timeline which results in a different visual map
- [ ] Click on countries to see limited data on the country

In addition, this project will include:

- [ ] Draggable Timeline bar
- [ ] Checkbox list of different statistics

### Wireframes
This app consists of an interactive 2D map that allows users to select which statistic they want to view and in which year.

* The Main majority of the screen is the map. Users are able to see the and hover over each bubble.
* The top of the screen will consist of a checkbox bar to select stats. Users can choose between population and gross domestic product.
* The bottom of the screen will indicate which year these stats are from. The user can toggle the year in which they are viewing the globe.
### Architecture and Technologies
This project will be implemented with the following:
* Vanilla Javascript for overall structure
* HTML5 Canvas for DOM Manipulation and Map rendering
* D3 to add interactivity to the Country Objects
* Webpack to bundle and serve up various scripts

In addition to the webpack entry file, other scripts involved will include:
* `render.js`:  this script will handle the logic for creating and updating the necessary DOM elements.
* `world.js`: this script calls the render script and also sends different data based on user choice

