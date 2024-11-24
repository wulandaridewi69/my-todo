"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import {TaskTeam, TaskLead} from "../components/Tasklist";
import styles from "../styles/task.module.scss";
import Arrows from "../assets/arrow.png";
import Creates from "../components/Create";
import Check from "../assets/check.png";
import Reject from "../assets/reject.png";
import Trash from "../assets/trash.png";



let dataProgress = {
  result: [
    {
      id: 1,
      title: "Lorem ipsum is placeholder text commonly used in the graphic",
    },
    {
      id: 2,
      title:
        "We are dedicated staff, scientists and members advancing effective, lasting conservation in more than 80 countries and territoriesLorem ipsum is placeholder text commonly used in the graphic",
    },
    {
      id: 3,
      title: "This padding is more, please fix it",
    },
    {
      id: 4,
      title:
        "Hide this please",
    },
    {
      id: 5,
      title: "Create landing page about MR",
    },

  ],
};

let dataDone = {
  result: [
    {
      id: 1,
      title: "8 days ago — 1. The external world in its entirety",
    },
    {
      id: 2,
      title:
        "First published in 1869, Nature is the world's leading multidisciplinary science journal.",
    }
  ],
};

let dataReject = {
  result: [
    {
      id: 1,
      title: "Create landing page about MR",
    },

  ],
};

const Task = () => {
  const [username, setUsername] = useState("");
  const [progress, setProgress] = useState(dataProgress);
  const [done, setDone] = useState(dataDone);
  // const [data, setData] = useState('');
  const [reject, setReject] = useState(dataReject);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
      setUsername(localStorage.getItem("username"));
  }, []);

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setProgress(prev => prev.map(item => (item.id === taskId ? newValue : item)));
  };

  const removeTask = id => {
    const removedArr = [...task].filter(task => task.id !== id);
    setReject(removedArr);
  };

  const completeTask = id => {
    let updatedTask = progress.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setDone(updatedTask);
  };



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
              <TaskLead/>
            </>
          ) : (
            <>
              <TaskTeam/>
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
                  {progress.result.map((item) => {
                    return (
                      <div key={item.id} id={item.id} className={styles.progresstask}>
                        <p className={styles.titleTask}>{item.title}</p>
                        <div className={styles.buttonicon}>
                          {username == "lead" ? (
                            <>
                              <Image className={styles.icon} src={Check} />
                              <Image className={styles.icon} src={Reject} />
                              <Image id="i" onclick="remove(this)" className={styles.icon} src={Trash} />
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
                  {done.result.map((item) => {
                    return (
                      <div key={item.id} id={item.id} className={styles.progresstask}>
                        <p className={styles.titleTask}>{item.title}</p>
                        <div className={styles.buttonicon}>
                          {username == "lead" ? (
                            <>
                              <Image id="i" onclick="remove(this)" className={styles.icon} src={Trash} />
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
                {reject.result.map((item) => {
                  return (
                    <div key={item.id} id={item.id} className={styles.progresstask}>
                      <p className={styles.titleTask}>{item.title}</p>
                      <div className={styles.buttonicon}>
                        {username == "lead" ? (
                          <>
                            <Image id="i" onclick="remove(this)" className={styles.icon} src={Trash} />
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
