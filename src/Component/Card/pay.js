import React from "react";
import "./pay.css"
import { FcInternal } from "react-icons/fc";
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Bay = ({ Posts }) => {

  function newDoc() {
    window.location.assign("http://localhost:3000/home");
   
    alert("Success Payment you are welcome");
  }
   const totalPrice = 178;
  async function handleToken(token) {
    const product = { name: 'All product', price: totalPrice }
    const response = await axios.post("https://ry7v05l6on.sse.codesandbox.io/checkout", { product, token });

    const { status } = response.data;

    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      newDoc();
    }

  }
  return (
    <div className="pay-sec">

      <div class="paypal">
     
        <div class="paypal__header">
          <div class="paypal__logo-wrapper">
            <img src="https://i.ibb.co/DrvmW5y/paypal.png" alt="Paypal" class="paypal__logo" />
          </div>

          <div class="paypal__header-info">
            <span class="paypal__date">25.04.2016</span>
            <span class="paypal__ref">0f-113</span>
          </div>
        </div>

        <div class="paypal__subheader-wrapper">
          <div class="paypal__subheader">
            <h1 class="paypal__username">VladysLav, Hi</h1>
            <span class="paypal__help-text">you've purchased three ({Posts.length}) items in our store:</span>
          </div>
        </div>

        <div class="paypal__cart">
          <h2 class="paypal__cart-title">Cart:</h2>

          <ul class="paypal__cart-list">

            <li class="paypal__cart-item">
              <span class="paypal__index">1</span>
              <span class="paypal__item-name tt">Discount</span>
              <span class="paypal__item-price">$5.00</span>
            </li>

            <li class="paypal__cart-item">
              <span class="paypal__index">2</span>
              <span class="paypal__item-name tt">All Item </span>
              <span class="paypal__item-price ">{Posts.length}</span>
            </li>

            <li class="paypal__cart-item">
              <span class="paypal__cart-total tt">Total</span>
              <span class="paypal__item-price">$178.00</span>
            </li>
          </ul>
        </div>

        <div class="paypal__footer">
          <StripeCheckout
            style={{ width: "100%" }}
            stripeKey='pk_test_qblFNYngBkEdjEZ16jxxoWSM'
            token={handleToken}
            billingAddress
            shippingAddress
            amount={totalPrice * 100}
            name='All Products'
          >Checkout here <FcInternal style={{ fontSize: "23px", cursor: "pointer" }} />
          </StripeCheckout>

        </div>

      </div>


    </div>
  );
}

export default Bay;