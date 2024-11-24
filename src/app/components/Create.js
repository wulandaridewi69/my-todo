import { useState, useEffect } from "react";

import styles from "../styles/create.module.scss";

const Create = () => {
    const [input, setInput] = useState('');
  
    // const inputRef = useRef(null);
  
    useEffect(() => {
      // inputRef.current.focus();
    });
  
    const handleChange = e => {
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });
      setInput('');
    }
    
  return (
    <>
      <div className={styles.secCreate}>
        <div>
          <input placeholder="Write anything here"
          value={input}
          onChange={handleChange}
          name="text"
          className={styles.create}/>

        </div>
          <button className={styles.button} onClick={handleSubmit}>Add</button>
      </div>
    </>
  );
};

export default Create;
