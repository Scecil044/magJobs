import { useSelector } from "react-redux";

export default function OtherPayments() {
  const { user } = useSelector(state => state.auth);
  const userName = user?.firstName + " " + user?.lastName;
  return (
    <div>
      <div className="my-3">
        <div className="mb-3">
          <label htmlFor="">Card Name</label>
          <input type="text" defaultValue={userName} className="outline-none py-2 px-4 border border-gray-400 w-full" />
        </div>

        <div className="mb-3">
          <div className="flex gap-5">
            <div className="">
              <label htmlFor="">Card Info</label>
              <input type="text" placeholder="Card Number" className="outline-none border border-gray-300 px-4 py-2" />
            </div>
            <div className="flex gap-2">
              <div>
                <label htmlFor="">Expiration Date</label>
                <input type="text" placeholder="Expiry date" className="w-full outline-none border border-gray-300 py-2 px-2" />
              </div>
              <div>
                <label htmlFor="">CVV</label>
                <input type="text" placeholder="CVV" className="w-full outline-none border border-gray-300 py-2 px-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="">Country</label>
          <select type="text" className="outline-none py-2 px-4 border border-gray-400 w-full">
            <option value="">Select</option>
            <option value="">America</option>
          </select>
        </div>
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
