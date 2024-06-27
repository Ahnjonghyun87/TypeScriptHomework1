import "./App.css";
import { fetchCountries } from "./api/fetchCountry";

function App() {
  return fetchCountries();
}

export default App;
