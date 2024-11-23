import Image from "next/image";

import styles from "../app/styles/home.module.scss";
import Arrows from "../app/assets/arrow.png";

const data = {
  result: [
    {
      id: 1,
      title: "Lead",
      value: 123450
    },
    {
      id: 2,
      title: "Team",
      value: 67890
    }
  ],
};

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.authorize}>
        <div className={styles.form}>
          <div className={styles.name}>
            <button>Name</button>
            <div className={styles.arrows}>
              <Image src={Arrows} />
            </div>
          </div>
          {/* <div
            className={`absolute center-0 z-10 mt-2 w-56 origin-top-center rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ${styles.option}`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Lead
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
               Team
              </a>
            </div>
          </div> */}
          <div className={styles.password}>
            <form>Password</form>
          </div>
        </div>
        <div className={styles.submit}>
          <button>Submit</button>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default Home;
