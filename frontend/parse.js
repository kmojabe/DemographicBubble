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

// .on("mouseover", function(d) {
//   console.log(d);
//   let actionType;
//   if (type === "asylum") {
//     actionType = "came to";
//   } else {
//     actionType = "left";
//   }
//   d3.select(this).attr("fill-opacity", 1);
//   d3.select(".infobox .ccc").text(d.code);
//   d3.select(".infobox .yyy").text(
//     "In " +
//       String(targetYear) +
//       ", " +
//       String(d[targetYear].toLocaleString()) +
//       " refugees " +
//       actionType +
//       " " +
//       String(d.country)
//   );
//   d3.select(".infobox").style("visibility", "visible");
// })
// .on("mouseout", function(d) {
//   d3.select(".infobox").style("visibility", "hidden");
//   d3.select(this).attr("fill-opacity", 0.5);
// });
