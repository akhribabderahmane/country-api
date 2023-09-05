import React, { createContext, useEffect, useState } from "react";
import useFetch from "../data/UseFetch";
export const AllcountriesContext = createContext();

const AllcountriesContextProvider = (props) => {
  const [countriesList, setCountriesList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [regionSelected, setRegionSelected] = useState('Filtered by region');
  const [selectedCountry,setSelectedCountry]=useState('');
  const { data, isLoading, error } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,flag,flags,region,population,capital,subregion,currencies,languages,borders"
  );
  useEffect(() => {
    if (data && !isLoading) {
      const mylist = [];
      data.map((oneCountry) => {
        const country = {
          name: {
            commonName: oneCountry.name.common,
            nativeName: oneCountry.name.nativeName,
          },
          population: oneCountry.population,
          region: {
            main: oneCountry.region,
            sub: oneCountry.subregion,
          },
          capital: oneCountry.capital[0],
          domain: oneCountry.flag,
          flag: oneCountry.flags.png,
          languages: oneCountry.languages,
          currencies: oneCountry.currencies,
          borders:oneCountry.borders
        };
        mylist.push(country);
      });
      console.log(data);
      setCountriesList(mylist);
      setOriginalList(mylist);
      console.log("my list ", mylist);
    }
  }, [data]);

  useEffect(() => {
    if (searchName.length === 0) {
      setCountriesList(originalList);
    } else {
      if (Array.isArray(countriesList)) {
        const filtered = countriesList.filter(
          (country) =>
            country.name.commonName &&
            country.name.commonName
              .toLowerCase()
              .includes(searchName.toLowerCase())
        );
        setCountriesList(filtered);
      }
    }
  }, [searchName,regionSelected]);

  useEffect(() => {
    if (regionSelected === "" || regionSelected === "Filtered by region") {
      setCountriesList(originalList)
    } else {
      let filtred = [];
      switch (regionSelected) {
        case "Africa":
          filtred = originalList.filter(
            (country) => country.region.main === "Africa"
          );
          setCountriesList(filtred);
          break;
        case "Americas":
          filtred = originalList.filter(
            (country) => country.region.main === "Americas"
          );
          setCountriesList(filtred);
          break;
        case "Europe":
          filtred = originalList.filter(
            (country) => country.region.main === "Europe"
          );
          setCountriesList(filtred);
          break;


          case "Asia":
            filtred = originalList.filter(
              (country) => country.region.main === "Asia"
            );
            setCountriesList(filtred);
            break;
          case "Oceania":
            filtred = originalList.filter(
              (country) => country.region.main === "Oceania"
            );
            setCountriesList(filtred);
            break;
          case "Antarctic":
            filtred = originalList.filter(
              (country) => country.region.main === "Antarctic"
            );
            setCountriesList(filtred);
            break;
          default:          
            break;
      }
    }
  }, [regionSelected]);

  return (
    <AllcountriesContext.Provider
      value={{
        countriesList,
        searchName,
        setSearchName,
        regionSelected,
        setRegionSelected,
        selectedCountry,
        setSelectedCountry
      }}
    >
      {props.children}
    </AllcountriesContext.Provider>
  );
};

export default AllcountriesContextProvider;
