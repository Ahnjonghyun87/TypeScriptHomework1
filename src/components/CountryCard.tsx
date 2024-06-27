import styled from "styled-components";
import { Country } from "../types/countries";

interface CountryCardProps {
  country: Country;
  handleSelectedCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  handleSelectedCountry,
}) => {
  return (
    <StCard onClick={() => handleSelectedCountry(country)}>
      <img src={country.flags.svg} style={{ width: "40px", height: "40px" }} />
      <h3>{country.name.common}</h3>
    </StCard>
  );
};

export default CountryCard;

const StCard = styled.div`
  border-radius: 2px;
  border: 1px solid black;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 150px;
`;
