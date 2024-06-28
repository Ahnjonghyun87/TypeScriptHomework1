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
  const [sortOrderByName, setSortOrderByName] = React.useState<string>("asc");
  const [sortOrderByPopulation, setSortOrderByPopulation] =
    React.useState<string>("asc");
  const [sortOrderByNameForCountries, setSortOrderByNameForCountries] =
    React.useState<string>("asc");
  const [
    sortOrderByPopulationForCountries,
    setSortOrderByPopulationForCountries,
  ] = React.useState<string>("asc");

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
        selectedCountries.filter(
          (selectedCountry: Country) =>
            selectedCountry.name.common !== country.name.common
        )
      );
    }
  };

  const handleSortByPopulation = (): void => {
    const newSortOrder = sortOrderByPopulation === "asc" ? "desc" : "asc";
    setSortOrderByPopulation(newSortOrder);
    setSelectedCountries((prevSelectedCountries) =>
      [...prevSelectedCountries].sort((a, b) =>
        newSortOrder === "asc"
          ? a.population - b.population
          : b.population - a.population
      )
    );
  };

  const handleSortByName = (): void => {
    const newSortOrder = sortOrderByName === "asc" ? "desc" : "asc";
    setSortOrderByName(newSortOrder);
    setSelectedCountries((prevSelectedCountries) =>
      [...prevSelectedCountries].sort((a, b) =>
        newSortOrder === "asc"
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common)
      )
    );
  };

  const handleSortByPopulationForCountries = (): void => {
    const newSortOrder =
      sortOrderByPopulationForCountries === "asc" ? "desc" : "asc";
    setSortOrderByPopulationForCountries(newSortOrder);
    setCountries((prevCountries) =>
      [...prevCountries].sort((a, b) =>
        newSortOrder === "asc"
          ? a.population - b.population
          : b.population - a.population
      )
    );
  };

  const handleSortByNameForCountries = (): void => {
    const newSortOrder = sortOrderByNameForCountries === "asc" ? "desc" : "asc";
    setSortOrderByNameForCountries(newSortOrder);
    setCountries((prevCountries) =>
      [...prevCountries].sort((a, b) =>
        newSortOrder === "asc"
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common)
      )
    );
  };

  return (
    <>
      <StCountriesContainer>
        <h1>선택된 목록</h1>
        <ButtonContainer>
          <button className="button" onClick={handleSortByPopulation}>
            {sortOrderByPopulation === "asc"
              ? "인구순 (오름차순)"
              : "인구순 (내림차순)"}
          </button>
          <button className="button" onClick={handleSortByName}>
            {sortOrderByName === "asc"
              ? "이름순 (오름차순)"
              : "이름순 (내림차순)"}
          </button>
        </ButtonContainer>
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
        <ButtonContainer>
          <button
            className="button"
            onClick={handleSortByPopulationForCountries}
          >
            {sortOrderByPopulationForCountries === "asc"
              ? "인구순 (오름차순)"
              : "인구순 (내림차순)"}
          </button>
          <button className="button" onClick={handleSortByNameForCountries}>
            {sortOrderByNameForCountries === "asc"
              ? "이름순 (오름차순)"
              : "이름순 (내림차순)"}
          </button>
        </ButtonContainer>

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

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  button {
    background-color: #5f60a5;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  button:hover {
    background-color: darkgray;
  }
`;

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;
  justify-items: center;
`;
