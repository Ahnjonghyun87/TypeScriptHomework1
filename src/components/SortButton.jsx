import React from "react";

const SortButton: React.FC = () => {
  const [sortOrderByName, setSortOrderByName] = React.useState < string > "asc";
  const [sortOrderByPopulation, setSortOrderByPopulation] =
    React.useState < string > "asc";
  const [sortOrderByNameForCountries, setSortOrderByNameForCountries] =
    React.useState < string > "asc";
  const [
    sortOrderByPopulationForCountries,
    setSortOrderByPopulationForCountries,
  ] = React.useState < string > "asc";

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

  return <div>SortButton</div>;
};

export default SortButton;
