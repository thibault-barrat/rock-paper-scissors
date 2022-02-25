import React, { useContext } from "react";
import { DifficultyContext } from "../../utils/context";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import scissors from "../../assets/icon-scissors.svg";
import lizard from "../../assets/icon-lizard.svg";
import spock from "../../assets/icon-spock.svg";
import styles from "./Circle.module.scss";

type Props = {
  type: "rock" | "paper" | "scissors" | "lizard" | "spock";
  setItemChosenByUser?: React.Dispatch<
    React.SetStateAction<"rock" | "paper" | "scissors" | "lizard" | "spock" | null>
  >;
  disabled?: boolean;
  className?: string;
  winner?: boolean | null;
};

const Circle: React.FC<Props> = ({
  type,
  setItemChosenByUser,
  disabled,
  className,
  winner,
}) => {
  const { isHard } = useContext(DifficultyContext);
  const handleClick = () => {
    if (setItemChosenByUser) {
      setItemChosenByUser(type);
    }
  };
  return (
    <button
      className={`${styles.circle} ${styles[type]} ${
        className ? styles[className] : ""
      } ${isHard ? styles.hard : ""}`}
      type="button"
      aria-label="Paper"
      onClick={handleClick}
      disabled={disabled}
    >
      {winner && <div className={styles.winner}></div>}
      <div className={styles.icon}>
        {type === "rock" && <img src={rock} alt="Rock icon" />}
        {type === "paper" && <img src={paper} alt="Paper icon" />}
        {type === "scissors" && <img src={scissors} alt="Scissors icon" />}
        {type === "lizard" && <img src={lizard} alt="Lizard icon" />}
        {type === "spock" && <img src={spock} alt="Spock icon" />}
      </div>
    </button>
  );
};

export default Circle;
