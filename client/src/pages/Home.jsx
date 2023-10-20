import Header from "../components/Header";
import Hero from "../components/home/Hero";
import PostJob from "../components/home/PostJob";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <Hero />

      {/* post a job */}
      <PostJob />

      <Footer />
    </>
  );
}
