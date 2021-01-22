import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  type: string;
  value: string;
  operation: string;
  // onToggle: (id: number) => void
  // onRemove: (id: number) => void
}

const Button: React.FC<ButtonProps> = ({value, type}) => {
  const classes = [styles.Button, styles[type]].join(" ");
  return (
      <button className={classes}>{value}</button>
  );
};

export default Button;