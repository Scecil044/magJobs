import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMicrosoft, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiBmcsoftware, SiMicrosoftoffice } from "react-icons/si";

export default function BodyFooter() {
  return (
    <>
      <div className="bg-[#0072b1] h-64 p-5 text-white text-xs">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 ml-32 gap-10">
            <div>
              <h1 className="text-xs">Important links</h1>
              <hr />
              <div>
                <ul className="flex flex-col gap-1 ml-3 mt-3">
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Home
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    About
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Billing
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Services
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    help and support
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Privacy policy
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-xs">Utility services</h1>
              <hr />
              <div>
                <ul className="flex flex-col mt-3 ml-3 gap-1">
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Human resource
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Talent management
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Corporate responsibility
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Organizational culture
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Employee management
                  </Link>
                  <Link to="/" className="hover:underline hover:font-semibold hover:text-red-400">
                    Retirement plans
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-xs">Partners</h1>
              <hr />
              <div>
                <ul className="flex flex-col gap-2 mt-3 ml-3">
                  <Link to="/" className="flex items-center gap-1 hover:text-red-400">
                    <BsApple className="h-5 w-5" />
                    Apple
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-red-400">
                    <SiMicrosoftoffice className="h-5 w-5" />
                    MsOffice
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-red-400">
                    <SiBmcsoftware className="h-5 w-5" />
                    ABNO softwares
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-red-400">
                    <FcGoogle className="h-5 w-5" />
                    google
                  </Link>
                  <Link to="/" className="flex items-center gap-1 hover:text-red-400">
                    <BsMicrosoft className="h-5 w-5" />
                    Microsoft
                  </Link>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-xs">Contact us</h1>
              <hr />
              <div>
                <ul className="flex flex-col">
                  <div className="flex items-center gap-5 ml-3 my-3">
                    <Link to="/">
                      <AiOutlineInstagram className="text-xl hover:text-red-400 hover:z-50" />
                    </Link>
                    <Link to="/">
                      <AiOutlineFacebook className="text-xl hover:text-red-400 hover:z-50" />
                    </Link>
                    <Link to="/">
                      <AiOutlineWhatsApp className="text-xl hover:text-red-400 hover:z-50" />
                    </Link>
                    <Link to="/">
                      <AiOutlineTwitter className="text-xl hover:text-red-400 hover:z-50" />
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
