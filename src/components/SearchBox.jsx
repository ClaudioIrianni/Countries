
import "../components/SearchFilterContainer.css";
import { IconButton } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

//
const SearchBox = ({ searchInput, setSearchInput, handleSubmit }) => {
  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };


  return (
    <header>
      <IconButton
        icon={<SearchIcon />}
        onClick={handleSubmit}
        colorScheme="blue"
        aria-label="Search database"
      />
      <Input
        type="search"
        //Relaciono el value con el SetSearchInput
        onChange={(e) => {
          onSearchChange(e);
        }}
        value={searchInput}
        boxShadow="dark-lg"
        htmlSize={40}
        width="auto"
        placeholder="Search for a country..."
      />
    </header>
  );
};

export default SearchBox;
