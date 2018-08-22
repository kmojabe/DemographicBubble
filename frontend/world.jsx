// import { parse_data } from './parse';
import * as d3 from "d3";
function parse_data(){
    let yearlyPopulation = {};
    let name = "";
    d3.csv("../population_data/population.csv", function(obj){
      name = obj["Country Name"];
      delete obj["Country Name"];
      yearlyPopulation[name] = obj;
    });
    return yearlyPopulation;
}

var svgContainer = d3.select("body").append("svg")
                        .attr("width",1000)
                        .attr("height",700);

let data = parse_data();

var circles = svgContainer.selectAll("circle")
                          .data(data)
                          .enter()
                          .append("circle");

var circleAttributes = circles
                        .attr("cx", 10)
                        .attr("cy", 10)
                        .attr("r", 10)
                        .attr("fill","red");


// console.log(Object.keys(parse_data()));
