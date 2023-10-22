import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiBowlHot } from "react-icons/bi";
import { MdLocalPolice } from "react-icons/md";
import { SiBigcartel, SiWorkplace, SiZendframework } from "react-icons/si";
import { TbBrandElectronicArts } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function BusinessDrawerCard({ setOpen }) {
  const showDrawer = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="text-center font-semibold">Visit more JobMag Products</p>
        <div className="grid grid-cols-4 gap-5">
          <div className="flex flex-col items-center justify-center w-16 h-16 shadow-sm hover:shadow-lg border border-gray-300 hover:border-gray-500 transition-all duration-200">
            <BiBowlHot className="text-blue-700 h-8 w-8" />
            <span className="text-center text-xs">Talent insights</span>
          </div>

          <div className="flex flex-col items-center justify-center w-16 h-16 shadow-sm hover:shadow-lg border border-gray-300 hover:border-gray-500 transition-all duration-200">
            <TbBrandElectronicArts className="text-blue-700 h-8 w-8" />
            <span className="text-center text-xs">Talent insights</span>
          </div>

          <div className="flex flex-col items-center justify-center w-16 h-16 shadow-sm hover:shadow-lg border border-gray-300 hover:border-gray-500 transition-all duration-200">
            <SiBigcartel className="text-blue-700 h-8 w-8" />
            <span className="text-center text-xs">Talent insights</span>
          </div>

          <div className="flex flex-col items-center justify-center w-16 h-16 shadow-sm hover:shadow-lg border border-gray-300 hover:border-gray-500 transition-all duration-200">
            <MdLocalPolice className="text-blue-700 h-8 w-8" />
            <span className="text-center text-xs">Talent insights</span>
          </div>

          <div className="flex flex-col items-center justify-center w-16 h-16 shadow-sm hover:shadow-lg border border-gray-300 hover:border-gray-500 transition-all duration-200">
            <SiZendframework className="text-blue-700 h-8 w-8" />
            <span className="text-center text-xs">Talent insights</span>
          </div>

          <div className="flex flex-col items-center justify-center w-16 h-16 shadow-sm hover:shadow-lg border border-gray-300 hover:border-gray-500 transition-all duration-200">
            <SiWorkplace className="text-blue-700 h-8 w-8" />
            <span className="text-center text-xs">Talent insights</span>
          </div>
        </div>

        <div className="mt-5">
          <p className="font-semibold">Explore more for business</p>

          <div className="flex flex-col gap-3 mt-3 max-h-[300px] overflow-y-auto">
            <div className="flex flex-col">
              <p className="font-semibold">Hire on JobMag</p>
              <p className="text-xs text-gray-400">Find, attract and recruit talent</p>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">Sell with JobMag</p>
              <p className="text-xs text-gray-400">Find, attract and recruit talent</p>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">Post a job for free</p>
              <p className="text-xs text-gray-400">Find, attract and recruit talent</p>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">Hire on JobMag</p>
              <p className="text-xs text-gray-400">Find, attract and recruit talent</p>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">Learn on JobMag</p>
              <p className="text-xs text-gray-400">Find, attract and recruit talent</p>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">Admin center</p>
              <p className="text-xs text-gray-400">Find, attract and recruit talent</p>
            </div>

            <div>
              <Link onClick={showDrawer} to="/company/setup/new" className="flex items-center gap-2 font-bold">
                Create a company Page
                <AiOutlinePlus />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
