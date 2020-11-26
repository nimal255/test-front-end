import React from "react";
import { Search } from "react-feather";
import "./components.css";
// import CancelIcon from '@material-ui/icons/Cancel';

const SearchBar = (props) => {


  return (
    <div className="header-input">
      <Search size={14} />
      <input id="searchBox" placeholder="Search..." type="text"
        onChange={(e) => props.handleFilter(e)} 
        // value={props.value}
      />
    </div>
  );
};

export default SearchBar;
