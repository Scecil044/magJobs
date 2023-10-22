import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const mock = [
  {
    id: 1,
    firstName: "William",
    lastName: "Odek",
    avatar: "https://randomuser.me/portraits/women/33.jpg"
  },
  {
    id: 2,
    firstName: "William",
    lastName: "Odek",
    avatar: "https://randomuser.me/portraits/men/13.jpg"
  },
  {
    id: 3,
    firstName: "William",
    lastName: "Odek",
    avatar: "https://randomuser.me/portraits/men/14.jpg"
  },
  {
    id: 4,
    firstName: "William",
    lastName: "Odek",
    avatar: "https://randomuser.me/portraits/women/13.jpg"
  },
  {
    id: 5,
    firstName: "William",
    lastName: "Odek",
    avatar: "https://randomuser.me/portraits/women/14.jpg"
  },
  {
    id: 6,
    firstName: "William",
    lastName: "Odek",
    avatar: "https://randomuser.me/portraits/men/15.jpg"
  },
  {
    id: 7,
    firstName: "William",
    lastName: "Odek",
    avatar: "https://randomuser.me/portraits/women/15.jpg"
  }
];
export default function NotificationsCard({ users = mock }) {
  // useEffect to handle dot
  const [isActive, setIsActive] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-5 bg-white">
        {users.slice(0, 10).map((user, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between gap-2 hover:bg-gray-100 p-5 cursor-pointer hover:shadow-md transition-all duration-200"
            >
              <Link to={`/feed/update/${user.id}`} onClick={() => setIsActive(index)} className="flex gap-2">
                <div className="flex items-center gap-1">
                  {isActive === index && <GoDotFill className="text-blue-500" />}
                  <img src={user.avatar} alt="avatar" className="rounded-full object-cover h-12 w-12" />
                </div>
                <div className="flex flex-1">
                  <p className="text-sm">
                    Tough times never last. These were the last words of the brave women and men who worked tirelessly on
                    settler farms, with poor work conditions, no insurance, and no pay, for the sake of peace of mind
                  </p>
                </div>
              </Link>
              <div className="flex flex-col gap-1 text-gray-400 text-sm">
                <p>2h</p>
                <BsThreeDots />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
