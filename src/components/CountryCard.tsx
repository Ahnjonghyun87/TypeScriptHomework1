import { Country } from "../types/countries";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div>
      <img src={country.flags.svg} style={{ width: "40px", height: "40px" }} />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default CountryCard;
