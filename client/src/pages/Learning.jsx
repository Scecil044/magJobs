import { useState } from "react";
import TopNav from "../components/app/TopNav";
import { AiFillHome, AiFillLinkedin, AiOutlineMenuUnfold } from "react-icons/ai";
import { useSelector } from "react-redux";
import { BsBookmark } from "react-icons/bs";

const mock = [
  {
    firstName: "okay"
  },
  {
    firstName: "okay"
  },
  {
    firstName: "okay"
  },
  {
    firstName: "okay"
  },
  {
    firstName: "okay"
  }
];
export default function Learning({ courses = mock }) {
  const { user } = useSelector(state => state.auth);
  const [isActiveTab, setIsActiveTab] = useState(1);

  return (
    <>
      <TopNav />
      <div className="bg-white border-t-4 flex h-screen gap-2">
        <div className="shadow-lg w-[250px]! flex flex-col gap-3 overflow-y-auto max-h-[100%]">
          <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 1 ? "bg-gray-100" : ""}`}>
            <button className="w-full flex items-center gap-2">
              <AiFillHome className="w-7 h-7" />
              Home
            </button>
          </div>
          <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 2 ? "bg-gray-100" : ""}`}>
            <button className="w-full flex items-center gap-2">
              <AiOutlineMenuUnfold className="w-7 h-7" />
              Browse
            </button>
            <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 2.1 ? "bg-gray-100" : ""}`}>
              <button className="w-full flex items-center gap-2">Business</button>
            </div>
            <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 2.2 ? "bg-gray-100" : ""}`}>
              <button className="w-full flex items-center gap-2">Creative</button>
            </div>
            <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 2.3 ? "bg-gray-100" : ""}`}>
              <button className="w-full flex items-center gap-2">Technology</button>
            </div>
          </div>

          <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 2 ? "bg-gray-100" : ""}`}>
            <button className="w-full flex items-center gap-2">
              <AiOutlineMenuUnfold className="w-7 h-7" />
              My Learning
            </button>
            <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 2.1 ? "bg-gray-100" : ""}`}>
              <button className="w-full flex items-center gap-2">My Library</button>
            </div>
            <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 2.2 ? "bg-gray-100" : ""}`}>
              <button className="w-full flex items-center gap-2">Goals</button>
            </div>
          </div>

          <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 1 ? "bg-gray-100" : ""}`}>
            <button className="w-full flex items-center gap-2">
              <AiFillHome className="w-7 h-7" />
              Hands on Practice
            </button>
          </div>

          <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 1 ? "bg-gray-100" : ""}`}>
            <button className="w-full flex items-center gap-2">
              <AiFillHome className="w-7 h-7" />
              Certifications
            </button>
          </div>

          <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 1 ? "bg-gray-100" : ""}`}>
            <button className="w-full flex items-center gap-2">
              <AiFillHome className="w-7 h-7" />
              Office Hours
            </button>
          </div>

          <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 1 ? "bg-gray-100" : ""}`}>
            <button className="w-full flex items-center gap-2">
              <AiFillHome className="w-7 h-7" />
              Settings
            </button>
          </div>

          <div className={`py-2 px-4 hover:bg-gray-100 ${isActiveTab === 1 ? "bg-gray-100" : ""}`}>
            <button className="w-full flex items-center gap-2">
              <AiFillHome className="w-7 h-7" />
              Help
            </button>
          </div>
        </div>
        <div className="flex-1 p-5">
          <div className="h-[200px] w-full" />
          <div>
            <p className="font-bold">
              Top picks for {user?.firstName} {user?.lastName}
            </p>
            <div className="grid grid-cols-4 gap-2 overflow-x-scroll scrollbar-hide snap-x w-[100%]">
              {/* item */}
              {courses.map((course, index) => {
                return (
                  <div
                    key={index}
                    className={`card cursor-pointer rounded-lg shadow-lg border border-gray-400 w-[220px] h-[200px] overflow-hidden transform transition-transform hover:scale-110 hover:h-[340px] hover:w-[250px] hover:z-50 duration-300 snap-start`}
                  >
                    <div>
                      <img src="/lcode.jpg" alt="avatar" className="object-cover h-24 w-full" />
                    </div>
                    <div className="p-2">
                      <p>Course</p>
                      <p className="text-gray-500 tracking-wide text-sm ">IT service desk careers and certifications</p>
                      <p className="text-sm text-gray-400 mt-1">By Sarah Anita</p>
                      {/* Collapse */}
                      <div>
                        <p className="text-xs line-clamp-4 mt-2 text-gray-400">
                          Prepare to transition your career in IT help desk management and coordination with the skills and
                          experience that will be taught by your instructor
                        </p>
                        <div className="mt-3">
                          <AiFillLinkedin className="text-blue-600 h-5 w-5" />
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
                          <p>321,999 learners</p>
                          <span className="flex items-center gap-1">
                            <BsBookmark />
                            Save
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
