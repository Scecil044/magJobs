import Header from "../components/Header";
import MainProfileCard from "../components/app/containers/profile/MainProfileCard";

export default function Profile() {
  return (
    <>
      <Header />
      <div className="flex gap-10 max-w-6xl mx-auto p-5">
        {/* left component */}
        <div className="flex-1">
          {/* main card */}
          <MainProfileCard />
        </div>
        {/* right component */}
        <div className="w-[350px]">right side</div>
      </div>
    </>
  );
}
