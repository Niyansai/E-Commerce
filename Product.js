import React, { useEffect } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Aos from "aos";
import "aos/dist/aos.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  

  useEffect(() => {
    Aos.init({duration: 1000});
     }, [])

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
  
    <div data-aos="fade up" className="card mb-2 pb-2" id="complete_card">
    <img src={image} className="card-img-top product_img img-responsive mt-4" alt="..."/>
    <div class="card-body" id="card_theory">
    <p class="card-text">{title}</p>
    <p class="card-text"><small>₹</small>
          <strong>{price}</strong>
          <strong className="rating_star">{Array(rating)
            .fill()
            .map((_, i) => (
              <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg></p>
            ))}</strong>
          
          </p>
           
  </div>
  <button className="add_button" onClick={addToBasket}>Add to Basket</button>
  </div>     
  );
}

export default Product;
