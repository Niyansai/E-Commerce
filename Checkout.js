import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import Subtotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import userEvent from "@testing-library/user-event";
import BannerImage from "./Images/CheckoutBanner.png";


function Checkout() {
  //   const [{ basket, user }, dispatch] = useStateValue();
  const [{ basket, user }, dispatch] = useStateValue();
  
  
  return (
    <div class="container-fluid complete_checkout">
          <div class="row">
                <div class="col-8">
                  <a target="_blank" href="https://www.youtube.com/channel/UC7HUAlkMwfif648ySsi08Cw"><img
                    className="checkout__ad mt-2"
                    src={BannerImage}
                    height="100" alt=""
                  /> </a>
                  <h3 id="hello_text">Hello
                  <br />

                    {user?.email}</h3>
                  <h2 className="checkout__title">Your Shopping Basket</h2>
                  <hr />
                </div>

                <div class="col-4 mt-3" id="calc_price">

                  <Subtotal />

                </div>
          </div>
          <div class="row">
                <div class="col-9" id="checoutProduct_body">
                  {basket.map(item => (
                    <CheckOutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))}
                </div>

          </div>
    </div>
  );
}

export default Checkout;