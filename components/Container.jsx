import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import ContainerShimmer from "./ContainerShimmer";

const Container = ({ countryName, region }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const selectedCountries = data.filter((data) => {
    return data.region.toLowerCase().includes(region.toLowerCase());
  });

  return (
    <>
      {!data.length ? (
        <ContainerShimmer />
      ) : (
        <div className="cardContainer">
          {selectedCountries
            .filter((data) => {
              return data.name.common.toLowerCase().includes(countryName);
            })
            .map((country, index) => {
              return (
                <Card
                  key={index}
                  name={country.name.common}
                  image={country.flags.png}
                  countryPop={country.population}
                  countryReg={country.region}
                  countryCap={country.capital}
                  data={country}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Container;
