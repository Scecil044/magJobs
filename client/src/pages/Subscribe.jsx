import { useState } from "react";
import WelcomePopUp from "../components/subscription/WelcomePopUp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OtherPayments from "../components/subscription/OtherPayments";
import PayPalCheckout from "../components/subscription/PayPalCheckout";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function Subscribe() {
  const { user } = useSelector(state => state.auth);
  const [showModal, setShowModal] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="p-5 h-screen bg-white">
      <div className="flex">
        <Link to="/jobs" className="flex items-center gap-1 py-2 px-4 hover:bg-[#0072b1] hover:text-white">
          <RiArrowGoBackFill />
          Back
        </Link>
      </div>
      <div className="flex gap-8 items-start mt-20">
        <div className="flex-1 bg-white p-5 border border-gray-400 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold">Checkout</p>
            <button className="py-1 px-6 bg-green-200 rounded-3xl text-sm">34, 567 already enrolled</button>
          </div>
          {/* tabs */}
          <div className="flex border-b border-gray-300">
            <button
              onClick={() => setActiveTab(1)}
              className={`py-3 px-6 ${activeTab === 1 ? "border-b-2 border-blue-600" : ""}`}
            >
              <span className="flex items-center gap-2">
                <img src="/Visa.png" alt="avatar" className="object-cover h-3" />
                <img src="/Mastercard.png" alt="avatar" className="object-cover h-5" />
                <img src="/Bitsafe.png" alt="avatar" className="object-cover h-5" />
              </span>
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`py-3 px-6 ${activeTab === 2 ? "border-b-2 border-blue-600" : ""}`}
            >
              <img src="/PayPal.png" alt="avatar" className="object-cover h-7" />
            </button>
          </div>
          {/* content */}
          {activeTab === 1 && <OtherPayments />}
          {activeTab === 2 && <PayPalCheckout />}
        </div>
        <div className="w-[360px] flex flex-col gap-5">
          <div className="bg-white shadow-lg rounded-lg border border-gray-400 p-5">
            <div className="flex gap-3 border-b border-gray-400">
              <img src="/google.svg" alt="avatar" className="object-cover h-20 w-16" />
              <div className="flex flex-col pb-3">
                <p>LinkedIn Pro subscription Bundle</p>
                <p className="text-sm text-gray-400">Unlock the full potential of linkedIn</p>
                <p className="text-sm text-gray-400">&copy;2023</p>
                <Link className="text-blue-600 text-sm">Secured by TLS</Link>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 border-b border-gray-400">
              <p>No commitment. Cancel anytime</p>
              <span className="flex justify-between items-center">
                <p>Monthly Subscription</p>
                <div className="flex flex-col text-gray-400 text-xs text-center pb-3">
                  <p>7 days free trial</p>
                  <p>then $14/mo</p>
                </div>
              </span>
              <span className="flex justify-between items-center font-semibold">
                <p>Todays Subscription</p>
                <p>$0</p>
              </span>
            </div>

            <p className="text-xs text-gray-400 mt-5">
              Your subscription begins today with a 7-day free trial. If you decide to stop during the trial period, visit My
              Purchases to cancel before November 02, 2023 and your card won’t be charged. We can’t issue refunds once your card
              is charged
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg border border-gray-400 flex gap-2 overflow-hidden">
            <img src={user?.avatar} alt="avatar" className="w-28 h-full object-cover rounded-lg hover:scale-105" />
            <div className="text-xs mt-3 pr-5 pl-5">
              <p className="line-clamp-4">
                The courses I took taught me how to turn theory into concrete & systematic practice. Coursera has been paramount
                to the advancement of my career.
              </p>
              <p className="text-green-500 text-right">By Sahan Juli</p>
            </div>
          </div>
        </div>
      </div>
      <WelcomePopUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
