import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { 
  MdAdd, 
  MdRemove,
  MdArrowBack, 
  MdArrowForward, 
  MdFavoriteBorder, 
  MdCompareArrows 
} from "react-icons/md";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import RelatedProducts from './RelatedProducts';

const ProductDetails = () => {
  // State variables
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewName, setReviewName] = useState('');
  const [reviewEmail, setReviewEmail] = useState('');
  const [reviewComment, setReviewComment] = useState('');
  
  // Product data
  const product = {
    name: "All Natural Italian Chicken Meatballs",
    brand: "Welch's",
    description: "Product description goes here. This is a detailed description of the product highlighting its features and benefits.",
    additionalInfo: "Additional product information including ingredients, storage instructions, and manufacturing details.",
    price: "$29.99",
    rating: 4.8,
    ratingDistribution: [
      { stars: 5, percentage: 75 },
      { stars: 4, percentage: 50 },
      { stars: 3, percentage: 55 },
      { stars: 2, percentage: 35 },
      { stars: 1, percentage: 25 }
    ],
    specs: [
      { label: "Weight", value: "500g" },
      { label: "Dimensions", value: "10 x 5 x 3 cm" },
      { label: "Material", value: "Premium Quality" },
      { label: "Color", value: "Various Options" }
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOHQO8lRGJplChV3u8BcTKba1pxFiVeBfIg&s",
      "https://mma.prnewswire.com/media/2477644/Lay_s_Global_Flavors_Trio__1.jpg?p=facebook",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5H_jzz7Z3zuvqeewwqwD8GiqKFW5A-Jnhg&s"
    ],
    reviews: [
      { 
        name: "John Doe", 
        date: "March 15, 2025", 
        rating: 5, 
        comment: "Excellent product! Would definitely recommend it to others." 
      },
      { 
        name: "Jane Smith", 
        date: "March 10, 2025", 
        rating: 4, 
        comment: "Great quality but shipping took longer than expected." 
      }
    ]
  };

  // Event handlers
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };
  
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Handle review submission logic here
    console.log({
      name: reviewName,
      email: reviewEmail,
      rating: reviewRating,
      comment: reviewComment
    });
    
    // Reset form
    setReviewName('');
    setReviewEmail('');
    setReviewRating(0);
    setReviewComment('');
    
    // Show success message or update UI as needed
    alert("Thank you for your review!");
  };

  return (
    <section className="productDetails section">
      <div className="container">
        <div className="modal-content p-4">
          <h2>Product Details</h2>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <span>Brand:</span>
              <span className="m-2">{product.brand}</span>
            </div>
            <Rating name="read-only" value={product.rating} size="small" precision={0.5} readOnly />
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
                            src={product.images[currentImageIndex]} 
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
                  {product.images.map((_, index) => (
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
                {product.images.map((image, index) => (
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
              <h3>{product.name}</h3>
              <p className="text-muted">{product.description}</p>
              
              <div className="product-specs mt-4">
                <h4>Specifications</h4>
                <ul className="list-unstyled">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="mb-2">{spec.label}: {spec.value}</li>
                  ))}
                </ul>
              </div>
              
              <hr className="my-4" />
              
              <div className="price-section">
                <h4>Price: {product.price}</h4>
                
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
          
          {/* Product Tabs Section */}
          <div className="product-tabs mt-5">
            <div className="tab-buttons d-flex mb-3">
              <Button 
                variant={activeTab === 'description' ? "contained" : "outlined"}
                onClick={() => handleTabChange('description')}
                className="me-2"
              >
                Description
              </Button>
              <Button 
                variant={activeTab === 'additional' ? "contained" : "outlined"}
                onClick={() => handleTabChange('additional')}
                className="me-2"
              >
                Additional Info
              </Button>
              <Button 
                variant={activeTab === 'reviews' ? "contained" : "outlined"}
                onClick={() => handleTabChange('reviews')}
              >
                Reviews
              </Button>
            </div>
            
            <div className="tab-content p-4 border rounded">
              {activeTab === 'description' && (
                <div className="description-tab">
                  <h4>Product Description</h4>
                  <p>{product.description}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.</p>
                  <p>Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              )}
              
              {activeTab === 'additional' && (
                <div className="additional-tab">
                  <h4>Additional Information</h4>
                  <table className="table table-bordered">
                    <tbody>
                      {product.specs.map((spec, index) => (
                        <tr key={index}>
                          <th style={{ width: '30%' }}>{spec.label}</th>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                      <tr>
                        <th>Ingredients</th>
                        <td>High-quality natural ingredients, no preservatives</td>
                      </tr>
                      <tr>
                        <th>Storage</th>
                        <td>Store in a cool, dry place</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>{product.additionalInfo}</p>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div className="reviews-tab">
                  <h4 className="mb-4">Customer Reviews</h4>
                  
                  <div className="row">
                    {/* Left side: Customer reviews - Changed from col-md-6 to col-md-8 */}
                    <div className="col-md-8">
                      <div className="existing-reviews">
                        <h5>Recent Reviews</h5>
                        {product.reviews.map((review, index) => (
                          <div key={index} className="review-item mb-3 p-3 border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <h5>{review.name}</h5>
                              <small className="text-muted">{review.date}</small>
                            </div>
                            <Rating value={review.rating} readOnly size="small" />
                            <p className="mt-2">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Review Form */}
                      <div className="review-form mt-4">
                        <h5>Write a Review</h5>
                        <form onSubmit={handleReviewSubmit}>
                          <Box sx={{ mb: 3 }}>
                            <Typography component="legend">Your Rating</Typography>
                            <Rating
                              name="review-rating"
                              value={reviewRating}
                              onChange={(event, newValue) => {
                                setReviewRating(newValue);
                              }}
                              size="large"
                            />
                          </Box>
                          
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <TextField
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                value={reviewName}
                                onChange={(e) => setReviewName(e.target.value)}
                                required
                                margin="normal"
                              />
                            </div>
                            <div className="col-md-6">
                              <TextField
                                fullWidth
                                label="Your Email"
                                variant="outlined"
                                type="email"
                                value={reviewEmail}
                                onChange={(e) => setReviewEmail(e.target.value)}
                                required
                                margin="normal"
                              />
                            </div>
                          </div>
                          
                          <TextField
                            fullWidth
                            label="Your Review"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={reviewComment}
                            onChange={(e) => setReviewComment(e.target.value)}
                            required
                            margin="normal"
                          />
                          
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="mt-3"
                          >
                            Submit 
                          </Button>
                        </form>
                      </div>
                    </div>
                    
                    {/* Right side: Rating distribution - Changed from col-md-6 to col-md-4 */}
                    <div className="col-md-4">
                      <div className="rating-summary">
                        <h5>Customer Reviews</h5>
                        <div className="d-flex align-items-center mb-3">
                          <div className="me-3">
                            <Rating value={product.rating} readOnly precision={0.5} size="large" />
                          </div>
                          <Typography variant="h5" component="div">
                            {product.rating} out of 5
                          </Typography>
                        </div>
                        
                        {/* Rating Distribution */}
                        <div className="rating-distribution mt-4">
                          {product.ratingDistribution.map((item) => (
                            <div key={item.stars} className="d-flex align-items-center mb-2">
                              <div style={{ width: '60px' }} className="me-2">
                                <Typography variant="body2" component="div">
                                  {item.stars} star
                                </Typography>
                              </div>
                              <div style={{ flexGrow: 1 }} className="me-2">
                                <LinearProgress 
                                  variant="determinate" 
                                  value={item.percentage} 
                                  sx={{ 
                                    height: 20, 
                                    borderRadius: 1,
                                    backgroundColor: '#e0e0e0',
                                    '& .MuiLinearProgress-bar': {
                                      backgroundColor: '#4caf50'
                                    }
                                  }}
                                />
                              </div>
                              <div style={{ width: '50px' }}>
                                <Typography variant="body2" component="div">
                                  {item.percentage}%
                                </Typography>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
<br></br>

              <RelatedProducts title="Related Products" />
              <RelatedProducts title="Recently Viewed Products" />

      </div>
    </section>
  );
};

export default ProductDetails;