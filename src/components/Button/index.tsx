import React, { MouseEventHandler } from 'react';
import styles from './Button.module.scss';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  className?: string;
}

const Button: React.FC<Props> = ({ onClick, text, className }) => {
  return (
    <button
      className={`${styles.button} ${className ? styles[className] : ''}`}
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button