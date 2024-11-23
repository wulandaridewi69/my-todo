"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'


import styles from "./styles/home.module.scss";
import Button from "./components/Button";

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

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    username && password ? setDisabled(false) : setDisabled(true);
    console.log(username);
  }, [username, password]);

  const handleSubmit = (e) => {
    console.log("clicked")
    setLoading(true);

    const body = {
      username,
      password,
    };

    localStorage.setItem("username", username);
    router.push('/task')


    // let requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // };

    // fetch("https://mnroom.capstone.my.id/login", requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {

    //     const { message, data, token } = result;
    //     if (message === "success") {
    //       localStorage.setItem("token", token);
    //       setToken(token);
    //       router.push("/");
    //     }
    //     alert(message);
    //   })
    //   .catch((err) => {
    //     alert(err.toString());
    //   })
    //   .finally(() => setLoading(false));
  };
  return (
    <div className={styles.home}>
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
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.submit}>
          <Button
            id="btnSubmit"
            label="Submit"
            loading={false}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
