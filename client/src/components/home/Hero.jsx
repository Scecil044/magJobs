import SignIn from "./SignIn";

export default function Hero() {
  return (
    <div className="hero flex max-w-6xl mx-auto gap-5 my-7">
      <div className="flex-1 p-3">
        <h1 className="text-6xl text-[#b24020] tracking-wide">Welcome to your professional community</h1>
        <SignIn />
      </div>
      <div className="hidden md:flex md:flex-1">
        <img src="" alt="avatar" className="w-full object-cover" />
      </div>
    </div>
  );
}
