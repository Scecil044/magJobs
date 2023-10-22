import { Link } from "react-router-dom";

export default function AddText() {
  return (
    <div className="flex flex-col items-center justify-center my-7 text-xs text-gray-400 w-[300px] px-5">
      <div className="flex flex-wrap gap-3">
        <Link to="/about" className="hover:text-blue-500 hover:underline">
          About
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:font-semibold hover:underline">
          Help center
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:font-semibold hover:underline">
          Privacy and Terms
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:font-semibold hover:underline">
          Ad Choices
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:font-semibold hover:underline">
          Advertising
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:font-semibold hover:underline">
          Business services
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:font-semibold hover:underline">
          Get the MagJobs App
        </Link>
        <Link to="/about" className="hover:text-blue-500 hover:font-semibold hover:underline">
          More
        </Link>
      </div>
      <div className="self-start flex items-center gap-3 mt-4 font-bold text-lg">
        <span className="flex items-center">
          <p className="text-blue-600">mag</p>
          <div className="bg-indigo-700 text-white rounded-2xl px-1">Jobs</div>
        </span>
        <span className="text-xs text-neutral-700 whitespace-nowrap">MagJobs corporation &copy; 2023</span>
      </div>
    </div>
  );
}
