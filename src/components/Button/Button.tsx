import React from 'react';
import styles from './Button.module.css';
import {IButtonProps} from '../../interfaces'


const Button: React.FC<IButtonProps> = ({value, type, handler}) => {
  const classes = [styles.Button, styles[type]].join(" ");
  return (
      <button onClick={handler} className={classes}>{value}</button>
  );
};

export default Button;