import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const mock = [
  {
    firstName: "Fred",
    lastName: "Check",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
    profile: "Laravel | PHP | Python | javascript |React",
    followers: "203,000"
  },
  {
    firstName: "Anthonny",
    lastName: "Peters",
    avatar: "https://randomuser.me/portraits/men/80.jpg",
    profile: "Laravel | PHP | Python | javascript |React",
    followers: "203,000"
  },
  {
    firstName: "Julia",
    lastName: "Steve",
    avatar: "https://randomuser.me/portraits/women/91.jpg",
    profile: "Laravel | PHP | Python | javascript |React",
    followers: "203,000"
  },
  {
    firstName: "Eammaculate",
    lastName: "Peris",
    avatar: "https://randomuser.me/portraits/women/10.jpg",
    profile: "Laravel | PHP | Python | javascript |React",
    followers: "203,000"
  },
  {
    firstName: "Priscah",
    lastName: "Waters",
    avatar: "https://randomuser.me/portraits/women/29.jpg",
    profile: "Laravel | PHP | Python | javascript |React",
    followers: "203,000"
  }
];
export default function SuggestedContacts({ users = mock }) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg border border-gray-400">
        <div className="p-5">
          <h1 className="card-header">People you may know</h1>
          <p className="text-xs mb-3 text-gray-500">From your school</p>
          <div className="flex flex-col gap-2">
            {users.slice(0, 4).map((user, index) => {
              return (
                <div key={index} className="flex gap-1">
                  <div>
                    <img src={user?.avatar} alt={user?.firstName} className="rounded-full h-12 w-12 object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="card-header">
                      {user?.firstName} {user?.lastName}
                    </h3>
                    <p className="text-sm text-gray-400">{user?.profile}</p>
                    <Link
                      to="/"
                      className="flex items-center gap-1 hover:bg-gray-100 border border-gray-500 py-1 px-3 rounded-3xl self-start mt-2"
                    >
                      <AiOutlinePlus />
                      Follow
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button className="w-full flex items-center text-sm justify-center hover:bg-gray-100 py-2 px-2">Show all</button>
        </div>
      </div>
    </>
  );
}
