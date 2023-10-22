import AddToFeed from "../components/app/containers/AddToFeed";
import Posts from "../components/app/containers/Posts";
import ProfileSection from "../components/app/containers/ProfileSection";
import RecentGroupsAndEvents from "../components/app/containers/RecentGroupsAndEvents";
import StartPostCard from "../components/app/containers/StartPostCard";
import { Link } from "react-router-dom";
import AddText from "../components/common/AddText";

export default function UserHome() {
  return (
    <div>
      {/* main */}
      <section className="flex gap-6 max-w-6xl mx-auto my-5">
        {/* left component */}
        <div className="flex flex-col gap-5 self-start">
          <div className="bg-white rounded-lg shadow-md w-[250px] relative border border-gray-400">
            <ProfileSection />
          </div>
          <div className="bg-white rounded-lg shadow-md w-[250px] border border-gray-400">
            <RecentGroupsAndEvents />
          </div>
        </div>
        {/* central component */}
        <div className="flex flex-1 flex-col gap-5 self-start">
          <div className="bg-white shadow-lg p-3 rounded-lg border border-gray-400">
            <StartPostCard />
          </div>
          <div className="flex flex-col gap-3">
            <Posts />
          </div>
        </div>
        {/* right component */}
        <div className="flex flex-col gap-3 self-start">
          <div className="bg-white rounded-lg shadow-md p-5 w-[300px] flex flex-col gap-2 border border-gray-400">
            <AddToFeed />
          </div>

          {/* Advert section */}
          <AddText />
        </div>
      </section>
    </div>
  );
}
