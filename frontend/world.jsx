import { parse_data } from './parse';
import * as d3 from "d3";

// function doSomethingWithData(){
//   console.log(yearlyPopulation);
// }

let yearlyPopulation = {};
let name = "";
let countries = [];
d3.csv("../population_data/population.csv").then(function(data){
  console.log(data);
  var svgContainer = d3.select("body").append("svg")
    .attr("width",1300)
    .attr("height",1500);

  var circles = svgContainer.selectAll("circle")
    .data(Object.keys(data))
    .enter()
    .append("circle");

  var circleAttributes = circles
    .attr("cx", function(d,i) {
      return i*10
    })
    .attr("cy", function(d,i) {
      return i*10
    })
    .attr("r", function(d) {
      if (data[d]["Country Name"] == "World") {
        console.log(data[d]);
        return 0;
      }else {
        return data[d]["1960"]/7500000;
      }
    })
    .attr("fill","red")
    .attr("border","1px solid black");

    var simulation = d3.forceSimulation(circles)
      .velocityDecay(0.2)
      .force("x", d3.forceX().strength(0.002))
      .force("y", d3.forceY().strength(0.002))
      .force("collide", d3.forceCollide().radius(function(d) { return d.r + 0.5; }).iterations(2));

});

// let sampleData = {"Belgium": {1960: "80996351", 1961: "9166764"}, "Belize": {1960: "20619075", 1961: "20953077"}, "Aruba": {1960: "1000000000", 1961: "201117"}};
//
// d3.selectAll("circle").transition()
//     .duration(750)
//     .delay(function(d, i) { return i * 10; })
//     .attr("r", function(d) { return Math.sqrt(d * scale); });

// console.log(Object.keys(parse_data()));
