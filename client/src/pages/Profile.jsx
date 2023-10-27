import Header from "../components/Header";
import TopNav from "../components/app/TopNav";
import MainProfileCard from "../components/app/containers/profile/MainProfileCard";
import SuggestedContacts from "../components/app/containers/profile/SuggestedContacts";
import ViewedProfiles from "../components/app/containers/profile/ViewedProfiles";
import BodyFooter from "../components/common/BodyFooter";
import AppAdd from "../components/common/AppAdd";
import { useSelector } from "react-redux";
import AddText from "../components/common/AddText";

export default function Profile() {
  const { user } = useSelector(state => state.auth);
  return (
    <>
      {user ? <TopNav /> : <Header />}
      <div className="flex gap-10 max-w-6xl mx-auto p-5">
        {/* left component */}
        <div className="flex-1">
          {/* main card */}
          <MainProfileCard />
        </div>
        {/* right component */}
        <div className="w-[350px] flex flex-col gap-5">
          <ViewedProfiles />
          <SuggestedContacts />

          {/* app custom add */}
          <AddText />
        </div>
      </div>

      <BodyFooter />
    </>
  );
}
