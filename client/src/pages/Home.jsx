import Header from "../components/Header";
import Hero from "../components/home/Hero";
import PostJob from "../components/home/PostJob";
import BodyFooter from "../components/common/BodyFooter";
import DownloadApp from "../components/common/DownloadApp";

export default function Home() {
  return (
    <div className="bg-white relative">
      <Header />

      {/* Hero */}
      <Hero />

      {/* post a job */}
      <PostJob />

      <div className="mt-12 max-w-6xl mx-auto">
        {/* collaborative articles */}
        <div className="flex gap-10">
          <div className="flex-1 p-5">
            <h5 className="xl:text-5xl tracking-wide md:w-[80%] text-neutral-700">Explore collaborative articles</h5>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2">
              <button className="rounded-3xl border border-gray-400 py-3 px-4 hover:bg-gray-100">Marketing</button>
              <button className="rounded-3xl border border-gray-400 py-3 px-4 hover:bg-gray-100">Devops</button>
              <button className="rounded-3xl border border-gray-400 py-3 px-4 hover:bg-gray-100">IT Services</button>
              <button className="rounded-3xl border border-gray-400 py-3 px-4 hover:bg-gray-100">Consultancy</button>
              <button className="rounded-3xl border border-gray-400 py-3 px-4 hover:bg-gray-100">Human Resource</button>
              <button className="rounded-3xl border border-gray-400 py-3 px-4 hover:bg-gray-100">
                Business Administration
              </button>
              <button className="rounded-3xl border border-gray-400 py-2 px-4 hover:bg-gray-100">Management</button>
            </div>
          </div>
        </div>
        {/* connect with people */}
        <div className="flex gap-10 my-16">
          <div className="flex-1 items-start">
            <div className="flex flex-col justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/012/939/271/small/animated-presentation-isolated-scene-strategy-meeting-business-plan-looped-flat-2d-characters-4k-footage-with-alpha-channel-colorful-illustration-for-mobile-website-animation-video.jpg"
                alt="avatar"
                className="object-cover h-48"
              />
              <h5 className="text-3xl text-neutral-500 mt-2 w-[50%] self-start">Let us help you build your career</h5>
              <button className="mt-5 rounded-3xl border border-gray-500 py-3 px-4 self-start mx-auto bg-gray-100 hover:bg-gray-200">
                Find people you know
              </button>
            </div>
          </div>
          <div className="flex-1 items-start">
            <div className="flex flex-col justify-center">
              <img src="https://en.pimg.jp/072/655/086/1/72655086.jpg" alt="avatar" className="object-cover h-48" />
              <h5 className="text-3xl text-neutral-500 mt-2 w-[50%] self-start">Find A Perfect Work Environment</h5>
            </div>
          </div>
        </div>
      </div>

      <BodyFooter />
      <DownloadApp />
    </div>
  );
}
