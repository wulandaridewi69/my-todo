import Image from "next/image";

import { smallBox } from "../components/Box";
import styles from "../styles/task.module.scss";
import Arrows from "../assets/arrow.png";
import Creates from "../components/Create";
import Pen from "../assets/update.png";
import Check from "../assets/check.png";
import Reject from "../assets/reject.png";
import Trash from "../assets/trash.png";

const data = {
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
  return (
    <>
      <div>
        {props.username == "lead" ? (
          <>
            <Creates />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className={styles.section1}>
        <Image className={styles.arrows} src={Arrows} />
        {props.username == "lead" ? (
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
          {props.username == "lead" ? (
            <>
              <div className={styles.task}>
                <p>8 days ago — 1. The external world in its entirety.</p>
                <div className={styles.pen}>
                  <Image src={Pen} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.task}>
                <p>8 days ago — 1. The external world in its entirety.</p>
                <div className={styles.yes}>
                  <button>Yes</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* <div className={styles.contentPage}>
        {data.result.map((item) => {
          return (
            <smallBox
              key={item.id}
              id={item.id}
              title={item.title}
            />
          );
        })}
      </div> */}

      <div className={styles.taskprocess}>
        {/* ON PROGRESS */}

        <div className={styles.progress}>
          <p className={styles.title}>On Progress</p>

          <div className={styles.groupprogress}>
            <div className={styles.sectionprogress}>
              <div className={styles.section3}>
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
              </div>

              <div className={styles.section3}>
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
              </div>

              <div className={styles.section3}>
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
              </div>

              <div className={styles.section3}>
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
              </div>

              <div className={styles.section3}>
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
              </div>

              <div className={styles.section3}>
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
              </div>

              <div className={styles.section3}>
                <div className={styles.progresstask}>
                  <p>8 days ago — 1. The external world in its entirety.</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
