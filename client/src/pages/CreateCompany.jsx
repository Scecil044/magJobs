import { BiArrowBack, BiUpload } from "react-icons/bi";
import TopNav from "../components/app/TopNav";
import { Link } from "react-router-dom";
import { AiFillQuestionCircle, AiOutlinePlus } from "react-icons/ai";
import { useRef } from "react";

export default function CreateCompany() {
  const fileRef = useRef();
  return (
    <>
      <TopNav />
      <div className="bg-white p-5 w-full">
        <div className="p-5 flex flex-col gap-3">
          <Link to="/company/setup/new" className="flex items-center gap-2 text-blue-600">
            <BiArrowBack />
            Back
          </Link>
          <p className="text-lg flex items-center gap-1 ml-2">
            <img src="/job.png" alt="avatar" className="object-cover h-8 w-8" />
            Let us get started with setting up details about your company
          </p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-6">
          <div className="flex-1 flex flex-col gap-5 self-start">
            <div className="bg-white p-5">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your organization name"
                    className="w-full border-2 border-black py-1 px-3"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="text-gray-400">
                    Linkedin.com/company
                  </label>
                  <input
                    type="text"
                    name="linkedIn"
                    id="linkedIn"
                    placeholder="Enter your unique LinkedIn link"
                    className="w-full border-2 border-black py-1 px-3"
                  />
                  <Link to="/" htmlFor="" className="text-blue-700 font-semibold mt-2">
                    Learn more about the page public URL
                  </Link>
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="text-gray-400">
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    placeholder="Begin with https:// or www."
                    className="w-full border-2 border-black py-1 px-3"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="text-gray-400">
                    Industry
                  </label>
                  <input
                    type="text"
                    name="industry"
                    id="industry"
                    placeholder="E.g information systems"
                    className="w-full border-2 border-black py-1 px-3"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="text-gray-400">
                    Organization size
                  </label>
                  <select name="organizationSize" id="organizationSize" className="w-full border-2 border-black py-1 px-3">
                    <option value="">Select</option>
                    <option value="50">0 - 50 Employees</option>
                    <option value="100">50 - 100 Employees</option>
                    <option value="150">100 - 150 Employees</option>
                    <option value="200">150 - 200 Employees</option>
                    <option value="300">200 - 300 Employees</option>
                    <option value="500">300 - 500 Employees</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="" className="text-gray-400">
                    Organization Type
                  </label>
                  <select name="organizationType" id="organizationType" className="w-full border-2 border-black py-1 px-3">
                    <option value="">Select</option>
                    <option value="Non Profit">Non Profit</option>
                    <option value="Government Agency">Government Agency</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Limited Liability">Limited Liability</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Public Company">Public Company</option>
                  </select>
                </div>

                <div className="mb-3">
                  <button
                    onClick={() => fileRef.current.click()}
                    className="flex items-center gap-1 justify-center w-full bg-gray-100 py-8 px-4"
                  >
                    <BiUpload className="w-8 h-8" />
                    <span className="text-sm">Upload Image</span>
                  </button>
                  <input type="file" className="hidden" ref={fileRef} />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="text-gray-400">
                    Tagline
                  </label>
                  <textarea
                    name="tagline"
                    cols="10"
                    id="tagline"
                    placeholder="E.g An software development company specializing in open source"
                    className="w-full border-2 border-black py-1 px-3"
                  />
                </div>
                <div className="mb-3">
                  <div className="flex gap-2">
                    <div>
                      <input type="checkbox" value="accepted_terms" className="h-5 w-5 text-green-700 bg-green-700" />
                    </div>
                    <p className="text-sm text-neutral-500">
                      I verify that I am an authorized representative of this organization and have the right to act on its
                      behalf in the creation and management of this page. The organization and I agree to the additional terms
                      for Pages.
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <button type="submit" className="py-3 px-4 rounded-3xl border border-gray-400 self-end">
              Create page
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-5 self-start">
            <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-400">
              <p className="text-sm font-bold flex items-center gap-2">
                Page Preview <AiFillQuestionCircle />
              </p>
            </div>
            <div>
              <div className="bg-white p-5 shadow-lg rounded-lg border border-gray-400">
                <img src="/job.png" alt="avatar" className="h-24 w-24" />
                <p className="font-semibold">Company Name</p>
                <p className="text-sm">Tagline</p>
                <p className="text-sm text-gray-500">Industry</p>
                <button className="flex items-center justify-center gap-1 my-2 rounded-3xl border outline-none text-white bg-indigo-800 py-1 px-3">
                  <AiOutlinePlus />
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
