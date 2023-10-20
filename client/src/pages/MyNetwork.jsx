import { useState } from "react";
import AppSpinner from "../components/common/AppSpinner";
import Invitations from "../components/myNetwork/Invitations";
import ManageMyNetwork from "../components/myNetwork/ManageMyNetwork";
import TopNav from "../components/app/TopNav";
import BodyFooter from "../components/common/BodyFooter";
import MyNetworkSuggestions from "../components/myNetwork/MyNetworkSuggestions";

export default function MyNetwork() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <TopNav />
      <div className="max-w-6xl mx-auto">
        {/* left component */}
        <div className="flex p-5 gap-8">
          <ManageMyNetwork />
          {/* right component */}
          <div className="flex-1 self-start">
            <div className="flex flex-col gap-5">
              <Invitations />

              <MyNetworkSuggestions />
            </div>
          </div>
        </div>
      </div>
      <BodyFooter />
    </>
  );
}
