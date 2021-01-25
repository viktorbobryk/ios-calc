import * as React from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button'
import {useState,} from "react";
import {toRound, toCorrectString, toFloatNumber} from "./utility/functions";

const App: React.FC = () => {
    
    const [displayValue, setDisplayValue] = useState<string>("0");
    const [cachedValue, setCachedValue] = useState<[number, string]>([0, ""]);
    const [commaLimit, setCommaLimit] = useState<number>(0);
    const [memoryValue, setMemoryValue] = useState<number>(0);
    const [lastEntered, setLastEntered] = useState<number>(0);
    const [equalPressed, setEqualPressed] = useState<boolean>(false);

    const numbersHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      if(event.currentTarget.innerText === ",") {
          setCommaLimit(commaLimit + 1)
      }
      if (commaLimit > 0 && event.currentTarget.innerText === ","){
          return
      }
      let res = displayValue !== "0" ? displayValue + event.currentTarget.innerText : event.currentTarget.innerText;
      setDisplayValue(res);
      setLastEntered(toFloatNumber(res));
    };

    const clearDisplayHandler = () => {
      setDisplayValue("0");
      setCachedValue([0, ""]);
      setCommaLimit(0);
      setLastEntered(0);
      setEqualPressed(false);
    };

    const oppositeHandler = () => {
      setDisplayValue(toCorrectString(toRound(toFloatNumber(displayValue) * -1)));
    };

    const percentHandler = () => {
        setDisplayValue(toCorrectString(toRound(toFloatNumber(displayValue) / 100)));
    };

    const cacheHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        let res = toFloatNumber(displayValue);
        let operator = event.currentTarget.innerText;
        let num = 1;

        if(event.currentTarget.innerText === "+") {
            num = equalPressed ? cachedValue[0] : cachedValue[0] + toRound(res);
        }
        else if(event.currentTarget.innerText === "-") {
            if(cachedValue[0] > 0){
                num = equalPressed ? cachedValue[0] : cachedValue[0] - toRound(res);
            }
            else{
                num = equalPressed ? cachedValue[0] : toRound(res);
            }
        }
        else if(event.currentTarget.innerText === "÷") {
            if(cachedValue[0] > 0){
                num = equalPressed ? cachedValue[0] : cachedValue[0] / toRound(res);
            }
            else{
                num = equalPressed ? cachedValue[0] : toRound(res);
            }
        }
        else if(event.currentTarget.innerText === "x") {
            if(cachedValue[0] > 0){
                num = equalPressed ? cachedValue[0] : cachedValue[0] * toRound(res);
            }
            else{
                num = equalPressed ? cachedValue[0] : toRound(res);
            }
        }
            setCachedValue([num, operator]);
            setDisplayValue("0");
            setCommaLimit(0);
            setEqualPressed(false);
    };

    const resultHandler = () => {
        let res = 0;
        if(cachedValue[1] === "+"){
            res = lastEntered ? (cachedValue[0] + lastEntered) : (cachedValue[0] + toFloatNumber(displayValue));
        }
        else if(cachedValue[1] === "-"){
            res = !lastEntered ? (cachedValue[0] - toFloatNumber(displayValue)) : (cachedValue[0] - lastEntered);
        }
        else if(cachedValue[1] === "÷"){
            res = !lastEntered ? (cachedValue[0] / toFloatNumber(displayValue)) : (cachedValue[0] / lastEntered);
        }
        else if(cachedValue[1] === "x"){
            res = !lastEntered ? (cachedValue[0] * toFloatNumber(displayValue)) : (cachedValue[0] * lastEntered);
        }

        setDisplayValue(toCorrectString(toRound(res)));
        setCachedValue([res, cachedValue[1]]);
        setCommaLimit(0);
        setEqualPressed(true);
        if(displayValue === "0") {
            setEqualPressed(false);
        }

    };

    const memoryHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(event.currentTarget.innerText === "m+"){
            setMemoryValue(toFloatNumber(displayValue))
        }
        else if(event.currentTarget.innerText === "mc"){
            setMemoryValue(0)
        }
        else if(event.currentTarget.innerText === "m-"){
            setMemoryValue(toFloatNumber(displayValue ) * -1)
        }
        else if(event.currentTarget.innerText === "mr"){
            setDisplayValue(toCorrectString(memoryValue));
            setLastEntered(0);
        }
    };

    const buttons = [
        {value: "AC", type: "light-grey", handler: clearDisplayHandler},
        {value: "+/-", type: "light-grey", handler: oppositeHandler},
        {value: "%", type: "light-grey", handler: percentHandler},
        {value: "÷", type: "orange", handler: cacheHandler},
        {value: "mc", type: "dark-grey", handler: memoryHandler},
        {value: "mr", type: "dark-grey", handler: memoryHandler},
        {value: "m-", type: "dark-grey", handler: memoryHandler},
        {value: "m+", type: "orange", handler: memoryHandler},
        {value: "7", type: "dark-grey", handler: numbersHandler},
        {value: "8", type: "dark-grey", handler: numbersHandler},
        {value: "9", type: "dark-grey", handler: numbersHandler},
        {value: "x", type: "orange", handler: cacheHandler},
        {value: "4", type: "dark-grey", handler: numbersHandler},
        {value: "5", type: "dark-grey", handler: numbersHandler},
        {value: "6", type: "dark-grey", handler: numbersHandler},
        {value: "-", type: "orange", handler: cacheHandler},
        {value: "1", type: "dark-grey", handler: numbersHandler},
        {value: "2", type: "dark-grey", handler: numbersHandler},
        {value: "3", type: "dark-grey", handler: numbersHandler},
        {value: "+", type: "orange", handler: cacheHandler},
        {value: "0", type: "wideButton", handler:  numbersHandler},
        {value: ",", type: "dark-grey", handler: numbersHandler},
        {value: "=", type: "orange", handler: resultHandler},
    ];
  return (
    <div className={styles.App}>
        <div className={styles.header}>
            <div className={styles.clock}>17.57</div>
            <div className={styles.iconsBlock}></div>
        </div>
      <div className={styles.main}>
        <div className={styles.result}><span className={ memoryValue ? styles.memory : styles.hide}>M</span>{displayValue}</div>
        <div className={styles.buttonsGroup}>
            {buttons.map((button) => {
                return (
                    <Button key = {button.value} value={button.value} type={button.type} handler={(event) => button.handler(event)}/>
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
