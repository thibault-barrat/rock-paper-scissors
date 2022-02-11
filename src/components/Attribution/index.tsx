import React from "react";
import styles from "./Attribution.module.scss";

const Attribution: React.FC = () => {
  return (
    <div className={styles.attribution}>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
      Coded by <a href="https://www.thibault-barrat.com">Thibault Barrat</a>.
    </div>
  );
};

export default Attribution;
