import React from 'react'
import styles from './Heading.module.scss';
import logo from '../../assets/logo.svg';

type Props = {
  score: number
}

const Heading: React.FC<Props> = ({ score }) => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="Rock, paper, scissors" />
      <div className={styles.scoreContainer}>
        Score
        <span className={styles.score}>{score}</span>
      </div>
    </div>
  )
}

export default Heading