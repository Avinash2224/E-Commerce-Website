import { Button, Rating } from "@mui/material";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";


const ProductItem = () => {
 return(
    <div className="item productItem">
    <div className="imageWrapper">
      <img
        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
        className="w-100"
      />
      <span className="product-badge">20%</span>
    </div>
    <div className="info">
    <h4>Delite and Pure candies || werther's roiginal</h4>
    <span className="text-success d-block">In Stock</span>
    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
    <div className="d-flex gap-2">
      <span className="oldPrice">$18.00</span>
      <span className="netPricw text-danger">$12.00</span>
      <div className="actions">
        <Button><TfiFullscreen /></Button>
        <Button><IoMdHeartEmpty /></Button> 
      </div>
    </div>
    </div>
  </div>
 )
  
}
export default ProductItem;