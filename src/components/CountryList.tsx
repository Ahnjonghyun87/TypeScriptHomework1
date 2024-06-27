import React from "react";

import { getCountries } from "../api/countries";
import { Country } from "../types/countries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);

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
  return (
    <div>
      <h1>나라목록</h1>
      <div>
        {countries.map((country: Country) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </div>
    </div>
  );
};

export default CountryList;
