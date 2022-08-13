import React from "react";
import "../App.css";
import "../components/SearchBox.css";
import { IconButton, Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";

const SearchBox = () => {
  return (
    <header className="searchBar">
      <div>
        <IconButton colorScheme="blue" aria-label="Search database" />
        <Input
          boxShadow='dark-lg'
          htmlSize={40}
          width="auto"
          placeholder="Search for a country..."
        />
      </div>
      <div>
        <Menu>
          <MenuButton as={Button}>Filter by Region</MenuButton>
          <MenuList>
            <MenuItem>Africa</MenuItem>
            <MenuItem>America</MenuItem>
            <MenuItem>Asia</MenuItem>
            <MenuItem>Europe</MenuItem>
            <MenuItem>Oceania</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </header>
  );
};

export default SearchBox;
