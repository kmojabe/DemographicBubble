import { parse_data } from './parse';
import * as d3 from "d3";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let yearlyPopulation = {};
let name = "";
let countries = [];
d3.csv("../population_data/population.csv").then(function(data){
  console.log(data);

  var canvas = d3.select("#network"),
    width = canvas.attr("width"),
    height = canvas.attr("height"),
    ctx = canvas.node().getContext("2d"),
    color = getRandomColor(),
    circles = [],
    simulation = d3.forceSimulation()
      .force("x", d3.forceX(width/2))
      .force("y", d3.forceY(height/2))
      .force("collide", d3.forceCollide(function(d) {
        return( d["Country Name"] != "World" ? d["1985"]/7500000 + 4: 0);
      }))
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
    ctx.fillStyle = color;
    ctx.moveTo(d.x,d.y);
    var radius = d["1985"]/7500000;
    if (d["Country Name"] === "World"){
      radius = 0;
    }
    ctx.arc(d.x, d.y, radius, 0, Math.PI*2);
    circles[d["Country Name"]] = { x: d.x, y: d.y, r: radius};
  }

  function getMousePos(network, e) {
    var rect = network.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  var network = document.getElementById('network');

  network.addEventListener('mousemove', function(e) {
    var mousePos = getMousePos(network, e);
    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    Object.keys(circles).forEach(country => {
      var d = Math.sqrt(Math.pow((circles[country]["x"]-mousePos.x),2) + Math.pow((circles[country]["y"]-mousePos.y),2))
      if (d <= circles[country]["r"]){
        console.log(country);
      }
    });
  }, false);

});
