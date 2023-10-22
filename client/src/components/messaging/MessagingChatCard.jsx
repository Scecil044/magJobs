import { AiOutlineStar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

export default function MessagingChatCard() {
  return (
    <>
      <div>
        <div className="flex justify-between items-center gap-3">
          <div className="flex-1 truncate">
            <p className="text-sm font-semibold">Kelvin Brian</p>
            <p className="text-gray-400 text-xs">CEO at caltech International | Awared winner of the 2010 men</p>
          </div>
          <div className="flex items-center gap-2">
            <BsThreeDots className="w-6 h-6" />
            <AiOutlineStar className="w-6 h-6" />
          </div>
        </div>
        {/* profile */}
        <div className="flex flex-col gap-1">
          <div>
            <img
              src="https://randomuser.me/portraits/men/14.jpg"
              alt="avatar"
              className="rounded-full h-16 w-16 object-cover"
            />
          </div>
          <div className="text-sm">
            <p>CEO at Caltech international | Founder of the womens national rights organization</p>
          </div>
        </div>
        <hr className="text-gray-600 h-5" />
        {/* message section */}
        <div className=" max-h-[310px] overflow-y-auto">
          <div className="flex gap-3">
            <div>
              <img
                src="https://randomuser.me/portraits/women/44.jpg"
                alt="avatar"
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p>Spencer cecil</p>
              <div className="flex justify-between gap-1">
                <p className="text-sm tracking-tight hover:bg-gray-100 p-2">
                  Hello, I hope this message finds you well. I am writing to express my sincere interest in joining Solutech
                  Limited and the possibility of discussing how my skills could contribute to your team's success. As a seasoned
                  full-stack developer with proficiency in technologies such as Laravel, Vue, React, Node, and Tailwind, I am
                  excited about the opportunity to work with an innovative company like yours. The commitment to excellence and
                  the forward-thinking approach demonstrated by Solutech Limited greatly align with my own values and
                  aspirations.Hello, I hope this message finds you well. I am writing to express my sincere interest in joining
                  Solutech Limited and the possibility of discussing how my skills could contribute to your team's success. As a
                  seasoned full-stack developer with proficiency in technologies such as Laravel, Vue, React, Node, and
                  Tailwind, I am excited about the opportunity to work with an innovative company like yours. The commitment to
                  excellence and the forward-thinking approach demonstrated by Solutech Limited greatly align with my own values
                  and aspirations.Hello, I hope this message finds you well. I am writing to express my sincere interest in
                  joining Solutech Limited and the possibility of discussing how my skills could contribute to your team's
                  success. As a seasoned full-stack developer with proficiency in technologies such as Laravel, Vue, React,
                  Node, and Tailwind, I am excited about the opportunity to work with an innovative company like yours. The
                  commitment to excellence and the forward-thinking approach demonstrated by Solutech Limited greatly align with
                  my own values and aspirations.Hello, I hope this message finds you well. I am writing to express my sincere
                  interest in joining Solutech Limited and the possibility of discussing how my skills could contribute to your
                  team's success. As a seasoned full-stack developer with proficiency in technologies such as Laravel, Vue,
                  React, Node, and Tailwind, I am excited about the opportunity to work with an innovative company like yours.
                  The commitment to excellence and the forward-thinking approach demonstrated by Solutech Limited greatly align
                  with my own values and aspirations.
                </p>

                <div>
                  <BsThreeDots className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
