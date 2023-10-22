import { useState } from "react";
import { Link } from "react-router-dom";
import AppAdd from "../components/common/AppAdd";
import AddText from "../components/common/AddText";
import NotificationsCard from "../components/notifications/NotificationsCard";
import MyPosts from "../components/notifications/MyPosts";
import NotificationMentions from "../components/notifications/NotificationMentions";

export default function Notifications() {
  const [isActive, setIsActive] = useState(1);

  const toggleIsActive = buttonNumber => {
    setIsActive(buttonNumber);
  };
  return (
    <>
      <div className="flex gap-8 mt-5 mb-5">
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-400 w-[180px] self-start top-5 sticky">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Manage your notifications</p>
            <Link to="/" className="hover:underline text-indigo-600 font-semibold text-sm">
              view settings
            </Link>
          </div>
        </div>
        {/* central container */}
        <div className="flex flex-1 flex-col gap-5 self-start">
          <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-400  flex gap-5 items-center">
            <button
              onClick={() => toggleIsActive(1)}
              className={`flex items-center py-1 px-3 rounded-3xl border border-indigo-700 outline-none ${
                isActive === 1 ? "bg-green-700 text-white" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => toggleIsActive(2)}
              className={`flex items-center py-1 px-3 rounded-3xl border border-indigo-700 outline-none ${
                isActive === 2 ? "bg-green-700 text-white" : ""
              }`}
            >
              My posts
            </button>
            <button
              onClick={() => toggleIsActive(3)}
              className={`flex items-center py-1 px-3 rounded-3xl border border-indigo-700 outline-none ${
                isActive === 3 ? "bg-green-700 text-white" : ""
              }`}
            >
              Mentions
            </button>
          </div>

          {isActive === 1 && <NotificationsCard />}
          {isActive === 2 && <MyPosts />}
          {isActive === 3 && <NotificationMentions />}
        </div>
        <div className="p-3 w-[300px] self-start top-5 sticky">
          {/* <AppAdd /> */}
          <AddText />
        </div>
      </div>
    </>
  );
}
