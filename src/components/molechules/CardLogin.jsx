import { Spacer } from "@components/atoms";
import { ContentLogin } from "@components/moduls";
import FooterInfo from "@components/moduls/footer";
import styles from "@styles/Molechules.module.css";

const CardLogin = () => {
  return (
    <>
      <div className={styles.cardLogin}>
        <div className={styles.contentLogin}>
          <h3 className={styles.textMasuk}>Masuk</h3>
          <a href="#" className={styles.textDaftar}>
            Daftar
          </a>
        </div>
        <Spacer space={30} />
        <ContentLogin />
      </div>
      <FooterInfo />
    </>
  );
};

export default CardLogin;
