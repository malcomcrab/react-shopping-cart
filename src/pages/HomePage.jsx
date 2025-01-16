import Header from "../components/headerFooter/Header";
import HomepageImageCarousel from "../components/HomepageImageCarousel";
import InfoBar from "../components/InfoBar";
import Footer from "../components/headerFooter/Footer";

function HomePage() {
  return (
    <div id="homepage-body">
      <Header />

      <HomepageImageCarousel />

      <InfoBar />

      <Footer />
    </div>
  );
}

export default HomePage;
