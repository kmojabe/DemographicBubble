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
