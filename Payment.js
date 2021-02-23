import React, { useState, useEffect } from 'react'
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckOutProduct";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory()

    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState()
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {

const getClientSecret = async () => {

  const response = await axios ({
    method: 'post',
    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
  });
setClientSecret(response.data.clientSecret)
  }
getClientSecret();
    }, [basket])


    const handleSubmit = async (event) => {

event.preventDefault();
setProcessing(true);


const payload = await stripe.confirmCardPayment(clientSecret, {
  payment_method: {
    card: elements.getElement(CardElement)
  }
}).then(({paymentIntent}) => {


      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created
      })


  setSucceeded(true);
  setError(null);
  setProcessing(false)

dispatch({
  type: 'EMPTY_BASKET'
})


  history.replace("./orders")
})


    }

const handleChange = event => {

  setDisabled(event.empty);
  setError(event.error ? event.error.message : "");


}

// ************************UI Zone********************************


    return (

        <div className="container-fluid complete_container">
  <div className="row row_head">
    <div className="col head_col">
      <h1>CheckOut (
                        <Link className="head_coltext" to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
    </div>
    </div>   
  
  {/* *************Address*************** */}
  <div className="row justify-content-start mt-2">
    <div className="col-4 ml-2">
    <h6> <strong> Delivery Address </strong></h6>
    </div>
    <div className="col-4 address_text mt-2">
      <p>{user?.email}</p>
      <p>J J Nagar Lane</p>
      <p>Hyderabad,TN</p>  
    </div>
  </div>
{/* ********************Review products******************** */}
<hr/>
  <div className="row">
    <div className="col-12 ml-2 review_text">
    <h6><strong>Review Items and Delivery</strong></h6>
    </div>
    </div>
    <div className="row">
        <div className="col-12">
                               {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
    </div>

    </div>
    <hr/>

    {/* *****************Payment Section********************** */}
    <div class="row">
    <div class="col-sm ml-2">
    <h6><strong> Payment Method </strong></h6>
    </div>
    <div class="col-sm payment_details">
      <form onSubmit={handleSubmit}>
      <CardElement onChange={handleChange} />

      <div className="container_price">
      <CurrencyFormat
        renderText={(value) => (
          <h3>Order Total: {value}</h3>
        )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <button className="buynow_btn" disabled={processing || disabled || succeeded}>
        <span>{processing ? <p>Processing</p>:
        "Buy Now"
        }</span>

        </button>
      </div>
      </form>
    </div>
    <div class="col-sm">
      
    </div>
  </div>



    </div>    
    )
}

export default Payment;
