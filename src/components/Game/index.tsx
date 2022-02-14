import React, { useState, useEffect } from "react";
import styles from "./Game.module.scss";
import triangle from "../../assets/bg-triangle.svg";
import Circle from "../Circle";

const Game = () => {
  const [itemChosenByUser, setItemChosenByUser] = useState<
    "rock" | "paper" | "scissors" | null
  >(null);
  const [itemChosenByComputer, setItemChosenByComputer] = useState<
    "rock" | "paper" | "scissors" | null
  >(null);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // 1. User chooses an item
  // 2. Computer chooses an item
  // 3. Compare the two items
  // 4. Display the result

  // when user chose an item
  // we move to step 2
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
      }
      , 500);
      return () => clearTimeout(timer);
    }
  }, [itemChosenByUser]);

  return (
    <div className={`${styles.game} ${step === 1  ? "" : styles.afterStepOne }`}>
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
          <Circle type={itemChosenByUser} disabled className="afterStepOne" />
          <p>You picked</p>
          {step === 2 && <div className={styles.computer}></div>}
          {step !== 2 && itemChosenByComputer && <Circle type={itemChosenByComputer} disabled className="afterStepOne" />}
          <p>The house picked</p>
        </>
      )}
    </div>
  );
};

export default Game;
