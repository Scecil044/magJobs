import { Link } from "react-router-dom";
const mock = [
  {
    firstName: "Jayden",
    lastName: "W"
  },
  {
    firstName: "Samson",
    lastName: "W"
  },
  {
    firstName: "Linda",
    lastName: "W"
  },
  {
    firstName: "Lameck",
    lastName: "W"
  }
];
export default function AddToFeed({ feeds = mock }) {
  return (
    <>
      <div className="flex justify-between items-center font-semibold">
        <h1>Add to your feed</h1>
      </div>
      {feeds.slice(0, 3).map((feed, index) => {
        return (
          <div key={index}>
            <div className="flex gap-2">
              <Link to="/profile">
                <img src="/google.svg" alt="avatar" className="w-10 h-10 rounded-full" />
              </Link>
              <div className="flex flex-col">
                <h1 className="font-semibold">
                  {feed?.firstName} {feed?.lastName}
                </h1>
                <span className="text-xs text-gray-400">React | javascript | Php | Tailwind | Mysql |UI/UX</span>
                <div className="mt-2">
                  <button className="flex items-center gap-2 py-1 px-6 rounded-3xl outline-none border border-gray-500">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-between items-center font-semibold">
        <h1 className="text-sm">View all recommendations</h1>
      </div>
    </>
  );
}
