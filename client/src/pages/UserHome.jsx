import Footer from "../components/Footer";
import TopNav from "../components/app/TopNav";
import AddToFeed from "../components/app/containers/AddToFeed";
import Posts from "../components/app/containers/Posts";
import ProfileSection from "../components/app/containers/ProfileSection";
import RecentGroupsAndEvents from "../components/app/containers/RecentGroupsAndEvents";
import StartPostCard from "../components/app/containers/StartPostCard";
import { Link } from "react-router-dom";
export default function UserHome() {
  return (
    <div>
      <TopNav />

      {/* main */}
      <section className="flex gap-6 max-w-6xl mx-auto my-5">
        {/* left component */}
        <div className="flex flex-col gap-5 self-start">
          <div className="bg-white rounded-lg shadow-md w-[250px] relative">
            <ProfileSection />
          </div>
          <div className="bg-white rounded-lg shadow-md w-[250px]">
            <RecentGroupsAndEvents />
          </div>
        </div>
        {/* central component */}
        <div className="flex flex-1 flex-col gap-5 self-start">
          <div className="bg-white shadow-lg p-3 rounded-lg">
            <StartPostCard />
          </div>
          <div className="flex flex-col gap-3">
            <Posts />
          </div>
        </div>
        {/* right component */}
        <div className="flex flex-col gap-3 self-start">
          <div className="bg-white rounded-lg shadow-md p-5 w-[300px] flex flex-col gap-2">
            <AddToFeed />
          </div>

          {/* Advert section */}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
