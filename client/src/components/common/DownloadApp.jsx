import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function DownloadApp() {
  const [openAdd, setOpenAdd] = useState(true);
  return (
    <>
      {openAdd && (
        <div className="bg-blue-300 opacity-60 px-3 h-[170px] w-[320px] absolute top-[20%] right-2">
          <div className="flex items-center justify-between mt-2 mb-1">
            <div className="font-semibold">
              <Link to="/app/home" className="flex cursor-pointer text-sm">
                Mag <div className="text-white bg-indigo-700 px-1 rounded-lg">Jobs</div>
              </Link>
            </div>
            <AiOutlineClose className="cursor-pointer" onClick={() => setOpenAdd(!openAdd)} />
          </div>
          <p className="font-semibold">Get the new magJob Windows app</p>
          <p className="mt-2 text-sm">
            Everything you love about LinkedIn - now in a desktop app designed for Windows users like you.
          </p>
          <button className="bg-blue-800 mt-2 text-white rounded-3xl py-1 px-2 border border-gray-400 outline-none">
            Get the app
          </button>
        </div>
      )}
    </>
  );
}
