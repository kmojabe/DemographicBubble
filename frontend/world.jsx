import { parse_data } from './parse';
import * as d3 from "d3";

let yearlyPopulation = {};
let name = "";
let countries = [];
d3.csv("../population_data/population.csv").then(function(data){
  console.log(data);

  var canvas = d3.select("#network"),
    width = canvas.attr("width"),
    height = canvas.attr("height"),
    ctx = canvas.node().getContext("2d"),
    r = 3,
    simulation = d3.forceSimulation()
      .force("x", d3.forceX(width/2))
      .force("y", d3.forceY(height/3))
      .force("collide", d3.forceCollide(12+1))
      .force("charge", d3.forceManyBody()
          .strength(-5))
      .on("tick", update);

  simulation.nodes(data);

  function update(){
    ctx.clearRect(0,0,width,height);

    ctx.beginPath();
    data.forEach(drawNode);
    ctx.fill();
  }

  function drawNode(d){
    ctx.moveTo(d.x,d.y);
    var radius = d["1960"]/7500000;
    if (d["Country Name"] === "World"){
      radius = 0;
    }
    ctx.arc(d.x, d.y, radius, 0, Math.PI*2);
  }
});
