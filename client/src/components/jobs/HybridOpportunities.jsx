import { GiRadioactive } from "react-icons/gi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function HybridOpportunities() {
  return (
    <>
      <div className="p-5">
        <p className="font-semibold">Hybrid Opportunities</p>
        <p className="text-gray-400 text-sm">Because you expressed interest in Hybrid work</p>

        <div className="flex flex-col gap-3 mt-5">
          <div className="flex justify-between gap-2">
            <div className="flex gap-4">
              <div>
                <img src="/google.svg" alt="avatar" className="rounded-full object-cover h-10 w-10" />
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-blue-600 font-semibold hover:underline">Software Developer (Fixed Contract)</p>
                <p className="text-sm text-gray-500">Britam</p>
                <p className="text-sm text-gray-400">Nairobi, Nairobi, Kenya (Remote)</p>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <div className="rounded-full h-5 w-5 border-2 border-green-600 flex items-center justify-center">
                    <GiRadioactive className="text-green-600 w-4 h-4" />
                  </div>{" "}
                  Actively recruiting
                </span>
                <p className="text-sm text-neutral-400">6 days ago</p>
              </div>
            </div>
            <div className="flex gap-2">
              <BsBookmark className="w-6 h-6" />
              <AiOutlineClose className="h-6 w-6" />
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex gap-4">
              <div>
                <img src="/microsoft.jpg" alt="avatar" className="rounded-full object-cover h-10 w-10" />
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-blue-600 font-semibold hover:underline">Software Developer (Fixed Contract)</p>
                <p className="text-sm text-gray-500">Britam</p>
                <p className="text-sm text-gray-400">Nairobi, Nairobi, Kenya (Remote)</p>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <div className="rounded-full h-5 w-5 border-2 border-green-600 flex items-center justify-center">
                    <GiRadioactive className="text-green-600 w-4 h-4" />
                  </div>{" "}
                  Actively recruiting
                </span>
                <p className="text-sm text-neutral-400">6 days ago</p>
              </div>
            </div>
            <div className="flex gap-2">
              <BsBookmark className="w-6 h-6" />
              <AiOutlineClose className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      <button className="py-3 px-4 hover:bg-gray-100 w-full">See all</button>
    </>
  );
}
