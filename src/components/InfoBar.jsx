import SocialLinksBar from "./SocialLinksBar";
import styles from "../css-modules/InfoBar.module.css"

function InfoBar({ className }) {
  return (
    <div id={styles.infoBar} >
      <div>
        <h5>Clothing Brand Name</h5>
      </div>

      <div className={styles.addressDiv}>
        104 Toby Street
        <br />
        Spoketone, Kent
        <br />
        England
      </div>

      <div className={styles.contactDiv}>
        <p>Email</p>
        <p>Phone</p>
        <p>Returns</p>
        <p>Sign Up</p>
      </div>

      <div className={styles.newsletterDiv}>
        <p>
          Subscribe to our newsletter to get updates on new products,
          <br />
          exclusive content, and all things Clothing Brand.
        </p>
      </div>

      <SocialLinksBar className={styles.socialLinks}/>
    </div>
  );
}

export default InfoBar;
