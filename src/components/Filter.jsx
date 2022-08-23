import React from "react";
import {  Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
} from "@chakra-ui/react";
import "../components/SearchFilterContainer.css";

const Filter = () => {
  return (
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
  );
};

export default Filter;
