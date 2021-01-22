import * as React from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button'

const App: React.FC = () => {
    const buttons = [
        {value: "AC", type: "light-grey", operation: ""},
        {value: "+/-", type: "light-grey", operation: ""},
        {value: "%", type: "light-grey", operation: ""},
        {value: "÷", type: "orange", operation: ""},
        {value: "mc", type: "dark-grey", operation: ""},
        {value: "mr", type: "dark-grey", operation: ""},
        {value: "m-", type: "dark-grey", operation: ""},
        {value: "m+", type: "orange", operation: ""},
        {value: "7", type: "dark-grey", operation: ""},
        {value: "8", type: "dark-grey", operation: ""},
        {value: "9", type: "dark-grey", operation: ""},
        {value: "x", type: "orange", operation: ""},
        {value: "4", type: "dark-grey", operation: ""},
        {value: "5", type: "dark-grey", operation: ""},
        {value: "6", type: "dark-grey", operation: ""},
        {value: "-", type: "orange", operation: ""},
        {value: "1", type: "dark-grey", operation: ""},
        {value: "2", type: "dark-grey", operation: ""},
        {value: "3", type: "dark-grey", operation: ""},
        {value: "+", type: "orange", operation: ""},
        {value: "0", type: "wideButton", operation: ""},
        {value: ",", type: "dark-grey", operation: ""},
        {value: "=", type: "orange", operation: ""},
    ];
  return (
    <div className={styles.App}>
        <div className={styles.header}>
            <div className={styles.clock}>17.57</div>
            <div className={styles.iconsBlock}></div>
        </div>
      <div className={styles.main}>
        <div className={styles.result}>0</div>
        <div className={styles.buttonsGroup}>
            {buttons.map((button) => {
                return (
                    <Button value={button.value} type={button.type} operation={button.operation}/>
                )
            })}
        </div>
      </div>
      <div className={styles.footer}>

      </div>
    </div>
  );
};

export default App;
