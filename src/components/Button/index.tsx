import React from 'react';
import styles from './Button.module.scss';

type Props = {
  showModale: React.Dispatch<React.SetStateAction<boolean>>
}

const Button: React.FC<Props> = ({ showModale }) => {
  return (
    <button
      className={styles.button}
      type='button'
      onClick={() => showModale(true)}
    >
      Rules
    </button>
  )
}

export default Button