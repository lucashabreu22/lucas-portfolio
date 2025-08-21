import Header from "../../components/Header";
import Banner from "../../components/Banner";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Footer from "../../components/Footer";

import "./style.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="contentContainer">
        <Banner />
        <About />
        <Portfolio />
      </div>
      <Footer />
    </>
  );
};

export default Home;
