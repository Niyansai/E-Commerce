import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";


function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (

<div className="card mt-1 pt-4" id="subtotal">
  <div className="card-body">
    <h5 className="card-title text_title">
      
      <CurrencyFormat
        renderText={(value) => (
          <>
          <div className="total_price">
            <p>
      
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            </div>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={e => history.push('/payment')} className="mt-4 subtotals">Proceed to Checkout</button></h5>
    
  </div>
</div>
      );
}

export default Subtotal;
