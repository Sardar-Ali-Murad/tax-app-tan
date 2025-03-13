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
import buttonArrow from "../../assets/user-info/button-arrow.png";
import Progress from "../common/progress";
import discount from "../../assets/discount.svg";
import { useNavigate } from "react-router-dom";

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
      navigate("/failure");
    } else if (result.paymentIntent.status === "succeeded") {
      navigate("/success");
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="payment-details-wrap">
        <div className="payment-left-overlay">
          <h1 className="text-[#003049] jaldi text-[30px] font-bold">
            Review your cart
          </h1>
          <div className="flex flex-col gap-[4px] mt-[9px]">
            <h1 className="jaldi text-[20px] text-[#003049] font-medium">
              Tax filing one-time payment
            </h1>
            <p
              className="jaldi text-[20px]"
              style={{ color: "rgba(0, 48, 73, 0.61)" }}
            >
              Period : April 1, 2024 to June 31, 2025
            </p>
            <p className="jaldi text-[20px]  text-[#003049]">£12.00</p>
          </div>
          <div className="mt-[40px] relative">
            <img src={discount} className="absolute top-[10px] left-[10px]" />
            <input
              placeholder="Discount code"
              className="text-[rgba(6,38,62,0.34)] rounded-[4px] w-[100%] h-[45px] py-[12px] pr-[12px] pl-[40px] archivo text-[16px] border border-[1px] border-[#C4C4C4]"
            />
            <p className="font-bold archivo text-[18px] text-[#0D83C1] absolute top-[10px] right-[10px]">
              Apply
            </p>
          </div>
          <div className="mt-[48px] flex flex-col gap-[20px]">
            <div className="flex items-center justify-between">
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                Subtotal
              </p>
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                {" "}
                £ 16.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                VAT
              </p>
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                {" "}
                £ 4.00
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                Discount
              </p>
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                {" "}
                0
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                Total
              </p>
              <p
                className="jaldi text-[22px]"
                style={{ color: "rgba(6, 38, 62, 0.42)" }}
              >
                {" "}
                £ 20.00{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="payment-right-overlay">
          <h1 className="text-[#003049] jaldi text-[30px] font-bold">Pay</h1>{" "}
          <div>
            <p
              className="jaldi text-[20px]"
              style={{ color: "rgba(0, 48, 73, 0.61)" }}
            >
              Email
            </p>
            <input className="text-[rgba(6,38,62,0.34)] rounded-[4px] w-[100%] h-[45px] py-[12px] pr-[12px] pl-[12px] archivo text-[16px] border border-[1px] border-[#C4C4C4]" />
          </div>
          <div className="mt-[20px]">
            <p
              className="jaldi text-[20px]"
              style={{ color: "rgba(0, 48, 73, 0.61)" }}
            >
              Card Information
            </p>
            <div className="payment-card-overlay">
              <div className="card-element h-[50px]">
                <CardElement
                  options={{ style: { base: { fontSize: "16px" } } }}
                />
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <p
              className="jaldi text-[20px]"
              style={{ color: "rgba(0, 48, 73, 0.61)" }}
            >
              Cardholder name
            </p>
            <input
              placeholder="Full name on card"
              className="text-[rgba(6,38,62,0.34)] rounded-[4px] w-[100%] h-[45px] py-[12px] pr-[12px] pl-[12px] archivo text-[16px] border border-[1px] border-[#C4C4C4]"
            />
          </div>
          <div className="flex items-center gap-[30px] mt-[35px]">
            <p
              className="archivo text-[12px] leading-[16px]"
              style={{ color: "rgba(26, 26, 26, 0.5)" }}
            >
              Powered by Stripe{" "}
            </p>
            <div className="flex items-center gap-[12px]">
              <p
                className="archivo text-[12px] leading-[16px]"
                style={{ color: "rgba(26, 26, 26, 0.5)" }}
              >
                Terms
              </p>
              <p
                className="archivo text-[12px] leading-[16px]"
                style={{ color: "rgba(26, 26, 26, 0.5)" }}
              >
                Privacy
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const SubmitCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card-positioning-wrap">
      <Progress title="73% complete" width="73%" />

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

        <div className="mt-[40px] flex items-center gap-[12px] justify-center">
          <input
            type="checkbox"
            className="h-[12px] w-[12px] border border-[2px] border-[#FFFFFF]"
          />
          <p
            className="text-center archivo text-[16px] text-[#003049]"
            style={{ color: "rgba(6, 38, 62, 0.42)" }}
          >
            I agree to the <span className="underline">Terms & Conditions</span>{" "}
            Find out how we use and protect your data in our{" "}
            <span className="underline">Privacy Policy</span>.
          </p>
        </div>
        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => navigate("/review")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => navigate("/submit")}
          >
            <p>Pay Now</p>
            <img src={buttonArrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitCard;
