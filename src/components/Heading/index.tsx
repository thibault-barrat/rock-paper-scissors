import React, { useContext } from "react";
import { DifficultyContext } from "../../utils/context";
import styles from './Heading.module.scss';
import logo from '../../assets/logo.svg';
import hardLogo from '../../assets/logo-bonus.svg';

type Props = {
  score: number
}

const Heading: React.FC<Props> = ({ score }) => {
  const { isHard } = useContext(DifficultyContext);
  return (
    <div className={styles.container}>
      {isHard ? (
        <img src={hardLogo} className={styles.logo} alt="Rock, paper, scissors, lizard, spock" />
      ) : (
        <img src={logo} className={styles.logo} alt="Rock, paper, scissors" />
      )}
      
      <div className={styles.scoreContainer}>
        Score
        <span className={styles.score}>{score}</span>
      </div>
    </div>
  )
}

export default Heading