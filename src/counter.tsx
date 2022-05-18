import React from "react";
import styles from './counter.module.css'
import {ValueType} from "./App";
import {Button} from "./Button";


type CounterPropsType = {
    disabledButton:boolean
    disabled: boolean
    currentValue: ValueType
    startValue: ValueType
    maxValue: ValueType
    setterCurrentValue: (startValue: ValueType) => void
    resetValues: () => void
    error: boolean
}

export const Counter = (props: CounterPropsType) => {
    // console.log(props.error)

    const upCounter = () => {
        props.setterCurrentValue(props.currentValue + 1)
    }
    const resetCounter = () => {
        props.resetValues()
    }

    // const setValueToLocalStorage = () => {
    //     localStorage.setItem('CounterValue', JSON.stringify(counter))
    // }
    // const getValueLocalStorageValue = () => {
    //     let valueLocalStorage = localStorage.getItem("CounterValue")
    //     if (valueLocalStorage) {
    //         let newValueForCounter = JSON.parse(valueLocalStorage)
    //         setCounter(newValueForCounter)
    //     }
    // }
    // const clearLocalStorage = () => {
    //     localStorage.clear()
    //     setCounter(0)
    // }
    // const removeLocalStorageValue = () => {
    //     localStorage.removeItem('CounterValue')
    // }
    return (
        <div>
            <div className={styles.counterBack}>
                {props.error
                    ? <div className={styles.currentErrorMessage}>Incorrect value</div>
                    :props.disabled
                        ?<div className={styles.currentMessage}>'Enter values and press "set"'</div>
                        :<div className={props.currentValue < props.maxValue ? styles.counter : styles.red}>
                    <b>{props.currentValue}</b></div>}
                <div className={styles.counterManagement}>
                    <Button
                        disabled={props.disabledButton}
                        className={styles.up}
                        callBack={upCounter}
                        name={"ADD"}/>
                    <Button
                        disabled={props.disabled}
                        className={styles.reset}
                        callBack={resetCounter}
                        name={"RESET"}/>

                    {/*{counter===5&&<span className={styles.error}>Maximum is made. Try reset</span>}*/}
                    {/*{counter===0&&<span className={styles.error}>Try to press ADD</span>}*/}
                </div>


            </div>
            {/*<hr/>*/}
            {/*<Button name={"setToLocalStorage"} callBack={setValueToLocalStorage}/>*/}
            {/*<Button name={"getLocalStorageValue"} callBack={getValueLocalStorageValue}/>*/}
            {/*<Button name={"clearLocalStorage"} callBack={clearLocalStorage}/>*/}
            {/*<Button name={"removeLocalStorageValue"} callBack={removeLocalStorageValue}/>*/}
        </div>

    )

}