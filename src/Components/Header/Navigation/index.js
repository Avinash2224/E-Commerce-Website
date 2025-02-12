import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation =()=>{

    const[isopenSdebarval, setisopenSdebarval] = useState(false)
     return(
        <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navPart1">
              <div className="cartWrapper"> 
              <Button className="allCatTab align-items-center">
                <span className="icon1 mr-2"><IoIosMenu/></span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2"><FaAngleDown /></span>
              </Button>
              </div>
            </div>
            <div className="col-sm-9 navPart2">
  <ul className="list list-inline">
    <li className="list-inline-item">
      <Link to="">Home</Link>
    </li>

    {/* Men Dropdown */}
    <li className="list-inline-item dropdown">
      <Link to="" className="dropdown-toggle">
        Men
      </Link>
      <ul className="dropdown-menu">
        <li><Link to="">Clothing</Link></li>
        <li><Link to="">Footwear</Link></li>
        <li><Link to="">Watches</Link></li>
        <li><Link to="">Accessories</Link></li>
      </ul>
    </li>

    {/* Women Dropdown */}
    <li className="list-inline-item dropdown">
      <Link to="" className="dropdown-toggle">
        Women
      </Link>
      <ul className="dropdown-menu">
        <li><Link to="">Clothing</Link></li>
        <li><Link to="">Footwear</Link></li>
        <li><Link to="">Watches</Link></li>
        <li><Link to="">Accessories</Link></li>
      </ul>
    </li>

    {/* Beauty Dropdown */}
    <li className="list-inline-item dropdown">
      <Link to="" className="dropdown-toggle">
        Beauty
      </Link>
      <ul className="dropdown-menu">
        <li><Link to="">Skincare</Link></li>
        <li><Link to="">Makeup</Link></li>
        <li><Link to="">Hair Care</Link></li>
      </ul>
    </li>

    {/* Watches Dropdown */}
    <li className="list-inline-item dropdown">
      <Link to="" className="dropdown-toggle">
        Watches
      </Link>
      <ul className="dropdown-menu">
        <li><Link to="">Men's Watches</Link></li>
        <li><Link to="">Women's Watches</Link></li>
        <li><Link to="">Luxury Watches</Link></li>
      </ul>
    </li>

    {/* Kids Dropdown */}
    <li className="list-inline-item dropdown">
      <Link to="" className="dropdown-toggle">
        Kids
      </Link>
      <ul className="dropdown-menu">
        <li><Link to="">Boys</Link></li>
        <li><Link to="">Girls</Link></li>
      </ul>
    </li>

    {/* Gift Dropdown */}
    <li className="list-inline-item dropdown">
      <Link to="" className="dropdown-toggle">
        Gift
      </Link>
      <ul className="dropdown-menu">
        <li><Link to="">Gift Sets</Link></li>
        <li><Link to="">Personalized Gifts</Link></li>
        <li><Link to="">Gift Cards</Link></li>
      </ul>
    </li>

    {/* Blog */}
    <li className="list-inline-item">
      <Link to="">Blog</Link>
    </li>

    <li className="list-inline-item">
      <Link to="">Contact Us</Link>
    </li>
  </ul>
</div>


          </div>
        </div>
      </nav>
     )
}
export default Navigation

