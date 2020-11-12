// Styling
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search for your movie name..."
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
