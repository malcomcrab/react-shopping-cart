import SocialLinksBar from "./SocialLinksBar";
import styles from "../css-modules/InfoBar.module.css";

function InfoBar({ className }) {
  return (
    <div id={styles.infoBar}>
      <div className={styles.titleContainer}>
        <h5 className={styles.infobarTitle}>Clothing Brand Name</h5>
      </div>

      <div className={styles.addressDiv}>
        <h6 className={styles.subheading}>Contact By Post</h6>
        104 Toby Street
        <br />
        Spoketone
        <br />
        Kent
        <br />
        England
      </div>

      <div className={styles.contactDiv}>
        <h6 className={styles.subheading}>Contact Online</h6>
        <a className={styles.contactLink}>Email</a>
        <a className={styles.contactLink}>Phone</a>
        <a className={styles.contactLink}>Returns</a>
        <a className={styles.contactLink}>Sign Up</a>
      </div>

      <div className={styles.newsletterDiv}>
        <h6 className={styles.subheading}>Newsletter</h6>
        <p>
          Subscribe to our newsletter to get updates on new products,
          <br />
          exclusive content, and all things Clothing Brand.
        </p>
        <input placeholder="Email"></input>
        <button className={styles.newsletterButton}>Subscribe</button>
      </div>

      <SocialLinksBar className={styles.socialLinks} />
    </div>
  );
}

export default InfoBar;
