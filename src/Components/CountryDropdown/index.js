import React, { useState, useContext } from "react";
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { MyContext } from "../../App"; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';

const CountryDropdown = () => {
  const { countryList, setCountryList } = useContext(MyContext); 
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    // Fetch country list only if it's empty
    if (countryList.length === 0) {
      getCountry("https://countriesnow.space/api/v0.1/countries/");
    }
  };

  const handleClose = (country) => {
    setAnchorEl(null);
    if (country) {
      setSelectedCountry(country);  // Update the selected country
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  // Filter countries based on search query
  const filteredCountries = countryList.filter((country) =>
    country.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Button className="countryDrop" onClick={handleClick}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{selectedCountry}</span> {/* Display selected country */}
        </div>
        <span className="ml-auto"><FaAngleDown /></span>
      </Button>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {/* Search field */}
        <div style={{ padding: "8px" }}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Country"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {/* Filtered countries */}
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <MenuItem key={index} onClick={() => handleClose(country.country)}>
              {country.country}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No countries found</MenuItem>
        )}
      </Menu>
    </>
  );
};

export default CountryDropdown;
