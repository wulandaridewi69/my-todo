import styles from "../app/styles/home.module.scss";

let data = {
  result: [
    {
      id: 1,
      title: "Lead",
      value: 123450,
    },
    {
      id: 2,
      title: "Team",
      value: 67890,
    },
  ],
};

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.authorize}>
        <div className={styles.form}>
          <div className={styles.username}>
            <p className={styles.title}>Username</p>
            <input
              type="text"
              id="username"
              className={styles.inputusername}
              placeholder="John"
              required
            />
          </div>
          <div className={styles.password}>
            <p className={styles.title}>Password</p>
            <input
              type="password"
              id="password"
              className={styles.inputpass}
              placeholder="•••••••••"
              required
            />
          </div>
        </div>

        <div className={styles.submit}>
          <button type="submit">Submit</button>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default Home;
