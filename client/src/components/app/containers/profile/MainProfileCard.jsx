import { useSelector } from "react-redux";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import Interests from "./Interests";

export default function MainProfileCard() {
  const { user } = useSelector(state => state.auth);
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white shadow-lg border border-gray-400">
        <div className="relative h-[200px]">
          <div className="relative overflow-hidden h-[200px]">
            <img
              src="https://i.natgeofe.com/n/16fc1c64-7589-46da-8350-aa3b01da2152/3961779_16x9.jpg"
              alt="avatar"
              className="absolute w-full object-cover rounded-t-lg"
            />
          </div>
          <div className="absolute top-32 left-5">
            <img src={user?.avatar} alt="avatar" className="rounded-full w-28 h-28" />
          </div>
          <Link to="/" className="absolute top-7 right-12 rounded-full bg-white h-9 w-9 flex items-center justify-center">
            <BsPencil className="h-5 w-5 text-blue-600" />
          </Link>
        </div>

        <div className="flex justify-between p-5 gap-8">
          <div className="flex flex-col mt-20">
            <h1 className="font-semibold text-2xl">
              {user?.firstName} {user?.lastName}
            </h1>
            <p>BBIT | Full-stack Developer | PHP/Laravel | Vue | React |Node.js</p>
            <span className="flex items-center text-gray-500 text-[14px]">
              Nairobi, Nairobi County, Kenya <div className="h-1 w-1 bg-blue-500 rounded-full mr-1 ml-1" />{" "}
              <p className="text-blue-600 font-semibold">contact info</p>
            </span>
            <p className="text-blue-600 font-semibold text-sm">112 connections</p>
          </div>
          {/* right component */}
          <div className="flex flex-col mt-3">
            <div className="flex gap-5 items-center justify-end mr-1">
              <span className="rounded-full text-white bg-indigo-800 p-1">MJ</span>
              <BsPencil className="h-5 w-5" />
            </div>
            <div className="flex gap-1 items-center">
              <div>
                <img
                  src="https://netstorage-tuko.akamaized.net/images/5cd3d44ba68de436.png"
                  alt="avatar"
                  className=" w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-semibold text-sm">Jomo Kenyatta University of Agriculture and Technology</span>
              </div>
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-5 mt-5 p-5">
          <button className="py-1 px-3 rounded-3xl outline-none border border-gray-500 text-white bg-indigo-700 hover:bg-indigo-800 shadow-sm transition-shadow hover:shadow-none duration-300 hover:border-white hover:border-2">
            Add goal
          </button>
          <button className="py-1 px-3 rounded-3xl outline-none border border-indigo-600 hover:bg-blue-100 text-indigo-600 hover:border-2 transition-all duration-300">
            Add profile section
          </button>
          <button className="py-1 px-3 rounded-3xl outline-none border border-gray-500 hover:border-2 transition-all duration-300">
            More
          </button>
        </div>
        {/* cards */}
        <div className="mt-5 flex items-center gap-8 text-sm p-5">
          <div className="flex-1 py-2 px-3 bg-blue-50 shadow-md">
            <div className="flex-flex-col">
              <p className="font-semibold hover:underline">Open to work</p>
              <p className="hover:underline">Web developer roles</p>
              <Link to="/" className="hover:underline">
                Show details
              </Link>
            </div>
          </div>
          <div className="flex flex-col flex-1 py-1 px-3 border border-gray-400 rounded-lg shadow-md">
            <Link to="/" className="hover:underline">
              Show the services you offer so that you and your business can be found in search
            </Link>
            <Link to="/" className="text-indigo-700 hover:underline font-semibold">
              Get started
            </Link>
          </div>
        </div>
      </div>

      <Interests />
    </div>
  );
}
