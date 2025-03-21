import Slidebar from "../../Components/Slidebar";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import ProductItem from "../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Listing = () => {
  const [gridView, setGridView] = useState("list"); // "list", "grid-3", "grid-4"
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState(9);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value) => {
    setSelectedValue(value);
    handleClose();
  };

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
              <div className="showBy mt-3 mb-3 d-flex align-items-center">
                <div className="btnWrapper d-flex align-items-center">
                  <Button 
                    onClick={() => setGridView("list")}
                    variant={gridView === "list" ? "contained" : "text"}
                  >
                    <IoIosMenu/>
                  </Button>
                  <Button 
                    onClick={() => setGridView("grid-3")}
                    variant={gridView === "grid-3" ? "contained" : "text"}
                  >
                    <HiViewGrid/>
                  </Button>
                  <Button 
                    onClick={() => setGridView("grid-4")}
                    variant={gridView === "grid-4" ? "contained" : "text"}
                  >
                    <TbGridDots/>
                  </Button>
                </div>
                <div className="ms-auto showByFliter">
                  <Button 
                    aria-controls={anchorEl ? 'show-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorEl ? 'true' : undefined}
                    onClick={handleClick}
                    endIcon={<FaAngleDown />}
                  >
                    Show {selectedValue}
                  </Button>
                  <Menu
                    id="show-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'show-button',
                    }}
                  >
                    {[9, 12, 15, 20, 25, 30, 35, 40].map((num) => (
                      <MenuItem key={num} onClick={() => handleMenuItemClick(num)}>
                        Show {num}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>
              
              {/* Products listing section */}
              <div className={`productListing ${gridView}`}>
                {Array.from({ length: 15  }).map((_, index) => (
                  <ProductItem key={index} />
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center"><Pagination count={10} color="primary" />
          </div>
        </div>
      </section>

      {/* CSS for layout styles */}
      <style jsx>{`
        /* Grid layouts */
        .productListing.grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .productListing.grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        
        /* List view styling */
        .productListing.list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        /* Override ProductItem styles for list view */
        .productListing.list .productItem {
          display: flex;
          align-items: center;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 15px;
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .productListing.list .productItem .imageWrapper {
          width: 200px;
          min-width: 200px;
          margin-right: 20px;
        }
        
        .productListing.list .productItem .info {
          flex: 1;
          text-align: left;
        }
        
        .productListing.list .productItem .info h4 {
          font-size: 18px;
          margin-top: 0;
        }
        
        /* Responsive styling */
        @media (max-width: 768px) {
          .productListing.list .productItem {
            flex-direction: column;
          }
          
          .productListing.list .productItem .imageWrapper {
            width: 100%;
            margin-right: 0;
            margin-bottom: 15px;
          }
          
          .productListing.grid-3, 
          .productListing.grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .productListing.grid-3, 
          .productListing.grid-4 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Listing;