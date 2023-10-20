import { Link } from "react-router-dom";

export default function AppAdd() {
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center">
          <img src="/appAdd.jpg" alt="add" className="object-cover h-[70%] w-[70%] mx-auto" />
        </div>
        <Link to="/" className="font-semibold top-5 absolute text-indigo-700 hover:underline">
          See Who is hiring
        </Link>
      </div>
    </>
  );
}
