import Header from "../components/headerFooter/Header";
import HomepageImageCarousel from "../components/HomepageImageCarousel";
import InfoBar from "../components/InfoBar";

function HomePage() {
  return (
    <div id="homepage-body">
      <Header />

      <HomepageImageCarousel/>

      <InfoBar />
    </div>
  );
}

export default HomePage;
