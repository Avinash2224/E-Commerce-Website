import React, { useContext } from "react";
import logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { Button } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { MyContext } from "../../App";

const Header = () => {

const context = useContext(MyContext); 

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Always welcome to shop</p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row align-items-center">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to="/">
                  <img src={logo} alt="logo" className="logo-img" />
                </Link>
              </div>
              <div className="d-flex align-items-center part2 col-sm-10">
                {
                  context.countryList.length!==0 && <CountryDropdown/>
                }
                <SearchBox />
                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle">
                    <FaUserCircle />
                  </Button>
                </div>
                <div className="ml-auto cartTab d-flex align-items-center">
                  <span className="price">$3.90</span>
                  <div className="position-relative ml-2">
                    <Button className="circle">
                      <IoCartOutline />
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
          <Navigation></Navigation>
      </div>
    </>
  );
};

export default Header;
