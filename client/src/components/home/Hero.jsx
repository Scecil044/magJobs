import SignIn from "./SignIn";

export default function Hero() {
  return (
    <div className="hero flex max-w-6xl mx-auto gap-5 my-7">
      <div className="flex-1 p-3">
        <h1 className="text-6xl text-[#b24020] tracking-wide">Welcome to your professional community</h1>
        <SignIn />
      </div>
      <div className="hidden md:flex md:flex-1">
        <img
          src="https://as2.ftcdn.net/v2/jpg/02/35/65/41/1000_F_235654150_nRgITlEjg6fCuk03yjby0tllalhIQaq4.jpg"
          alt="avatar"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
