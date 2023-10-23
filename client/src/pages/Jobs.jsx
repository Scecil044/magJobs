import { GiRadioactive } from "react-icons/gi";
import TopNav from "../components/app/TopNav";
import AddText from "../components/common/AddText";
import BodyFooter from "../components/common/BodyFooter";
import LeftComponent from "../components/jobs/LeftComponent";
import RighComponent from "../components/jobs/RighComponent";
import RecommendedJobs from "../components/jobs/RecommendedJobs";
import BestFitJobs from "../components/jobs/BestFitJobs";
import StillHiring from "../components/jobs/StillHiring";
import MoreJobs from "../components/jobs/MoreJobs";
import RemoteOpportunities from "../components/jobs/RemoteOpportunities";
import HybridOpportunities from "../components/jobs/HybridOpportunities";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import HiringFromYourNetwork from "../components/jobs/HiringFromYourNetwork";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [premiumAdd, setPremiumAdd] = useState(true);
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
        <Link to="/jobs/collections/recommended" className="flex flex-1 flex-col gap-3">
          <div className="bg-white rounded-lg border border-gray-400">
            <RecommendedJobs />
          </div>

          {premiumAdd && (
            <div className="bg-white rounded-lg border px-5 py-2 border-gray-400">
              <div className="flex justify-between gap-2">
                <div className="flex gap-2">
                  <div>
                    <img src="/clock.jpg" alt="avatar" className="object-cover w-12 h-12 rounded-full" />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <p className="text-sm">Premium helped one member to get 7 interviews in 7 days</p>
                    <div className="mx-auto">
                      <button className="flex items-center text-sm justify-center rounded-3xl border border-blue-500 py-1 px-3 hover:bg-blue-100">
                        Find out how
                      </button>
                    </div>
                  </div>
                </div>
                <AiOutlineClose onClick={() => setPremiumAdd(!premiumAdd)} className="cursor-pointer transition-all delay-75" />
              </div>
            </div>
          )}

          <div className="premium border-t-amber-400 border-t-4">
            <div className="bg-white rounded-lg border border-gray-400">
              <BestFitJobs />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-400">
            <StillHiring />
          </div>

          <div className="bg-white rounded-lg border border-gray-400">
            <HiringFromYourNetwork />
          </div>

          <div className="bg-white rounded-lg border border-gray-400">
            <RemoteOpportunities />
          </div>

          <div className="bg-white rounded-lg border border-gray-400">
            <HybridOpportunities />
          </div>

          <div className="bg-white rounded-lg border border-gray-400">
            <MoreJobs />
          </div>
        </Link>
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
