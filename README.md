# World Visualizer
World visualizer is a data visualization application that allows users to view statistics such as HDI, Gini, GDP (PPP and nominal), population, and potentially others with time. The application utilizes pixel by pixel color comparisons of nations on the map. Users will have the ability to zoom in/out on nations and focus on that countries statistics alone. There will also be a timeline on the bottom of the page to adjust statistics by time.

* The HDI and Gini stats will be represented by adjusting the colors of the nations.
* GDP and Population stats will be represented by their relative size based on the world's total GDP/Population.
* Population will also be represented by blue dots across the globe based on a certain number people. This graphical view will allow users to see the population density across the globe.
* All of these statistics will be adjustable by dragging the timeline icon on the bottom of the page.

### Functionality & MVP  

In WorldVisualizer, users will be able to:

- [ ] Interact witht the 2D map by dragging and zooming
- [ ] See color vizualizations based on certain statistics
- [ ] Adjust the timeline which results in a different visual map
- [ ] Click on countries to see limited data on the country (potentiall graphs)
- [ ] View population pockets throughout the world

In addition, this project will include:

- [ ] Draggable Timeline bar
- [ ] Checkbox list of different statistics

### Wireframes
This app will consist of an interactive 2D map that allows users to select which statistic they want to view and in which year. 
* The Main majority of the screen will be the map. Users can zoom in/out and navigate the map.
* The top of the screen will consist of a checkbox bar to select stats. Users can choose between human development, income equality, population, and gross domestic product.
* The bottom of the screen will indicate which year these stats are from. The user can toggle the year in which they are viewing the globe.
### Architecture and Technologies
This project will be implemented with the following:
* Vanilla Javascript for overall structure
* HTML5 Canvas for DOM Manipulation and Map rendering
* D3 to add interactivity to the Globe Object
* Webpack to bundle and serve up various scripts

In addition to the webpack entry file, other scripts involved will include:
* `globe.js`:  this script will handle the logic for creating and updating the necessary DOM elements.
* `country.js`: this is the individual country object to render and manipulate

### Implementation Timeline
**Over the weekend**:
-[ ] create project proposal and research dynamic maps

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 4 scripts outlined above. Learn the basics of Canvas. Goals for the day:
-[ ] Get `webpack` serving files and frame out index.html
-[ ] Learn enough `Canvas` and `D3` to render a map

**Day 2**: Import Data from external API
