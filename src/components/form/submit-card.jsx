import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import arrowRight from "../../assets/user-info/arrow-right.png";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import { useNavigate } from "react-router-dom";
import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51L3igsAX34JgbNaA4c0rd2PAl8EayvBReK9w2M1yp3Ep8Mlz29MkPvMzHgVfS17dGsQ3nVQs9da8kwBtDxm8lx4S00VxEkycWL"
);

const CheckoutForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const res = await fetch(
      "https://stripe-back-end-chi.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 20, name, email }),
      }
    );
    const data = await res.json();

    if (data.error) {
      toast.error(data.error);
      setLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: { name, email },
      },
    });

    if (result.error) {
      toast.error(result.error.message);
      navigate("/failure");
    } else if (result.paymentIntent.status === "succeeded") {
      toast.success("Payment Successful!");
      navigate("/success");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-details-wrap">
      <div className="payment-left-overlay">
        <div className="one-time-payment">
          <h6>£ 20</h6>
          <p>One time payment</p>
        </div>
        <div className="total-wrap">
          <div className="sub-total-wrap">
            <p>Subtotal</p>
            <p>16.00</p>
          </div>
          <div className="sub-total-wrap">
            <p>VAT</p>
            <p> 4.00</p>
          </div>
          <div className="amount-bar"></div>
          <div className="sub-total-wrap">
            <p>Total</p>
            <p>£ 20.00</p>
          </div>
        </div>
      </div>
      <div className="payment-right-overlay">
        <h1>Payment details</h1>
        <div className="payment-input-overlay">
          <p>Cardholder name</p>
          <input
            placeholder="Name on card"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="payment-input-overlay">
          <p>Email</p>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="payment-card-overlay">
          <p>Expiry</p>
          <div className="card-element">
            <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
          </div>
        </div>
        <div
          className="payment-input-overlay-terms"
          style={{ marginTop: "30px" }}
        >
          <p className="visibility-none">No Visibility</p>
          <div className="payment-terms">
            <input type="checkbox" />
            <p>
              I agree to the <span>Agreement & Terms</span> , Find out how we
              use and protect your data in our <span> Privacy Policy.</span>
            </p>
          </div>
        </div>
        <div className="payment-input-overlay-terms">
          <p className="visibility-none">No Visibility</p>
          <div className="payment-terms">
            <input type="checkbox" />
            <p>I’d like to receive direct marketing email updates.</p>
          </div>{" "}
        </div>
        <div
          className="card-button-wrap mt-40"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <button
            type="submit"
            className="back form-back-button"
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
        </div>
      </div>
    </form>
  );
};

const SubmitCard = ({ routes, setCount }) => (
  <div className="card-positioning-wrap">
    <div className="router">
      {routes?.map((route, index) => (
        <React.Fragment key={index}>
          <p
            className={
              route?.disabled ? "inactive not-allowed" : "active pointer"
            }
          >
            {route?.name}
          </p>
          {index !== routes.length - 1 && <img src={arrowRight} />}
        </React.Fragment>
      ))}
    </div>
    <div className="main-card-wrap">
      <div>
        <h1 className="form-title">Pay & Submit</h1>
        <p className="form-sub-title">
          Once you have paid for TaxReady.co.uk services you will be able to
          download and submit your return to the HMRC.
        </p>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
      <div className="card-button-wrap mt-40">
        <button className="back form-back-button" onClick={() => setCount(10)}>
          Back
        </button>
        <button
          className="next-btn active-color form-next-button"
          onClick={() => setCount(12)}
        >
          <p>Next</p>
          <img src={buttonArrow} />
        </button>
      </div>
    </div>
  </div>
);

export default SubmitCard;
