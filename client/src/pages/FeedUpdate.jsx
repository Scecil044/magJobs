import { BsThreeDots } from "react-icons/bs";
import AppAdd from "../components/common/appAdd";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiPlus, BiWorld } from "react-icons/bi";
import Reactions from "../components/feeds/Reactions";

export default function FeedUpdate() {
  return (
    <>
      <div className="flex gap-8 items-center p-5">
        {/* left container */}
        <div className="w-[220px] shadow-lg p-3 self-start">left</div>
        {/* central container */}
        <div className="flex-1 bg-white shadow-lg border border-gray-400">
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center gap-1">
              <img
                src="https://randomuser.me/portraits/men/36.jpg"
                alt="avatar"
                className="w-6 h-6 rounded-full object-cover"
              />
              <div className="flex gap-2 text-xs">
                <span>Mbugua Njia</span>
                reposted this
              </div>
            </div>
            <div>
              <BsThreeDots className="w-7" />
            </div>
          </div>

          {/* main */}
          <div className="">
            <div className="flex gap-2 px-5">
              <div className="flex flex-1 gap-1">
                <img
                  src="https://randomuser.me/portraits/women/54.jpg"
                  alt="avatar"
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-sm">Sylvester Mercy</h4>
                  <p className="text-xs text-gray-400 truncate w-3/4">
                    Artificial intelligence | Machine learning | Data science | Cybersecurity
                  </p>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <BiWorld />
                    2d
                  </span>
                </div>
              </div>
              {/* button */}
              <div>
                <button className="flex items-center gap-1 py-1 px-2 hover:bg-blue-100">
                  <BiPlus />
                  Follow
                </button>
              </div>
            </div>

            {/* feed */}
            <div className="mt-2 p-5">
              <p className="text-sm">
                Last week was the Safaricom PLC Decode 2.0 Engineering Summit. The 2 day summit was full of impressive
                technology demos from hashtag#AITwins , hashtag#ML , hashtag#Customerexperience , hashtag#customerdelivery and
                many more. There were panels from Industry experts on topical items. I was pleased to be part of the panel on
                "Building an Antifragile Digital Ecosystem for Business Continuity" with a lot more organizations embracing
                technology business continuity is not just about resilience but more so adaptability. The expert panelists Ravi
                Baldev, CISSP Cherotich Kiereini Amritpal Singh Rajbans Julius Orayo and Robin Harwani gave some of the most
                insightful take aways on the topic. As part of the engineering summit, The panel also spoke of how development
                teams can build for hashtag#Antifragility with approaches such as Test Driven Deployment, Event driven
                Architecture, Documentation within code, Knowledge Management and Knowledge Transfer. Engineering teams were
                also encouraged to align with the purpose of the organization (which should be measurable), find the fun in
                failure while experimenting, andto embrace hashtag#AI coding tools and AI Tools in their work. A lot more
                insights were shared in the other panels too that touched on some aspects of becoming antifragile. To be
                hashtag#antifragile in the words of Bruce Lee is to "be like water".
              </p>
            </div>
            {/* images */}
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg" alt="" />
            </div>
            {/* end images */}

            {/* reactions */}
            <Reactions />
          </div>
        </div>
        {/* right container */}
        <div className="w-[300px] p-3 self-start" />
      </div>
    </>
  );
}
