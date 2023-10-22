export default function SetUpCompany() {
  return (
    <div className="p-5 bg-white">
      <div className="mb-8 mt-5 flex flex-col gap-4">
        <p className="text-center text-3xl font-serif">Create a MagJobs Page</p>
        <p className="text-center text-sm font-serif">
          Connect with clients, employees, and the LinkedIn community. To get started, choose a page type.
        </p>
      </div>
      <div className="flex items-center justify-center gap-12">
        <div className="bg-white p-3 py-1 shadow-lg border border-gray-400 hover:border-2 transition-all duration-200">
          <div>
            <img src="/job.png" alt="avatar" className="object-cover h-24 w-24 mx-auto" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold">Company</p>
            <p className="text-sm w-[70%] text-center">Small,medium and large business</p>
          </div>
        </div>

        <div className="bg-white p-3 py-1 shadow-lg border border-gray-400 hover:border-2 transition-all duration-200">
          <div className="flex items-center justify-center">
            <img src="/job.png" alt="avatar" className="object-cover h-24 w-24 mx-auto" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold">Showcase page</p>
            <p className="text-sm w-[70%] text-center">Sub-pages associated with an existing page</p>
          </div>
        </div>

        <div className="bg-white p-3 py-1 shadow-lg border border-gray-400 hover:border-2 transition-all duration-200">
          <div>
            <img src="/job.png" alt="avatar" className="object-cover h-24 w-24 mx-auto" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold">Educational institution</p>
            <p className="text-sm w-[70%] text-center">Schools and Universities</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <img src="/1.jpg" alt="avatar" className="flex w-3/5 h-1/5 mx-auto animate-pulse" />
      </div>
    </div>
  );
}
