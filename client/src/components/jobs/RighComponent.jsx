import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function RighComponent() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="font-semibold">Job seeker guidance</p>
        <p className="text-sm text-gray-400 tracking-tight whitespace-nowrap">Suggested based on your searches</p>
      </div>
      <div className="text-sm flex items-center">
        <div className="flex flex-1 whitespace-nowrap">Help improve my resume</div>
        <div>
          <img src="/resume.jpg" alt="avatar" className="object-cover h-10 w-10" />
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600">
          Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you
          land your next opportunity
        </p>
        <Link className="flex gap-1 items-center mt-2">
          Show more <BsArrowRight className="text-black font-bold" />
        </Link>
      </div>
    </div>
  );
}
