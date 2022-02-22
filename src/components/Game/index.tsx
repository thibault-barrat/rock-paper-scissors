import React, { useState, useEffect } from "react";
import styles from "./Game.module.scss";
import triangle from "../../assets/bg-triangle.svg";
import Circle from "../Circle";
import Button from "../Button";

type Props = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
}

const Game: React.FC<Props> = ({ setScore, score }) => {
  const [itemChosenByUser, setItemChosenByUser] = useState<
    "rock" | "paper" | "scissors" | null
  >(null);
  const [itemChosenByComputer, setItemChosenByComputer] = useState<
    "rock" | "paper" | "scissors" | null
  >(null);
  const [winner, setWinner] = useState<"user" | "computer" | null>(null);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // 1. User chooses an item
  // 2. Computer chooses an item
  // 3. Compare the two items
  // 4. Display the result

  // when user chose an item
  // we move to step 2
  // and after 500ms we move to step 3
  useEffect(() => {
    // function to choose randomly an item
    // which is different from the item chosen by the user
    const chooseItem = () => {
      const items: ("rock" | "paper" | "scissors")[] = [
        "rock",
        "paper",
        "scissors",
      ];
      let randomItem: "rock" | "paper" | "scissors" | null = null;
      while (!randomItem || randomItem === itemChosenByUser) {
        randomItem = items[Math.floor(Math.random() * items.length)];
      }
      return randomItem;
    };

    if (itemChosenByUser) {
      setStep(2);
      setItemChosenByComputer(chooseItem());
      const timer = setTimeout(() => {
        setStep(3);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [itemChosenByUser]);

  // when we move to step 3
  // we move to step 4 after 500ms
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setStep(4);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // when we have itemChosenByComputer
  // and itemChosenByUser
  // we compare the two items
  // to know the winner
  useEffect(() => {
    if (itemChosenByComputer && itemChosenByUser) {
      const winner =
        itemChosenByUser === itemChosenByComputer
          ? null
          : itemChosenByUser === "rock" && itemChosenByComputer === "scissors"
          ? "user"
          : itemChosenByUser === "paper" && itemChosenByComputer === "rock"
          ? "user"
          : itemChosenByUser === "scissors" && itemChosenByComputer === "paper"
          ? "user"
          : "computer";
      setWinner(winner);
    }
  }, [itemChosenByComputer, itemChosenByUser]);

  // each time winner changes
  // we count the score
  useEffect(() => {
    if (winner && step === 4) {
      if (winner === "user") {
        setScore(score + 1);
      } else {
        setScore(score - 1);
      }
    }
  }, [winner, step]);

  const handlePlayAgain = () => {
    setItemChosenByUser(null);
    setItemChosenByComputer(null);
    setWinner(null);
    setStep(1);
  };

  return (
    <div className={`${styles.game} ${step === 1 ? "" : styles.afterStepOne}`}>
      {step === 1 && (
        <>
          <img className={styles.background} src={triangle} alt="" />
          <Circle type="paper" setItemChosenByUser={setItemChosenByUser} />
          <Circle type="scissors" setItemChosenByUser={setItemChosenByUser} />
          <Circle type="rock" setItemChosenByUser={setItemChosenByUser} />
        </>
      )}
      {step !== 1 && itemChosenByUser && (
        <>
          <Circle type={itemChosenByUser} disabled className="afterStepOne" winner={step === 4 && winner === "user"} />
          <p>You picked</p>
          {step === 2 && <div className={styles.computer}></div>}
          {step !== 2 && itemChosenByComputer && (
            <Circle
              type={itemChosenByComputer}
              disabled
              className="afterStepOne"
              winner={step === 4 && winner === "computer"}
            />
          )}
          <p>The house picked</p>
          <div className={styles.result}>
            {step === 4 && (
              <>
                <p>{`You ${winner === 'user' ? 'win' : 'lose'}`}</p>
                <Button onClick={handlePlayAgain} text="Play again" className="inverted"/>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
