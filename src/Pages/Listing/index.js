import Slidebar from "../../Components/Slidebar";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import {TbGridDots} from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";


const Listing = () => {
  return (
    <>
     <section className="product_Listing_Page">
      <div className="container">
         <div className="productListing d-flex">
           <Slidebar />
           <div className="content_right">
           <Link to="#">
  <img 
    src="https://img.freepik.com/premium-vector/premium-gazelnut-chocolate-bar-with-sauce-pouring-down-from-top-golden-glitter-background-3d-illustration_317810-2552.jpg?w=2000" 
    className="w-100"  
    alt="Product"
  />
</Link>
        <div className="showBy mt-3 mb-3 d-fkex align-items-center ">
          <div className="btWrapper d-flex align-items-center">
            <Button><IoIosMenu/></Button>
            <Button><HiViewGrid/></Button>
            <Button><TbGridDots/></Button>
            <Button><TfiLayoutGrid3Alt/></Button>

          </div>
        </div>
           </div>
         </div>
      </div>
     </section>
    </>
  );
}
export default Listing;