import { Spacer } from "@components/atoms";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styles from "@styles/Moduls.module.scss";
import FooterInfo from "./footer";
import Cookies from "js-cookie";

const ContentLogin = () => {
  const login = () => {
    Cookies.set("token", "asjdlaudhalsudyqwgqwdajkhsdgkyasgewauygdjhasd");
    window.location.reload();
  };

  return (
    <>
      <div className={styles.cardLogin}>
        <div className={styles.contentLogin}>
          <h3 className={styles.textMasuk}>Silahkan Masuk</h3>
        </div>
        <Spacer space={30} />
        <form action="" className={styles.contentF}>
          <div className={styles.contentForm}>
            <label htmlFor="" className={styles.labelForm}>
              Email
            </label>
            <div className={styles.contentInput}>
              <div className={styles.input1}>
                <FaUser className={styles.FaPengguna} />
                <input
                  type="text"
                  className={styles.inputEmail}
                  placeholder="Masukan Email"
                />
              </div>
            </div>
          </div>
        </form>

        <form action="" className={styles.contentF}>
          <div className={styles.contentForm}>
            <label htmlFor="" className={styles.labelForm}>
              Password
            </label>
            <div className={styles.contentInput}>
              <div className={styles.input1}>
                <FaLock className={styles.FaPengguna} />
                <input
                  type="password"
                  className={styles.inputEmail}
                  placeholder="Masukan Password"
                />
              </div>
            </div>
          </div>
          <div className={styles.ktSandi}>
            <a href="">Lupa kata sandi?</a>
          </div>
          <Spacer space={20} />
          <button onClick={login} className={styles.btnLogin}>
            Selanjutnya
          </button>
        </form>
        <FooterInfo />
      </div>
    </>
  );
};

export default ContentLogin;
