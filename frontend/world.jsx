import drawCanvas from './draw_canvas';
import * as d3 from "d3";

var prev_year = "1988";

d3.csv("../population_data/population.csv").then(function(data){
  var timeSlider = document.getElementById("myRange");
  drawCanvas(data,timeSlider.value);
  timeSlider.addEventListener('input', function(){
    let year = timeSlider.value;

    if (prev_year !== year){
      prev_year = year;
      var container = document.getElementById("canvas-container");
      container.innerHTML = '';
      // document.removeChild(container);

      var canv = document.createElement('canvas');
      canv.id = 'network';
      canv.width = "1000";
      canv.height = "650";
      container.appendChild(canv);
      d3.select(".infobox .ccc").text("Hover over a circle to learn more information!");
      d3.select(".infobox .yyy").text(" ");
      // document.body.appendChild(canv);
    }
    d3.select(".curr-year").text(year);
    drawCanvas(data,year);
  })

});
