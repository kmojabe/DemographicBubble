export const parse_data = () => {
    let yearlyPopulation = {};
    let name = "";
    d3.csv("../population_data/population.csv", function(obj){
      name = obj["Country Name"];
      delete obj["Country Name"];
      yearlyPopulation[name] = obj;
    });
    return yearlyPopulation;
}

// 
// var svgContainer = d3.select("body").append("svg")
//   .attr("width",1300)
//   .attr("height",1500);
//
// var circles = svgContainer.selectAll("circle")
//   .data(Object.keys(data))
//   .enter()
//   .append("circle");
//
// var circleAttributes = circles
//   .attr("cx", function(d,i) {
//     return i*10
//   })
//   .attr("cy", function(d,i) {
//     return i*10
//   })
//   .attr("r", function(d) {
//     if (data[d]["Country Name"] == "World") {
//       console.log(data[d]);
//       return 0;
//     }else {
//       return data[d]["1960"]/7500000;
//     }
//   })
//   .attr("fill","red")
//   .attr("border","1px solid black");
