import styles from "./Footer.module.css";

function Footer() {
  return (
      <div className={styles.container}>
        <footer className={styles.footer}>
            <h2 className={styles.title}>MovieAl</h2>
            <p className={styles.author}>By @Aldi Budiansah</p>
        </footer>
      </div>
  );
}

export default Footer;
