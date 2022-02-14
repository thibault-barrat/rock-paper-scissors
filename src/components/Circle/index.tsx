import React from "react";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";
import styles from "./Circle.module.scss";

type Props = {
  type: "rock" | "paper" | "scissors";
  setItemChosenByUser?: React.Dispatch<React.SetStateAction<"rock" | "paper" | "scissors" | null>>;
  disabled?: boolean;
  className?: string;
};

const Circle: React.FC<Props> = ({ type, setItemChosenByUser, disabled, className }) => {
  const handleClick = () => {
    if (setItemChosenByUser) {
      setItemChosenByUser(type);
    }
  };
  return (
    <button className={`${styles.circle} ${styles[type]} ${className ? styles[className] : ""}`} type="button" aria-label="Paper" onClick={handleClick} disabled={disabled}>
      <div className={styles.icon}>
        {type === "rock" && <img src={rock} alt="Rock icon" />}
        {type === "paper" && <img src={paper} alt="Paper icon" />}
        {type === "scissors" && <img src={scissors} alt="Scissors icon" />}
      </div>
    </button>
  );
};

export default Circle;
