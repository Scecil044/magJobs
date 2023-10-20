import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-[#0072b1] h-96 p-5 text-white text-xs">
        <div className="w-[80%] mx-auto mt-20 grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <h1>Home and services</h1>
            <hr className="h-8 my-2" />
            <div className="flex flex-col">
              <Link className="hover:font-semibold hover:underline transition-all duration-300" to="/app/home">
                Home
              </Link>
              <Link className="hover:font-semibold hover:underline transition-all duration-300" to="/app/home">
                Services
              </Link>
              <Link className="hover:font-semibold hover:underline transition-all duration-300" to="/app/home">
                about
              </Link>
              <Link className="hover:font-semibold hover:underline transition-all duration-300" to="/app/home">
                Profile
              </Link>
              <Link className="hover:font-semibold hover:underline transition-all duration-300" to="/app/home">
                Billing
              </Link>
              <Link className="hover:font-semibold hover:underline transition-all duration-300" to="/app/home">
                Subscriptions
              </Link>
              <Link className="hover:font-semibold hover:underline transition-all duration-300" to="/app/home">
                Talk_to_us
              </Link>
            </div>
          </div>

          <div>
            <h1>Important links</h1>
            <hr className="h-8 my-2" />
          </div>
          <div>
            <h1>Our partners</h1>
            <hr className="h-8 my-2" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-6 h-9 text-sm">
        <Link to="/">About</Link>
        <Link to="/">Accessibility</Link>
        <Link to="/">User agreements</Link>
        <Link to="/">Cookie policy</Link>
        <Link to="/">Brand policy</Link>
        <Link to="/">Copyright policy</Link>
        <Link to="/">Guest controls</Link>
        <Link to="/">Community guidelines</Link>
        <Link to="/">Language</Link>
      </div>
    </div>
  );
}
