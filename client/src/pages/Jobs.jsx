import { GiRadioactive } from "react-icons/gi";
import TopNav from "../components/app/TopNav";
import AddText from "../components/common/AddText";
import BodyFooter from "../components/common/BodyFooter";
import LeftComponent from "../components/jobs/LeftComponent";
import RighComponent from "../components/jobs/RighComponent";

export default function Jobs() {
  return (
    <>
      <div className="p-5 flex gap-8">
        {/* left component */}
        <div className="flex flex-col gap-5 w-[250px]">
          <div className="p-5 bg-white rounded-lg shadow-lg border border-gray-400">
            <LeftComponent />
          </div>
          <button className="flex items-center gap-2  justify-center rounded-3xl py-1 px-3 border border-blue-700 hover:bg-blue-100">
            Post a free job
          </button>
        </div>
        {/* central container */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-white rounded-lg border border-gray-400">
            <div className="p-5">
              <p className="font-semibold">Recommended for you</p>
              <p className="text-gray-400 text-sm">Based on your profile and search history</p>

              <div className="flex flex-col gap-3 mt-5">
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

                <div className="flex gap-4">
                  <div>
                    <img src="/devslopes.jpg" alt="avatar" className="rounded-full object-cover h-10 w-10" />
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

                <div className="flex gap-4">
                  <div>
                    <img src="/ford.png" alt="avatar" className="rounded-full object-cover h-10 w-10" />
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

                <div className="flex gap-4">
                  <div>
                    <img src="/un.png" alt="avatar" className="rounded-full object-cover h-10 w-10" />
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
              </div>
            </div>
            <button className="py-3 px-4 hover:bg-gray-100 w-full">See all</button>
          </div>
          <div className="bg-white p-5 rounded-lg border border-gray-400">three</div>
          <div className="bg-white p-5 rounded-lg border border-gray-400">Four</div>
        </div>
        {/* right component */}
        <div className="flex flex-col gap-5 w-[250px]">
          <div className="bg-white p-5 border border-gray-400 shadow-lg">
            <RighComponent />
          </div>
          <AddText className="" />
        </div>
      </div>
    </>
  );
}
