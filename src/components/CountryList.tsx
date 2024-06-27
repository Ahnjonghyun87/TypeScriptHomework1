import React from "react";

import styled from "styled-components";
import { getCountries } from "../api/countries";
import { Country } from "../types/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>(
    []
  );

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getCountries();
        setCountries(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchCountries();
    console.log("countries :", countries);
  }, []);

  const handleSelectedCountry = (country: Country): void => {
    if (
      !selectedCountries.find(
        (selectedCountry: Country) =>
          selectedCountry.name.common === country.name.common
      )
    ) {
      setSelectedCountries([...selectedCountries, country]);
    } else {
      setSelectedCountries(
        selectedCountries.filter((selectedCountry: Country) => {
          selectedCountry.name.common !== country.name.common;
        })
      );
    }
  };

  return (
    <>
      {" "}
      <StCountriesContainer>
        <h1>선택된 목록</h1>
        <StGrid>
          {selectedCountries.map((country: Country) => {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
                handleSelectedCountry={handleSelectedCountry}
              />
            );
          })}
        </StGrid>
      </StCountriesContainer>
      <StCountriesContainer>
        <h1>나라목록</h1>
        <StGrid>
          {countries.map((country: Country) => {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
                handleSelectedCountry={handleSelectedCountry}
              />
            );
          })}
        </StGrid>
      </StCountriesContainer>
    </>
  );
};

export default CountryList;

const StCountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;
  justify-items: center;
`;
