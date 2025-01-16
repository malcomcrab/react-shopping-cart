import facebookIcon from "../assets/svg-images/facebook.svg";
import twitterIcon from "../assets/svg-images/twitter.svg";
import instaIcon from "../assets/svg-images/insta.svg";
import tiktokIcon from "../assets/svg-images/tiktok.svg";

function SocialLinksBar({ className }) {
  return (
    <div className={className}>
      <img height="30px" src={facebookIcon}></img>
      <img height="30px" src={twitterIcon}></img>
      <img height="30px" src={instaIcon}></img>
      <img height="30px" src={tiktokIcon}></img>
    </div>
  );
}

export default SocialLinksBar;
