import React from "react";
import styles from "./Toggler.module.scss";

type Props = {
  isHard: boolean;
  setIsHard: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggler: React.FC<Props> = ({ isHard, setIsHard }) => {
  return (
    <div className={styles.container}>
      <p className={styles.choice}>Easy</p>

      <input
        className={styles.checkbox}
        type="checkbox"
        id="toggle"
        name="toggle"
        onClick={() => setIsHard(!isHard)}
      />
      <label htmlFor="toggle" className={styles.switch}>
        <span className={styles.slider}></span>
      </label>

      <p className={styles.choice}>Hard</p>
    </div>
  );
};

export default Toggler;
