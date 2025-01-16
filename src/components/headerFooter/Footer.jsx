import styles from "../../css-modules/Footer.module.css"

function Footer(){

    return(
        <div role="footerContainer" className={styles.footer}>
             <p>Company Name, Year, Copyright</p>

        </div>
    )
}

export default Footer;