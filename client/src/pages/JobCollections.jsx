import { AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiCornerUpRight } from "react-icons/fi";
import { GiRadioactive } from "react-icons/gi";
import { PiArrowSquareUpRightBold } from "react-icons/pi";

const mock = [
  {
    company: "CleaverTech",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png",
    Location: "Kenya",
    jobTitle: "Nest.js Developer",
    JobType: "Remote"
  },
  {
    company: "World Health Organization",
    avatar:
      "https://yt3.googleusercontent.com/c1FW9KnEPqDdWqNw5RR9geZwt479yXfSaBXJkPgII93jOfJBaMDQTZ5nJ1fU9N4qJD2t08qlhw=s900-c-k-c0x00ffffff-no-rj",
    Location: "Kenya",
    jobTitle: "Laravel developer",
    JobType: "Remote"
  },
  {
    company: "The RedCross Movement",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTvLzcVIb93hBi8vQwin946z14nuQcUpVs9G4A6O7NSFWzvSkgbxqWgTd8Z6ZYVPLSp4&usqp=CAU",
    Location: "Kenya",
    jobTitle: "Procurement Officer II",
    JobType: "Remote"
  },
  {
    company: "Premier League",
    avatar:
      "https://yt3.googleusercontent.com/r2E5eqodxe1vI1fUg229yOL5YyiBFq23wSbzXCcVKMEINj3i_DkM3hKZ4Rt9CBG3N9qaSInc=s900-c-k-c0x00ffffff-no-rj",
    Location: "Kenya",
    jobTitle: "Full-stack developer",
    JobType: "Remote"
  },
  {
    company: "CleaverTech",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png",
    Location: "Kenya",
    jobTitle: "Nest.js Developer",
    JobType: "Remote"
  },
  {
    company: "CleaverTech",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/1200px-Flag_of_the_United_Nations.svg.png",
    Location: "Kenya",
    jobTitle: "Nest.js Developer",
    JobType: "Remote"
  }
];

export default function JobCollections({ jobs = mock }) {
  return (
    <div className="p-5">
      <div className="flex bg-white rounded-lg shadow-lg border border-gray-300">
        <div className="flex-1 items-start">
          <div className="px-3 py-2 w-full bg-[#0072b1] text-white top-0 sticky">
            <p className="text-sm">Jobs based on your profile</p>
            <p className="text-xs">14 results</p>
          </div>
          <div className="flex flex-col gap-2 h-screen overflow-y-auto">
            {jobs.map((job, index) => {
              return (
                <div key={index} className="p-2 flex justify-between">
                  <div className="flex gap-2">
                    <div>
                      <img src={job?.avatar} alt="avatar" className="object-cover h-16 w-16" />
                    </div>

                    <div className="flex-1">
                      <p className="text-blue-500 font-semibold hover:underline cursor-pointer">{job?.jobTitle}</p>
                      <p className="text-[14px]">{job?.company}</p>
                      <p className="text-[14px] text-gray-400">
                        {job?.Location} ({job?.JobType})
                      </p>
                      <div className="mt-2">
                        <span className="text-[14px] text-green-700 font-semibold flex items-center gap-2">
                          <div className="rounded-full h-5 w-5 border-2 border-green-600 flex items-center justify-center">
                            <GiRadioactive className="text-green-600 w-4 h-4" />
                          </div>
                          Actively recruiting
                        </span>
                        <p className="text-sm text-green-600 font-semibold">12 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <AiOutlineClose className="w-6 h-6 mr-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* right component */}
        <div className="flex-1 items-start h-screen overflow-y-auto">
          <div className="flex items-center justify-between gap-2 top-0 sticky bg-white px-2 pb-2">
            <p className="font-bold text-lg mt-2">Senior Nest.js Developer</p>
            <div className="flex items-center gap-2 text-gray-500">
              <BsThreeDots className="w-7 h-6" />
              <FiCornerUpRight className="w-7 h-6" />
            </div>
          </div>

          <div className="p-2">
            {/* buttons */}
            <div className="flex items-center gap-2 mt-5">
              <button className="flex items-center gap-1 border border-blue-700 rounded-3xl py-1 px-4 outline-none bg-indigo-700 text-white">
                Apply
                <PiArrowSquareUpRightBold />
              </button>
              <button className="border border-blue-700 rounded-3xl py-1 px-4 outline-none hover:border-2 hover:bg-blue-100">
                Save
              </button>
            </div>
            {/* description */}

            <div className="my-8">
              <p className="font-semibold">About the Job</p>
              <p className="text-sm mt-3">
                Experience Remote done Right. Over 20 years of remote experience, all 500+ staff are 100% remote and we still
                grow vibrant relationships, provide exceptional opportunities for career growth while working with stellar
                clients on ambitious projects
              </p>

              <p className="font-semibold mt-3">What we are working on</p>
              <p className="text-sm mt-3">
                Enterprise companies turn to us to help them launch innovative digital products that interact with hundreds of
                millions of customers, transactions and data points. The problems we solve every day are real and require
                creativity, grit and determination. We are building a culture that challenges norms while fostering
                experimentation and personal growth. In order to grasp the scale of problems we face, ideally, you have some
                exposure to Logistics, FinTech, Transportation, Insurance, Media or other complex multifactor industries
              </p>

              <p className="font-semibold mt-3">Responsibilities</p>
              <p className="text-sm mt-3">
                Enterprise companies turn to us to help them launch innovative digital products that interact with hundreds of
                millions of customers, transactions and data points. The problems we solve every day are real and require
                creativity, grit and determination. We are building a culture that challenges norms while fostering
                experimentation and personal growth. In order to grasp the scale of problems we face, ideally, you have some
                exposure to Logistics, FinTech, Transportation, Insurance, Media or other complex multifactor industries
              </p>

              <p className="font-semibold mt-3">Benefits of working with us</p>
              <p className="text-sm mt-3">
                Enterprise companies turn to us to help them launch innovative digital products that interact with hundreds of
                millions of customers, transactions and data points. The problems we solve every day are real and require
                creativity, grit and determination. We are building a culture that challenges norms while fostering
                experimentation and personal growth. In order to grasp the scale of problems we face, ideally, you have some
                exposure to Logistics, FinTech, Transportation, Insurance, Media or other complex multifactor industries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
