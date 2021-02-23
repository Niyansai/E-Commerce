import React from 'react'
import "./Order.css"
import moment from "moment";
import CheckOutProduct from './CheckOutProduct';
import CurrencyFormat from "react-currency-format";

function Order( { order }) {
    return (
        <div className= "container complete_order">
        <div className="row order">
          <div className="col-6">
            <h3 className="order_textdate">
            Order
            </h3>
            <p className="order_id">
               <h5> {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} </h5>
            </p>
            </div>
            <div className="col-6 mt-5 order_idmain">
            <p><strong>OrderId:</strong> {order.id}</p>
            </div>
            
            <div className="col order_products">
            {order.data.basket?.map(item => (
                <CheckOutProduct 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    hideButton
                                />

            ))}
            </div>
            </div>
            <div className="row order_three">
            <div className="col-10">
            <CurrencyFormat 

            renderText={(value) => (
                <h3 className="order_total">Order Total: {value} </h3>
            )}
decimalScale={2}
value={order.data.amount/100}
displayType={"text"}
thousandSeparator={true}
prefix={"$"}
            /> 
            <hr/>
            </div>
     
        </div>
        </div>
    )
}

export default Order;
