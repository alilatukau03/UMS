import styles from "@styles/Moduls.module.css";
const ContentLogin = () => {
  return (
    <>
      <form action="" className={styles.contentF}>
        <div className={styles.contentForm}>
          <label htmlFor="" className={styles.labelForm}>
            Nomor HP atau Email
          </label>
          <div className={styles.contentInput}>
            <div className={styles.input1}>
              <input type="text" className={styles.inputEmail} />
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
              <input type="text" className={styles.inputEmail} />
            </div>
          </div>
        </div>
        <div className={styles.ktSandi}>
          <a href="">Lupa kata sandi?</a>
        </div>
        <button className={styles.btnLogin}>Selanjutnya</button>
      </form>
    </>
  );
};

export default ContentLogin;
