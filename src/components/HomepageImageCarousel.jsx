import { useEffect } from "react";
import homepage1 from "../assets/images/homepage1.jpg";
import homepage2 from "../assets/images/homepage2.jpg";
import homepage3 from "../assets/images/homepage3.jpg";

function HomepageImageCarousel() {
  const imageArray = [homepage1, homepage2, homepage3];

  useEffect(() => {
    const imageElement = document.querySelector(".carousel-image");
    let i = 0;
    const key = setInterval(() => {
      imageElement.src = imageArray[i];
      i > 1 ? (i = 0) : i++;
    }, 3000);
    return () => {
      clearInterval(key);
    };
  }, []);

  return (
    <div className="carousel-container">
      <img className="carousel-image" width="100%" src={homepage3} />
    </div>
  );
}

export default HomepageImageCarousel;
