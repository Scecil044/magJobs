import { Link } from "react-router-dom";

export default function MyPosts() {
  return (
    <>
      <div className="flex flex-col gap-5 bg-white p-5">
        <img src="/noRecord.png" alt="" />
        <div className="flex flex-col text-center">
          <p className="font-semibold text-lg">No new post activities</p>
          <p className="w-2/3 mx-auto">View your previous post activity on your profile</p>
          <Link
            to="/profile"
            className="py-1 px-6 outline-none border border-indigo-600 my-5 self-start mx-auto rounded-3xl hover:bg-blue-100"
          >
            View previous activity
          </Link>
        </div>
      </div>
    </>
  );
}
