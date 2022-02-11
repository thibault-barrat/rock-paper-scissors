import React from "react";
import rules from "../../assets/image-rules.svg";
import styles from "./RulesModale.module.scss";
import close from "../../assets/icon-close.svg";
import ImageRules from "../ImageRules";

type Props = {
  closeModale: React.Dispatch<React.SetStateAction<boolean>>;
};

const RulesModale: React.FC<Props> = ({ closeModale }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Rules</h2>
      <ImageRules />
      {/* <img src={rules} className={styles.rules} alt="Rock beats scissors, scissors beats paper, paper beats rock" /> */}
      <button
        className={styles.close}
        type="button"
        onClick={() => closeModale(false)}
      >
        <img src={close} alt="Close" />
      </button>
    </div>
  );
};

export default RulesModale;
