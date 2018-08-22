import { parse_data } from './parse';
import * as d3 from "d3";

// function doSomethingWithData(){
//   console.log(yearlyPopulation);
// }
//
// let yearlyPopulation = {};
// let name = "";
// let countries = [];
// d3.csv("../population_data/population.csv", function(obj){
//   name = obj["Country Name"];
//   countries.push(name);
//   delete obj["Country Name"];
//   yearlyPopulation[name] = obj;
//   doSomethingWithData();
// });

let sampleData = {"Belgium": {1960: "80996351", 1961: "9166764"}, "Belize": {1960: "20619075", 1961: "20953077"}, "Aruba": {1960: "1000000000", 1961: "201117"}};
console.log(sampleData);
var svgContainer = d3.select("body").append("svg")
                        .attr("width",1000)
                        .attr("height",1000);

var circles = svgContainer.selectAll("circle")
                          .data(Object.keys(sampleData))
                          .enter()
                          .append("circle");

var circleAttributes = circles
                        .attr("cx", function(d,i) {
                          return i*100 + 100
                        })
                        .attr("cy", function(d,i) {
                          return i*100 + 100
                        })
                        .attr("r", function(d) {return sampleData[d]["1960"]/7500000})
                        .attr("fill","red");


// console.log(Object.keys(parse_data()));
