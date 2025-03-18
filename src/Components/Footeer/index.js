import { AiOutlineProduct } from "react-icons/ai";
import { MdDeliveryDining } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";



const Footer = () => {
  return(
    <footer>
        <div className="container">
              <div className="topInfo row">
                <div className="col d-flex align-items-center">
                    <span><AiOutlineProduct/></span>
                    <span className="ms-2">Everyday fresh Products</span>
                </div>

                <div className="col d-flex align-items-center">
                    <span><MdDeliveryDining /></span>
                    <span className="ms-2">Free Delivery over $100 </span>
                </div>

                <div className="col d-flex align-items-center">
                    <span><CiDiscount1/></span>
                    <span className="ms-2">Daily Mega Discount</span>
                </div>

                <div className="col d-flex align-items-center">
                    <span><IoMdPricetags/></span>
                    <span className="ms-2">Best Price and Product</span>
                </div>
              </div>
              <div className="row mt-5 linksWrap">
                  <div className="col">
                     <h5>Fruits and Vegetables</h5>
                      <ul>
                        <li> <Link to="#">Fresh Vegetables</Link></li>
                        <li> <Link to="#">Herbs & Seasonings</Link></li>
                        <li> <Link to="#">Fresh Fruits</Link></li>
                        <li> <Link to="#">Nuts & Sprouts</Link></li>
                        <li> <Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li> <Link to="#">Packaged Produce</Link></li>
                        <li> <Link to="#">Party Trays</Link></li>
                      </ul>
                     </div>
                     <div className="col">
                     <h5>Breakfast and Dairy</h5>
                      <ul>
                        <li> <Link to="#">Fresh Vegetables</Link></li>
                        <li> <Link to="#">Herbs & Seasonings</Link></li>
                        <li> <Link to="#">Fresh Fruits</Link></li>
                        <li> <Link to="#">Nuts & Sprouts</Link></li>
                        <li> <Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li> <Link to="#">Packaged Produce</Link></li>
                        <li> <Link to="#">Party Trays</Link></li>
                      </ul>
                     </div>
                     <div className="col">
                     <h5>Meat and Seafood</h5>
                      <ul>
                        <li> <Link to="#">Fresh Vegetables</Link></li>
                        <li> <Link to="#">Herbs & Seasonings</Link></li>
                        <li> <Link to="#">Fresh Fruits</Link></li>
                        <li> <Link to="#">Nuts & Sprouts</Link></li>
                        <li> <Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li> <Link to="#">Packaged Produce</Link></li>
                        <li> <Link to="#">Party Trays</Link></li>
                      </ul>
                     </div>
                     <div className="col">
                     <h5>Beverages</h5>
                      <ul>
                        <li> <Link to="#">Fresh Vegetables</Link></li>
                        <li> <Link to="#">Herbs & Seasonings</Link></li>
                        <li> <Link to="#">Fresh Fruits</Link></li>
                        <li> <Link to="#">Nuts & Sprouts</Link></li>
                        <li> <Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li> <Link to="#">Packaged Produce</Link></li>
                        <li> <Link to="#">Party Trays</Link></li>
                      </ul>
                     </div>
                     <div className="col">
                     <h5>Breads and Bakery</h5>
                      <ul>
                        <li> <Link to="#">Fresh Vegetables</Link></li>
                        <li> <Link to="#">Herbs & Seasonings</Link></li>
                        <li> <Link to="#">Fresh Fruits</Link></li>
                        <li> <Link to="#">Nuts & Sprouts</Link></li>
                        <li> <Link to="#">Exotic Fruits & Veggies</Link></li>
                        <li> <Link to="#">Packaged Produce</Link></li>
                        <li> <Link to="#">Party Trays</Link></li>
                      </ul>
                     </div>
                </div>

                <div className="copyright mt-5 pb-3 pt-3 d-flex justify-content-center align-items-center">
    <p className="mb-0 text-muted">© Copyright Agency and contributors 2025 All Rights Reserved</p>
    <div className="social-icons ms-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon ms-3" />
        </a>
    </div>
</div>
        </div>
    </footer>
  )
}
export default Footer