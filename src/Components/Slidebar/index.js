import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ReactSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Slidebar = () => {
    const [value, setValue] = useState([100,60000]); 
    const [value2, setValue2] = useState(0);
  return (
    <div className="slidebar">
        <div className="filterBox">
            <h6>PRODUCT CATEGORIES</h6>
                <div className='scroll'>
                    <ul>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Watches" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Lifestyle" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Gifts" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Beauty" />
                        </li>
                        
                    </ul>
                </div>
        </div>
        <div className='filterBox'>
            <h6>FILTER BY PRICE</h6>
            <ReactSlider 
  value={value} 
  onInput={setValue} 
  min={100} 
  max={60000} 
  step={5} 
/>

<div className="d-flex pt-2 pb-2 priceRange">
  <span>From: <strong className="text-success">Rs: {value[0]}</strong></span>
  <span className="ms-4">    <strong className="text-success">Rs: {value[1]}</strong></span>
</div>

        </div>
        <div className='fliterbox'>
            <h6>PRODUCT CATEGORIES</h6>
            <div className='scroll'>
                    <ul>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="On Sale" />
                        </li>
                    </ul>
             </div>
        </div>
        <div className='fliterbox'>
            <h6>BRANDS</h6>
            <div className='scroll'>
                    <ul>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Nike" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Campus" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Puma" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Adidas" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label="Skechers" />
                        </li>
                        <li>
                        <FormControlLabel className='w-100' control={<Checkbox />} label=" Louis Vuitton " />
                        </li>
                    </ul>
             </div>
        </div>
        <Link to="#">
  <img 
    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSv4jS_zGFawe9Py6hA46caI_sqCrCMNmDbPQeozYdf9S5MOQ1fXpK1wPbU9DYsHMkonjTeeeig0A9z9Xx4lrIflBrK6DqKOyQOk25_zsAi" 
    className="w-100 mt-4 ml-0" 
    alt="Product"
  />
</Link>

    </div>
  );
}
export default Slidebar;