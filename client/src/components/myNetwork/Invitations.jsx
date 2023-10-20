import { FaRegHandshake } from "react-icons/fa";

const mock = [
  {
    firstName: "Sally",
    lastName: "Hanry",
    skills: "Laravel | PHP | Jango | React native",
    avatar: "https://randomuser.me/portraits/women/93.jpg"
  },
  {
    firstName: "Vincent",
    lastName: "Hanry",
    skills: "Laravel | PHP | Jango | React native",
    avatar: "https://randomuser.me/portraits/men/83.jpg"
  },
  {
    firstName: "Steve",
    lastName: "Hanry",
    skills: "Laravel | PHP | Jango | React native",
    avatar: "https://randomuser.me/portraits/men/73.jpg"
  },
  {
    firstName: "Veronicah",
    lastName: "Hanry",
    skills: "Laravel | PHP | Jango | React native",
    avatar: "https://randomuser.me/portraits/women/73.jpg"
  },
  {
    firstName: "spencer",
    lastName: "Hanry",
    skills: "Laravel | PHP | Jango | React native",
    avatar: "https://randomuser.me/portraits/men/3.jpg"
  }
];

export default function Invitations({ users = mock }) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg border border-gray-400 p-5">
        <div className="flex justify-between items-center">
          <p>Invitations</p>
          <p className="text-gray-400 text-sm">See all 19</p>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-5">
            {users.slice(0, 5).map((user, index) => {
              return (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div>
                      <img src={user?.avatar} alt="avatar" className="object-cover rounded-full h-16 w-16" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-[15px]">
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p className="text-gray-500 text-sm">React | Node.js | Tailwind | MongoDb</p>
                      <span className="flex items-center gap-1">
                        <FaRegHandshake className="h-5 w-5 text-green-700" />
                        <p className="text-xs text-neutral-400">1 mutual connection</p>
                      </span>
                    </div>
                  </div>

                  {/* buttons */}
                  <div className="flex gap-2">
                    <button className="py-1 px-1 hover:bg-gray-100">Ignore</button>
                    <button className="py-1 px-4 rounded-3xl border border-indigo-800 text-indigo-600">Accept</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
