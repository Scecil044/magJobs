export default function PayPalCheckout() {
  return (
    <div>
      <div className="mt-5 flex flex-col items-center justify-center">
        <p className="text-center font-semibold">Click the paypal button to login</p>
        <p className="text-center w-1/2 mx-auto text-xs my-1">
          You will be prompted for your PayPal account email and password through a secure PayPal login form
        </p>
        <button className="bg-[#0072b1] text-white py-2 px-14 rounded-lg mt-2">Paypal</button>
      </div>
      <div className="flex gap-8 mt-5 items-center">
        <div className="flex-1">
          <button className="text-white bg-[#0072b1] px-14 py-3 w-full">Start a free trial</button>
        </div>
        <div className="flex-1">
          <p className="text-lg font-mono font-semibold">You will not be charged today!</p>
        </div>
      </div>
    </div>
  );
}
