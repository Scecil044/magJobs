export default function NotFound() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col gap-3 w-2/3 text-center p-5">
          <p className="text-4xl">Page not found</p>
          <p className="text-xl">
            Uh oh, we can not seem to find the page you are looking for. Try going back to the previous page or see our{" "}
            <span className="text-indigo-500 font-semibold hover:underline hover:cursor-pointer">Help </span>
            Center for more information
          </p>
        </div>
      </div>
    </>
  );
}
