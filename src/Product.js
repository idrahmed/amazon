import React from "react";
import "./product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating}) {
  const [{}, dispatch] = useStateValue()

  // action
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }


  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
           {Array(rating).fill(<StarRateIcon />)}
          
        </div>
      </div>

      
      <img
        src={image}
        alt=""
      />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
