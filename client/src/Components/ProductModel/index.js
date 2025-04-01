import Dialog from "@mui/material/Dialog";
import { MdClose, MdAdd, MdRemove } from "react-icons/md";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MdArrowBack, MdArrowForward, MdFavoriteBorder, MdCompareArrows } from "react-icons/md";

const ProductModel = ({ open, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Dummy images - replace with actual images in your project
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOHQO8lRGJplChV3u8BcTKba1pxFiVeBfIg&s",
    "https://mma.prnewswire.com/media/2477644/Lay_s_Global_Flavors_Trio__1.jpg?p=facebook",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5H_jzz7Z3zuvqeewwqwD8GiqKFW5A-Jnhg&s"
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <div className="modal-content p-4">
        <Button className="close_ position-absolute top-0 end-0 m-2" onClick={onClose}>
          <MdClose />
        </Button>
        <h2>Product Details</h2>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span>Brand:</span>
            <span className="m-2">Welch's</span>
          </div>
          <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
        </div>
        <hr />
        <div className="row mt-2 ProductDetailModal">
          <div className="col-md-5">
            <div className="image-slider-container position-relative">
              <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={3}
                wheel={{ step: 0.1 }}
              >
                {({ zoomIn, zoomOut }) => (
                  <>
                    <div className="zoom-controls mb-2 d-flex justify-content-center">
                      <Button onClick={() => zoomIn()} variant="outlined" size="small">
                        Zoom In
                      </Button>
                      <Button onClick={() => zoomOut()} variant="outlined" size="small" className="ms-2">
                        Zoom Out
                      </Button>
                    </div>
                    <TransformComponent>
                      <div className="image-container" style={{ height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img 
                          src={images[currentImageIndex]} 
                          alt={`Product view ${currentImageIndex + 1}`} 
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain"
                          }}
                        />
                      </div>
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
              
              <div className="navigation-controls d-flex justify-content-between mt-3">
                <Button 
                  onClick={handlePrev} 
                  variant="contained" 
                  color="primary" 
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{ minWidth: "40px", width: "40px", height: "40px" }}
                >
                  <MdArrowBack />
                </Button>
                <Button 
                  onClick={handleNext} 
                  variant="contained" 
                  color="primary" 
                  className="rounded-circle d-flex justify-content-center align-items-center"
                  style={{ minWidth: "40px", width: "40px", height: "40px" }}
                >
                  <MdArrowForward />
                </Button>
              </div>
              
              <div className="image-indicators d-flex justify-content-center mt-3">
                {images.map((_, index) => (
                  <div 
                    key={index} 
                    className={`indicator mx-1 ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: index === currentImageIndex ? '#1976d2' : '#bdbdbd',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="thumbnail-previews d-flex justify-content-center mt-3">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail-preview mx-1 ${index === currentImageIndex ? 'border border-primary' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                  }}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`} 
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      cursor: 'pointer',
                      opacity: index === currentImageIndex ? 1 : 0.6
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-md-7">
            <h3>Product Name</h3>
            <p className="text-muted">Product description goes here. This is a detailed description of the product highlighting its features and benefits.</p>
            
            <div className="product-specs mt-4">
              <h4>Specifications</h4>
              <ul className="list-unstyled">
                <li className="mb-2">Weight: 500g</li>
                <li className="mb-2">Dimensions: 10 x 5 x 3 cm</li>
                <li className="mb-2">Material: Premium Quality</li>
                <li className="mb-2">Color: Various Options</li>
              </ul>
            </div>
            
            <hr className="my-4" />
            
            <div className="price-section">
              <h4>Price: $29.99</h4>
              
              <div className="d-flex align-items-center mt-3">
                <div className="quantity-control d-flex align-items-center border rounded me-3">
                  <Button 
                    onClick={decreaseQuantity} 
                    variant="text" 
                    size="small"
                    style={{ minWidth: "40px" }}
                  >
                    <MdRemove />
                  </Button>
                  <span className="mx-3">{quantity}</span>
                  <Button 
                    onClick={increaseQuantity} 
                    variant="text" 
                    size="small"
                    style={{ minWidth: "40px" }}
                  >
                    <MdAdd />
                  </Button>
                </div>
                <Button variant="contained" color="primary">
                  Add to Cart
                </Button>
              </div>
              
              <div className="additional-actions d-flex mt-3">
                <Button 
                  variant="outlined" 
                  startIcon={<MdFavoriteBorder />}
                  className="me-2"
                  size="small"
                >
                  Add to Wishlist
                </Button>
                <Button 
                  variant="outlined" 
                  startIcon={<MdCompareArrows />}
                  size="small"
                >
                  Compare
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductModel;