let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
  let result = JSON.parse(request.response);
  4;
  console.log(result);

  // console.log(result);

  let filterRegion = result.filter((result) => result.region === "Asia");

  console.log(filterRegion);

  // ----------------------------------------------------------------------------

  let filterPopulation = result.filter((result) => result.population < 200000);

  console.log(filterPopulation);

  // ----------------------------------------------------------------------------

  result.forEach((result) => {
    console.log(
      `countryName:${result.name} capital:${result.capital} flag:${result.flag}`
    );
  });

  let totalPopulation = result.reduce((acc, curr) => acc + curr.population, 0);

  console.log(totalPopulation);

  // ----------------------------------------------------------------------------

  let usdCount = [];
  let current = result.map((res) => {
    let currencies = res.currencies?.filter((curr) => {
      if (curr?.code === "USD") {
        usdCount.push(curr);
      }
    });
    return res;
  });
  console.log(usdCount);

  // ----------------------------------------------------------------------------

  //  let filterUsDollar = result.filter(result => result.currencies.code === "USD");
  //  console.log(filterUsDollar);
};
