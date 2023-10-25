export default function AdminPanel() {
  return (
    <div className="p-5">
      <div className="flex gap-8">
        <div className="items-start flex-1 flex gap-5">
          <div className="bg-white flex-1 p-5 rounded-lg shadow-lg border border-gray-400">one</div>
          <div className="bg-white flex-1 p-5 rounded-lg shadow-lg border border-gray-400">two</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-400 items-start w-[280px]">two</div>
        <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-400 items-start flex-1">three</div>
      </div>

      <div className="bg-white p-5 mt-10 rounded-lg shadow-lg border border-gray-400">
        <div className="grid grid-cols-4 gap-5">
          <div className="border-r-2 border-indigo-500">first</div>
          <div className="border-r-2 border-indigo-500">second</div>
          <div className="border-r-2 border-indigo-500">Third</div>
          <div className="">Fourth</div>
        </div>
      </div>
    </div>
  );
}
