import Header from "../components/Header";
import Hero from "../components/home/Hero";
import PostJob from "../components/home/PostJob";
import Footer from "../components/Footer";
import BodyFooter from "../components/common/BodyFooter";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <Hero />

      {/* post a job */}
      <PostJob />

      <BodyFooter />
    </div>
  );
}
