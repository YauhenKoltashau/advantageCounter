import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./counter";
import {SetCounter} from "./setCounter";
import styles from './App.module.css'

export type ValueType = number


function App() {
    let [startValue, setStartValue] = useState(Number(localStorage.getItem("CounterStartValue")))
    console.log('start', startValue)
    let [currentValue, setCurrentValue] = useState(0)
    let [maxValue, setMaxValue] = useState(Number(localStorage.getItem("CounterMaxValue")))
    let [disabled, setDisabled] = useState(false)
    let [disabledButton, setDisabledButton] = useState(false)
    let [error, setError] = useState(false)

    useEffect(()=>{
        setCurrentValue(startValue)
    },[startValue])
    const disabledCounter = () => {
        setDisabled(true)
        setDisabledButton(true)
    }
    const activateCounter = () => {
        setDisabled(false)
        setDisabledButton(false)
    }

    const setterCurrentValue = (newCurrentValue: ValueType) => {
        if (newCurrentValue <= maxValue) {
            setCurrentValue(newCurrentValue)
            if (newCurrentValue == maxValue) {
                setDisabledButton(true)
            }
        }
    }

    const setterMaxValue = (newMaxValue: ValueType) => {
        localStorage.setItem('CounterMaxValue', JSON.stringify(newMaxValue))
        setMaxValue(newMaxValue)
    }
    const setterStartValue = (newStartValue: ValueType) => {
        localStorage.setItem('CounterStartValue', JSON.stringify(newStartValue))

        setStartValue(newStartValue)

    }
    const resetValues = () => {
        setCurrentValue(startValue)
        setDisabledButton(false)
        // get start value from localStorage
        //setCurrentValue(set it here)
        //setDisabled(false)
    }
    const observerErrors = (error: boolean) => {
        setError(error)
        // console.log(error)
    }

    console.log('render')
    console.log('starr value before render', startValue)
    return (
        <div className={styles.mainWrapper}>
            <SetCounter
                startValue={startValue}
                currentValue={currentValue}
                maxValue={maxValue}
                setterStartValue={setterStartValue}
                setterMaxValue={setterMaxValue}
                disabledCounter={disabledCounter}
                activateCounter={activateCounter}
                observerErrors={observerErrors}

            />
            <Counter
                disabledButton={disabledButton}
                disabled={disabled}
                currentValue={currentValue}
                startValue={startValue}
                maxValue={maxValue}
                setterCurrentValue={setterCurrentValue}
                resetValues={resetValues}
                error={error}
                // disabled={!disabled}
            />
        </div>
    );
}

export default App;
