import { BsFillBookmarkFill } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";
import { useSelector } from "react-redux";

export default function ProfileSection() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="h-14 w-full bg-[#0072b1]">
        {user?.subscription === "premium" ? (
          <img
            src="/forester.jpeg"
            alt="avatar"
            className="h-14 w-full object-cover"
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center justify-center absolute top-5 right-[40%]">
        <img
          src={user?.avatar}
          alt="avatar"
          className="h-20 w-20 rounded-full"
        />
      </div>
      <div className="mt-10 text-center">
        <h1 className="font-semibold">
          {user?.firstName} {user?.lastName}
        </h1>
        <p className="text-sm text-neutral-600 w-3/5 mx-auto">
          Full stack developer | React| Node.js |Laravle |Vue
        </p>
      </div>
      {/* views and impressions */}
      <div className="mt-5 flex flex-col text-sm px-2">
        <span className="flex items-center justify-between">
          Who viewed your profile{" "}
          <p className="text-indigo-600 font-semibold">24</p>
        </span>
        <span className="flex items-center justify-between">
          Impressions of your post{" "}
          <p className="text-indigo-600 font-semibold">13</p>
        </span>
      </div>
      {/* premium and saved */}
      <div className="mt-5 flex flex-col text-sm px-2 mb-3">
        <span className="flex items-center font-semibold gap-2">
          <BsFillBookmarkFill className="text-amber-500" />
          View your premium options
        </span>
        <span className="flex items-center font-semibold gap-2">
          <MdWorkspacePremium />
          My saved items
        </span>
      </div>
    </>
  );
}
