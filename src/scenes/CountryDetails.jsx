import React, { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { ThemeContext } from "../context/ThemeContext";
import { v4 as uuidv4 } from "uuid";
import iso3166 from "iso-3166-1";
import { Link } from "react-router-dom";
import countries from "iso-3166-1/dist/iso-3166";
import { AllcountriesContext } from "../context/AllcountriesContext";
const CountryDetails = () => {
  const { theme } = useContext(ThemeContext);
  const { selectedCountry}=useContext(AllcountriesContext)
  const country=selectedCountry;
   const formCodes=(countryLanguages)=>{
       const languageCode=[];
       Object.keys(countryLanguages).map((code)=>{
        languageCode.push(code);
       })
       return languageCode;
   }
  const formLanguages = (countryLanguages) => {
    const languages = [];
    const languageCode = [];
    Object.keys(countryLanguages).map((langue) => {
      languageCode.push(langue);
      languages.push(countryLanguages[langue]);
    });
    console.log(languages)
    return languages;
  };

  const myCountry = {
    name: {
      commonName: country.name.commonName,
      nativeName: country.name.nativeName[formCodes(country.languages)[0]].common,
    },
    population: country.population,
    region: {
      main: country.region.main,
      sub: country.region.sub,
    },
    capital: country.capital,
    domain: country.domain,
    flag: country.flag,
    languages: formLanguages(country.languages),
    currencies: country.currencies,
    borders: country.borders,
  };
  return (
    <section className="pt-4">
      <div className="md:mx-16 mx-8 mt-4">
        <Link to='*'>
        <button
          className=" flex flex-row gap-1 items-center font-semibold text-xl py-2 px-6 shadow-lg rounded-lg"
          style={{
            color: theme.textColor,
            backgroundColor: theme.elemntBackground,
          }}
        >
          <BiArrowBack></BiArrowBack>
          Back
        </button>
        </Link>
      </div>
      <div className=" flex md:flex-row flex-col items-center mx-auto mt-12 w-[90vw]">
        <div className=" md:w-5/12 w-auto">
          <img className=" w-full" src={myCountry.flag} alt="flag" />
        </div>
        <div className=" md:w-7/12 w-auto md:px-10 px-3 py-3 ">
          <h1
            className=" text-4xl font-bold md:mt-0 mt-3"
            style={{ color: theme.titleColor }}
          >
            {myCountry.name.commonName}
          </h1>
          <div className=" flex md:flex-row flex-col justify-between  md:gap-10 gap-5 md:mt-10 mt-4 mr-10">
            <div className=" space-y-2">
              <p
                className=" font-semibold text-lg"
                style={{ color: theme.titleColor }}
              >
                Native Name :{" "}
                <span
                  className=" font-normal text-base opacity-90"
                  style={{ color: theme.textColor }}
                >
                  {myCountry.name.nativeName}
                </span>
              </p>
              <p
                className=" font-semibold text-lg"
                style={{ color: theme.titleColor }}
              >
                Population :{" "}
                <span
                  className=" font-normal text-base opacity-90"
                  style={{ color: theme.textColor }}
                >
                  {myCountry.population.toLocaleString()}
                </span>
              </p>
              <p
                className=" font-semibold text-lg"
                style={{ color: theme.titleColor }}
              >
                Region :{" "}
                <span
                  className=" font-normal text-base opacity-90"
                  style={{ color: theme.textColor }}
                >
                  {myCountry.region.main}
                </span>
              </p>
              <p
                className=" font-semibold text-lg"
                style={{ color: theme.titleColor }}
              >
                Sub Region :{" "}
                <span
                  className=" font-normal text-base opacity-90"
                  style={{ color: theme.textColor }}
                >
                  {myCountry.region.sub}
                </span>
              </p>
              <p
                className=" font-semibold text-lg"
                style={{ color: theme.titleColor }}
              >
                Capital :{" "}
                <span
                  className=" font-normal text-base opacity-90"
                  style={{ color: theme.textColor }}
                >
                  {myCountry.capital}
                </span>
              </p>
            </div>
            <div className=" space-y-2">
              <p
                className=" font-semibold text-lg"
                style={{ color: theme.titleColor }}
              >
                Top Level Domain :{" "}
                <span
                  className=" font-normal text-base opacity-90"
                  style={{ color: theme.textColor }}
                >
                  {" "}
                  .{myCountry.domain}
                </span>
              </p>
              <p
                className=" font-semibold text-lg"
                style={{ color: theme.titleColor }}
              >
                Currencies :{" "}
                <span
                  className=" font-normal text-base opacity-90"
                  style={{ color: theme.textColor }}
                >
                  {myCountry.currencies[formCodes(myCountry.currencies)[0]].name +
                    "  " +
                    myCountry.currencies[formCodes(myCountry.currencies)[0]].symbol}
                </span>
              </p>
              {/* <p className=' font-semibold text-lg' style={{color:theme.titleColor}}>Languages : <span className=' font-normal text-base opacity-90' style={{color:theme.textColor}}>{myCountry.languages}</span></p> */}
              <p
                className=" font-semibold text-lg"
                style={{ color: theme.titleColor }}
              >
                Languages :
                {myCountry.languages.map((langue) => {
                  return (
                    <span
                      className=" font-normal text-base opacity-90"
                      style={{ color: theme.textColor }}
                      key={uuidv4()}
                    >
                      {(myCountry.languages.indexOf(langue) !== myCountry.languages.length-1) ? " "+langue+" ," : " "+langue+"" }
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className=" md:mt-10 mt-6 flex md:flex-row flex-col justify-start items-start">
            <div className=" flex flex-row gap-4 flex-wrap md:mt-0 mt-4">
              <p
                className=" font-semibold text-lg w-auto"
                style={{ color: theme.titleColor }}
              >
                Border Countries :
              </p>
              {myCountry.borders.map((border) => {
                return (
                  <div
                    key={uuidv4()}
                    className="py-1 px-2 w-fit rounded-md shadow-xl min-w-[130px] flex items-center justify-center"
                    style={{
                      color: theme.textColor,
                      backgroundColor: theme.elemntBackground,
                    }}
                  >
                   <p>{border !=="UNK" && iso3166.whereAlpha3(border).country}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
