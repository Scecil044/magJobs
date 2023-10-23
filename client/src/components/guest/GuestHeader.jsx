import { Link } from "react-router-dom";

export default function GuestHeader() {
  return (
    <>
      <header className="bg-white w-full h-16 shadow-lg p-5">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="font-semibold">
            <Link to="/app/home" className="flex cursor-pointer">
              Mag <div className="text-white bg-indigo-700 px-1 rounded-lg">Jobs</div>
            </Link>
          </div>
          {/* search */}
          <div className="bg-gray-100 px-4 flex items-center justify-center">
            <input type="text" placeholder="First Name" className="bg-transparent py-1 pl-2 pr-10 outline-none" />
            <input type="text" placeholder="Last Name" className="bg-transparent py-1 pl-2 pr-10 outline-none" />
          </div>
          <div className="flex items-center gap-8">
            <button className="py-2 px-4 hover:border hover:border-gray-300 hover:bg-blue-100 rounded-3xl">Join now</button>
            <button className="border border-blue-700 py-2 px-4 rounded-3xl hover:bg-blue-100 hover:border-2">sign in</button>
          </div>
        </nav>
      </header>
    </>
  );
}
