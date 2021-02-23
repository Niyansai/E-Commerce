import React, { useEffect } from 'react';
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";
import Aos from "aos";
import "aos/dist/aos.css";


function CheckOutProduct( { id, title, price, image, rating, hideButton}) {
   
const [{ basket }, dispatch] = useStateValue();

        useEffect(() => {
            Aos.init({duration: 1000});
            }, [])

const removeFromBasket = () => {

            dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
        }


    return (
        
    <div data-aos="fade up" className="checkoutProduct">

                <img src={image} alt="" className="checkoutProduct_image mt-4"/>

         <div className="checkoutProduct_info">

            <p className="checkoutProduct_title">{title}</p>

            <p className="checkoutProduct_price"> 
                <small>₹</small>
                <strong>{price}</strong>
                <strong className="rating_star">
                {Array(rating)
                .fill()
                .map((_, i) => (
                <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg></p>
                ))}
                </strong>
             </p>


                {!hideButton &&   (
                    <button  onClick = { removeFromBasket }>
                Remove From Basket
                </button>
                )}
         </div>
            
     </div>


    )
}

export default CheckOutProduct;
