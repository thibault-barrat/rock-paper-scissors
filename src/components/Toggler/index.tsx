import React from "react";
import { useContext } from "react";
import { DifficultyContext } from "../../utils/context";
import styles from "./Toggler.module.scss";

const Toggler = () => {
  const { isHard, toggleDifficulty } = useContext(DifficultyContext);
  return (
    <div className={styles.container}>
      <p className={styles.choice}>Easy</p>

      <input
        className={styles.checkbox}
        type="checkbox"
        id="toggle"
        name="toggle"
        onChange={() => toggleDifficulty()}
        checked={isHard}
      />
      <label htmlFor="toggle" className={styles.switch}>
        <span className={styles.slider}></span>
      </label>

      <p className={styles.choice}>Hard</p>
    </div>
  );
};

export default Toggler;
