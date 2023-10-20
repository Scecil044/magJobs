import { AiOutlineClose } from "react-icons/ai";

const mock = [
  {
    firstName: "Spencer",
    lastName: "Cecile",
    avatar: "https://randomuser.me/portraits/men/12.jpg",
    career: "software developer"
  },
  {
    firstName: "Junior",
    lastName: "Steph",
    avatar: "https://randomuser.me/portraits/men/18.jpg",
    career: "software developer"
  },
  {
    firstName: "Stephanie",
    lastName: "May",
    avatar: "https://randomuser.me/portraits/women/12.jpg",
    career: "Engineer"
  },
  {
    firstName: "Andy",
    lastName: "Annete",
    avatar: "https://randomuser.me/portraits/women/92.jpg",
    career: "software developer"
  },
  {
    firstName: "Rose",
    lastName: "Ty",
    avatar: "https://randomuser.me/portraits/women/93.jpg",
    career: "software developer"
  },
  {
    firstName: "Emmanuel",
    lastName: "Oronje",
    avatar: "https://randomuser.me/portraits/men/99.jpg",
    career: "Sales and marketing"
  },
  {
    firstName: "Benson",
    lastName: "Magollo",
    avatar: "https://randomuser.me/portraits/men/93.jpg",
    career: "software developer"
  }
];

export default function SuggestionsFromUniversity({ users = mock }) {
  return (
    <>
      <div className="mb-5">
        <div className="flex items-center justify-between">
          <div className="text-gray-400 text-sm">
            <p>People you may know from Jomo Kenyatta University of Agriculture and Technology</p>
          </div>
          <button>See all</button>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-2">
          {/* suggestion */}
          {users.map((user, index) => {
            return (
              <div
                key={index}
                className="border border-gray-400 rounded-lg shadow-lg hover:shadow-xl hover:border-2 transition-all duration-300"
              >
                <div className="relative">
                  <div className="h-16 w-full bg-[#0072b1] overflow-hidden" />
                  <img
                    src={user?.avatar}
                    alt="avatar"
                    className="absolute top-3 left-8 rounded-full object-cover h-20 w-20 rounded-t-md hover:scale-105"
                  />
                  <div className="absolute right-2 top-3 h-6 w-6 rounded-full bg-black/50 flex items-center justify-center">
                    <AiOutlineClose className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="font-semibold">Julius Kipyegon</p>
                  <p className="text-sm text-gray-400">{user?.career}</p>

                  <div className="mt-3 mb-2">
                    <button className="rounded-3xl border border-indigo-600 outline-none py-1 px-6">Connect</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
