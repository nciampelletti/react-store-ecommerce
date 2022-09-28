import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { loadStripe } from "@stripe/stripe-js"
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js"

import axios from "axios"

import { useCartContext } from "../context/cart_context"
import { useUserContext } from "../context/user_context"

import { formatPrice } from "../utils/helpers"

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart, gst_rate, pst_rate } =
    useCartContext()

  const { myUser } = useUserContext()

  // STRIPE STUFF
  const [succeeded, setSucceeded] = useState(true)
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState("")
  const stripe = useStripe()
  const elements = useElements()

  const navigate = useNavigate()

  const cardStyle = {
    style: {
      base: {
        iconColor: "#32404d",
        color: "#fff",
        fontWeight: "500",
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#32404d",
        },
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#FFC7EE",
      },
    },
  }

  const createPaymentIntent = async () => {
    try {
      const gst_total = (total_amount * gst_rate) / 100
      const pst_total = (total_amount * pst_rate) / 100

      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({
          cart,
          shipping_fee,
          gst_total,
          pst_total,
          total_amount,
        })
      )

      setClientSecret(data.clientSecret)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    createPaymentIntent()
    // eslint-disable-next-line
  }, [])

  const handleChange = async (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    })
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      setSucceeded(true)
      setTimeout(() => {
        clearCart()
        // history.push("/")
        navigate("/")
      }, 10000)
    }
  }

  return (
    <div>
      {succeeded ? (
        <article className='result-format'>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>
            Your total is{" "}
            <span className='total-amount'>
              {formatPrice(
                shipping_fee +
                  total_amount +
                  (total_amount * gst_rate) / 100 +
                  (total_amount * pst_rate) / 100
              )}
            </span>
          </p>
          <p>Test Card Number : 4242 4242 4242 4242</p>
        </article>
      )}
      <form id='payment-form' onSubmit={handleSubmit}>
        <CardElement
          id='card-element'
          options={cardStyle}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} id='submit'>
          <span id='button-text'>
            {processing ? <div className='spinner' id='spinnier'></div> : "Pay"}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className='card-error' role='alert'>
            {error}
          </div>
        )}
        {/* Show  a success message upon completion */}
        <div
          className={
            succeeded
              ? "result-message result-format"
              : "result-message hidden result-format"
          }
        >
          Payment succeeded, see the result in your{" "}
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dasboard.{" "}
          </a>
          <br></br>
          Refresh the page to pay again
        </div>
      </form>
    </div>
  )
}

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  form {
    width: 30vw;
    align-self: center;
    background-color: var(--clr-primary-10) !important;
    border-radius: 7px;
    padding: 40px;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .total-amount {
    font-weight: 600;
  }
  .result-message {
    line-height: 22px;
    font-size: 16px;
  }
  .result-message a {
    color: rgb(89, 111, 214);
    font-weight: 600;
    text-decoration: none;
  }
  .hidden {
    display: none;
  }
  #card-error {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    margin-top: 12px;
    text-align: center;
  }
  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  #payment-request-button {
    margin-bottom: 32px;
  }
  /* Buttons and links */
  button {
    /* font-family: Roboto, "Open Sans", "Segoe UI", "sans-serif"; */
    text-transform: uppercase;
    background: var(--clr-grey-5);
    color: white;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .result-format {
    padding: 1rem 1rem;
    text-align: center;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 1199.98px) {
    form {
      width: 50vw;
    }
  }

  @media only screen and (max-width: 600.98px) {
    form {
      width: 80vw;
    }
  }
`

export default StripeCheckout
