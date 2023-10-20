import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const mock = [
  {
    firstName: "Saline",
    lastName: "Anyango",
    userName: "sAnyango",
    email: "saline@gmail.com",
    avatar: "https://randomuser.me/portraits/women/48.jpg"
  },
  {
    firstName: "Julio",
    lastName: "Jack",
    userName: "sAnyango",
    email: "saline@gmail.com",
    avatar: "https://randomuser.me/portraits/men/44.jpg",
    post: {
      text:
        "Innovation in industry 3.0 has just gone a leap higher! Robots are actually making new cars. Who knows, our next artists may just be robots"
    }
  },
  {
    firstName: "Joel",
    lastName: "Oesten",
    userName: "sAnyango",
    email: "saline@gmail.com",
    avatar: "https://randomuser.me/portraits/women/34.jpg",
    post: {
      text:
        "Innovation in industry 3.0 has just gone a leap higher! Robots are actually making new cars. Who knows, our next artists may just be robots"
    }
  }
];
export default function Posts({ posts = mock }) {
  return (
    <>
      {posts?.map((post, index) => {
        return (
          <div key={index} className="bg-white shadow-lg p-3 rounded-lg border border-gray-400">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1">
                <img
                  src="https://randomuser.me/portraits/men/76.jpg"
                  alt="avatar"
                  className="rounded-full object-cover w-7 h-7"
                />
                <span className="flex text-xs">
                  <h5 className="font-semibold mr-1">Amadeus John</h5> <p className="text-gray-600">liked this</p>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <BsThreeDots className="w-5 h-4 text-gray-600" />
                <AiOutlineClose className="w-5 h-4 text-gray-600" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div>
                  <img src={post?.avatar} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
                </div>
                <div>
                  <h1 className="font-semibold card-header">
                    {post?.firstName} {post?.lastName}
                  </h1>
                </div>
              </div>
              <button className="flex items-center text-blue-600 font-semibold hover:bg-blue-100 py-1 px-2">
                <AiOutlinePlus className="h-5 w-5 text-blue-600" />
                Follow
              </button>
            </div>
            {/* message */}
            <div className="text-sm">
              <p>
                I encourage developers who have been coding for at least 3 years building apps from scratch to make use of
                3party platforms to handle some of the processes like Authentication & Data management.
              </p>
              <img
                src="https://i.natgeofe.com/n/16fc1c64-7589-46da-8350-aa3b01da2152/3961779_16x9.jpg"
                alt="avatar"
                className="w-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
