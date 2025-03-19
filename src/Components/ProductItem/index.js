import { Button, Rating } from "@mui/material";
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductModel from "../ProductModel";
import { useState } from "react";

const ProductItem = () => {
  const [isOpenProductModel, setIsOpenProductModel] = useState(false);

  const viewProductDetails = () => {
    setIsOpenProductModel(true);
  };

  return (
    <div className="item productItem">
      <div className="imageWrapper">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
          className="w-100"
          alt="Delite and Pure Candies"
        />
        <span className="product-badge">20%</span>
      </div>
      <div className="info">
        <h4>Delite and Pure Candies || Werther's Originl</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          className="mt-2 mb-2"
          name="read-only"
          value={5}
          readOnly
          size="small"
          precision={0.5}
        />
        <div className="d-flex gap-2">
          <span className="oldPrice">$18.00</span>
          <span className="netPrice text-danger">$12.00</span>
          <div className="actions">
            <Button onClick={viewProductDetails}>
              <TfiFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty />
            </Button>
          </div>
        </div>
      </div>

      {/* Corrected modal usage */}
      <ProductModel
        open={isOpenProductModel}
        onClose={() => setIsOpenProductModel(false)}
      />
    </div>
  );
};

export default ProductItem;
