import styles from "../styles/create.module.scss";

const Create = () => {
  return (
    <>
      <div className={styles.secCreate}>
        <div className={styles.create}>
          <div>
            <p className={styles.title}>Write anything here</p>
          </div>
        </div>
        <div className={styles.button}>
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default Create;
