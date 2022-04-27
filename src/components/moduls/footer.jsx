import styles from "@styles/Moduls.module.scss";

const FooterInfo = () => {
  return (
    <footer className={styles.footerInfo}>
      <p> &copy; UMS RiloTech - {new Date().getFullYear()}</p>
    </footer>
  );
};

export default FooterInfo;
