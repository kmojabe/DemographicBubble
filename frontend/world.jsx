import { parse_data } from './parse';
// document.addEventListener('DOMContentLoaded', () => {
//
//   const root = document.getElementById('root');
// });
import * as d3 from "d3";

d3.select("#svg-container")
    .append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", 20)
        .attr("fill", "grey");

console.log("still here");
d3.selectAll('h1').style('color','red');

d3.csv("population_data/population.csv").get(function(error,data){
  console.log(data);
})
