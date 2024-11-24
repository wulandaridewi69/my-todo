import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "../styles/task.module.scss";
import Pen from "../assets/update.png";

let dataTask = {
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
      title: "Hide this please",
    },
    {
      id: 5,
      title: "Create landing page about MR",
    },
    {
      id: 6,
      title: "8 days ago — 1. The external world in its entirety",
    },
    {
      id: 7,
      title:
        "First published in 1869, Nature is the world's leading multidisciplinary science journal.",
    },
  ],
};

export const TaskLead = (props) => {
  const [data, setData] = useState(dataTask);
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    setEdit(e.target.value);
  };


  return (
    <>
      <div>
      {data.result.map((item) => {
        return (
          <div className={styles.task} key={item.id} id={item.id}>
              <input
              placeholder={item.title}
              className={styles.titleTask}
              onChange={handleChange}
              value={input}
            />
              <button>
                <Image
                  src={Pen}
                  onClick={handleSubmit}
                />
              </button>
            </div>
        );
      })}
      </div>
    </>
  );
};


export const TaskTeam = () => {
  const [data, setData] = useState(dataTask);

  const handleClick = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <div>
        {data.result.map((item) => {
          return (
            <div className={styles.task} key={item.id} id={item.id}>
              <p className={styles.titleTask}>{item.title}</p>
              <div className={styles.yes}>
                <button onClick={handleClick}>Yes</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TaskTeam;
