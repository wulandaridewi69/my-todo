"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// import { smallBox } from "../components/Box";
import styles from "../styles/task.module.scss";
import Arrows from "../assets/arrow.png";
import Creates from "../components/Create";
import Pen from "../assets/update.png";
import Check from "../assets/check.png";
import Reject from "../assets/reject.png";
import Trash from "../assets/trash.png";

let data = {
  result: [
    {
      id: 1,
      title: "Lorem ipsum is placeholder text commonly used in the graphic",
    },
    {
      id: 2,
      title:
        "First published in 1869, Nature is the world's leading multidisciplinary science journal.",
    },
    {
      id: 3,
      title:
        "We are dedicated staff, scientists and members advancing effective, lasting conservation in more than 80 countries and territoriesLorem ipsum is placeholder text commonly used in the graphic",
    },
    {
      id: 4,
      title: "This padding is more, please fix it",
    },
    {
      id: 5,
      title: "8 days ago — 1. The external world in its entirety",
    },
  ],
};

const Task = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setUsername(localStorage.getItem("username"));
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        {username == "lead" ? (
          <>
            <Creates />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.section1}>
        <Image className={styles.arrows} src={Arrows} />
        {username == "lead" ? (
          <>
            <p>Lead</p>
          </>
        ) : (
          <>
            <p>Team</p>
          </>
        )}
      </div>

      <div className={styles.sectiongroup}>
        <div className={styles.section2}>
          {username == "lead" ? (
            <>
              <div className={styles.task}>
                <p className={styles.titleTask}>{item.title}</p>
                <div className={styles.pen}>
                  <Image src={Pen} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                {data.result.map((item) => {
                  return (
                    <div className={styles.task} key={item.id} id={item.id}>
                      <p className={styles.titleTask}>{item.title}</p>
                      <div className={styles.yes}>
                        <button>Yes</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.taskprocess}>
        {/* ON PROGRESS */}

        <div className={styles.progress}>
          <p className={styles.title}>On Progress</p>

          <div className={styles.groupprogress}>
            <div className={styles.sectionprogress}>
              <div className={styles.section3}>
                <div>
                  {data.result.map((item) => {
                    return (
                      <div className={styles.progresstask}>
                        <p className={styles.titleTask}>{item.title}</p>
                        <div className={styles.buttonicon}>
                          {props.username == "lead" ? (
                            <>
                              <Image className={styles.icon} src={Check} />
                              <Image className={styles.icon} src={Reject} />
                              <Image className={styles.icon} src={Trash} />
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DONE */}

        <div className={styles.done}>
          <p className={styles.title}>Done</p>

          <div className={styles.groupprogress}>
            <div className={styles.sectionprogress}>
              <div className={styles.section3}>
                <div>
                  {data.result.map((item) => {
                    return (
                      <div className={styles.progresstask}>
                        <p className={styles.titleTask}>{item.title}</p>
                        <div className={styles.buttonicon}>
                          {props.username == "lead" ? (
                            <>
                              <Image className={styles.icon} src={Trash} />
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REJECT */}

        <div className={styles.reject}>
          <p className={styles.title}>Reject</p>

          <div className={styles.groupprogress}>
            <div className={styles.sectionprogress}>
              <div className={styles.section3}>
                <div>
                {data.result.map((item) => {
                  return (
                    <div className={styles.progresstask}>
                      <p className={styles.titleTask}>{item.title}</p>
                      <div className={styles.buttonicon}>
                        {props.username == "lead" ? (
                          <>
                            <Image className={styles.icon} src={Trash} />
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
