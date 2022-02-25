import React from "react";
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
