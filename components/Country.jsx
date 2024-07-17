import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import backArrow from "../images/backArrow.svg";
import forwardArrow from "../images/forwardArrow.svg";
import { ThemeContext } from "../contexts/ThemeContext";

const Country = () => {
  const { country } = useParams();
  const [isDark] = useContext(ThemeContext);

  const { state } = useLocation();
  console.log(state);

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  function updateData(myData) {
    setCountryData({
      flag: myData?.flags.svg,
      ctyName: myData?.name.common,
      population: myData?.population,
      region: myData?.region,
      subregion: myData?.subregion,
      capital: myData?.capital,
      tld: myData?.tld,
      languages: Object.values(myData.languages || {}),
      currencies: Object.keys(myData.currencies || {}).map(
        (key) => myData.currencies[key].name
      ),
      borders: [],
    });

    if (!myData.borders) {
      myData.borders = [];
    }

    Promise.all(
      myData.borders.map((borderID) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${borderID}`)
          .then((res) => res.json())
          .then(([borderCty]) => borderCty.name.common);
      })
    ).then((borders) => {
      setTimeout(() => {
        setCountryData((prevState) => ({ ...prevState, borders: borders }));
      });
    });
  }

  useEffect(() => {
    if (state) {
      console.log("hi");
      updateData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${country}?fulltext=true`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const [myData] = data.filter((cty) => {
          return cty.name.common.toLowerCase() === country.toLowerCase();
        });

        updateData(myData);
      })
      .catch((err) => {
        console.log(err);
        setNotFound(true);
      });
  }, [country]);

  function handleBack() {
    history.back();
  }

  function handleForward() {
    history.forward();
  }

  if (notFound) {
    return (
      <div className="mainCountry ">
        <div className="backButton">
          <button onClick={handleBack}>
            <img src={backArrow} alt="Back arrow" />
            <div className="buttonText">Back</div>
          </button>
        </div>
        <div>Country Not Found!</div>
      </div>
    );
  }

  if (countryData === null) {
    return "Loading...";
  }

  return (
    <div className={`mainCountry ${isDark ? "dark" : ""}`}>
      <div className="backButton">
        <button onClick={handleBack}>
          <img src={backArrow} alt="Back arrow" />
          <div className="buttonText">Back</div>
        </button>

        <Link to={"/"}>
          <button>
            <div className="buttonText home">Home</div>
          </button>
        </Link>
        <button onClick={handleForward}>
          <div className="buttonText">Forward</div>
          <img src={forwardArrow} alt="Back arrow" />
        </button>
      </div>

      <div className="displayContainer">
        <div className="imgContainer">
          <img src={countryData.flag} alt={`${countryData.ctyName} flag`} />
        </div>
        <div className="countryDetails">
          <div className="cName">{countryData.ctyName}</div>

          <div className="list">
            <div className="leftList">
              <ul>
                <li>
                  <b>Population:</b> {countryData.population}
                </li>
                <li>
                  <b>Region:</b> {countryData.region}
                </li>
                <li>
                  <b>Sub Region:</b> {countryData.subregion}
                </li>
                <li>
                  <b>Capital:</b> {countryData.capital}
                </li>
              </ul>
            </div>

            <div className="rightList">
              <ul>
                <li>
                  <b>Top Level Domain:</b> {countryData.tld}
                </li>
                <li>
                  <b>Currencies:</b>
                  {countryData?.currencies.map((curr) => curr)}
                </li>
                <li>
                  <div className="buttonContainer">
                    <b>Languages:</b>
                    {countryData.languages.map((lang, index) => {
                      return <button key={index}>{lang}</button>;
                    })}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border">
            <div className="buttonContainer">
              <b>Border Countries:</b>
              {countryData.borders.map((border, index) => {
                return (
                  <button key={index}>
                    <Link to={`/${border}`}>{border}</Link>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
