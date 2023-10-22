const mock = [
  {
    firstName: "Gin",
    lastName: "May",
    avatar: "https://randomuser.me/portraits/men/4.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Gray",
    lastName: "Stevens",
    avatar: "https://randomuser.me/portraits/men/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Andy",
    lastName: "Mariaa",
    avatar: "https://randomuser.me/portraits/women/4.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  },
  {
    firstName: "Salima",
    lastName: "Njugush",
    avatar: "https://randomuser.me/portraits/women/14.jpg",
    specialization: "Laravel | Vue | React"
  }
];
export default function ChatList({ users = mock }) {
  return (
    <>
      {users.map((user, index) => {
        return (
          <div key={index} className="flex gap-1 border-l-4 border-green-700 px-1 cursor-pointer">
            <div>
              <img src={user?.avatar} alt="avatar" className="object-cover rounded-full w-12 h-12" />
            </div>
            <div className="flex flex-1 justify-between gap-1">
              <div className="flex-1">
                <div className="flex flex-col">
                  <p className="text-gray-800">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-sm text-gray-400">
                    You: <span>Home is the best guys, we cant escape home</span>
                  </p>
                </div>
              </div>
              <div className="text-xs">13th Oct</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
