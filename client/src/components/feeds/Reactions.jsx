import { AiFillLike } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { BsEmojiSmile, BsFillSendFill, BsImageFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost, BiLike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useRef } from "react";

export default function Reactions() {
  const { user } = useSelector(state => state.auth);
  const fileRef = useRef();
  return (
    <div className="px-5 mt-3">
      <p>Reactions</p>
      <div className="flex gap-3 my-1">
        <div className="relative">
          <img src="https://randomuser.me/portraits/men/39.jpg" alt="avatar" className="rounded-full object-cover h-12 w-12" />
          <div className="absolute flex items-center justify-center top-8 right-1 rounded-full border-2 border-green-700 bg-blue-500">
            <AiFillLike className=" text-white h-3 w-3" />
          </div>
        </div>

        <div className="relative">
          <img src="https://randomuser.me/portraits/men/9.jpg" alt="avatar" className="rounded-full object-cover h-12 w-12" />
          <div className="absolute flex items-center justify-center top-8 right-1 rounded-full border-2 border-green-700 bg-blue-500">
            <AiFillLike className=" text-white h-3 w-3" />
          </div>
        </div>

        <div className="relative">
          <img src="https://randomuser.me/portraits/men/19.jpg" alt="avatar" className="rounded-full object-cover h-12 w-12" />
          <div className="absolute flex items-center justify-center top-8 right-1 rounded-full border-2 border-green-700 bg-blue-500">
            <AiFillLike className=" text-white h-3 w-3" />
          </div>
        </div>

        <div className="relative">
          <img
            src="https://randomuser.me/portraits/women/99.jpg"
            alt="avatar"
            className="rounded-full object-cover h-12 w-12"
          />
          <div className="absolute flex items-center justify-center top-8 right-1 rounded-full border-2 border-green-700 bg-blue-500">
            <AiFillLike className=" text-white h-3 w-3" />
          </div>
        </div>

        <button className="flex items-center justify-center cursor-pointer rounded-full border border-gray-400 h-12 w-12 text-gray-500">
          <BiPlus />
          97
        </button>
      </div>
      <div className="mt-2 flex justify-between p-3">
        <button className="flex items-center gap-1">
          <BiLike className="w-6 h-6 text-gray-500" />
          Like
        </button>
        <button className="flex items-center gap-1">
          <FaRegCommentDots className="w-6 h-6 text-gray-500" />
          Comment
        </button>
        <button className="flex items-center gap-1">
          <BiRepost className="w-6 h-6 text-gray-500" />
          Repost
        </button>
        <button className="flex items-center gap-1">
          <BsFillSendFill className="w-6 h-6 text-gray-500" />
          send
        </button>
      </div>

      {/* input */}
      <div className="flex gap-2 mb-2 items-center">
        <div>
          <img src={user?.avatar} alt="avatar" className="h-8 w-8 rounded-full object-cover" />
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Type something here"
            className="w-full rounded-3xl border border-gray-500 py-2 pl-2 pr-10 "
          />
          <div className="flex items-center gap-2 absolute right-4 top-3">
            <BsEmojiSmile className="w-6 h-5" />
            <BsImageFill onClick={() => fileRef.current.click()} className="w-6 h-5 cursor-pointer" />
            <input type="file" hidden ref={fileRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
