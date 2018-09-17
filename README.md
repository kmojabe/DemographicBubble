# Demographic Bubble

[Live Version!](https://kmojabe.github.io/DemographicBubble/)

Demographic Bubble is a data visualization application that allows users to view statistics such as population and GDP with respect to time. Each circle on the map represents a country and the radius of the circle is proportional to the country's population/GDP. There is also a timeline on the bottom of the page to adjust statistics by time.

![alt text](https://github.com/kmojabe/WorldVisualizer/blob/master/population_data/Screen%20Shot%202018-08-24%20at%204.33.51%20PM.png)

* GDP and Population stats are represented by their relative size based on the world's total GDP/Population.
* All of these statistics are adjustable by dragging the timeline icon on the bottom of the page.

### Functionality 

In WorldVisualizer, users have the ability to:

- Interact with the 2D map by dragging the timeline
- Viewing country population from 1960 to 2017
- Adjust the radius of the bubbles by adjusting the year 
- Hover over countries to see limited data on the country

![alt text](https://github.com/kmojabe/DemographicBubble/blob/master/frontend/screen2016.png)
World Population in 2016

### Architecture and Technologies
This project was implemented with the following:

* HTML5 Canvas for DOM Manipulation and Map rendering
* D3 to add interactivity to the Country Objects
* Webpack to bundle and serve up various scripts

In addition to the webpack entry file, other scripts involved will include:
* `render.js`:  this script will handle the logic for creating and updating the necessary DOM elements.
* `world.js`: this script calls the render script and also sends different data based on user choice

