import styles from "@styles/Moduls.module.css";

const FooterInfo = () => {
  return (
    <footer className={styles.footerInfo}>
      <p> &copy; Copyright - {new Date().getFullYear()}</p>
    </footer>
  );
};

export default FooterInfo;
