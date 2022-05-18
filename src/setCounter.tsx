import React, {useState} from "react";
import styles from './set.module.css'
import {ValueType} from "./App";
import {Button} from "./Button";
import {UniInput} from "./UniInput";

export type SetCounterPropsType = {
    startValue: ValueType
    currentValue: ValueType
    maxValue: ValueType
    setterStartValue: (newStartValue: ValueType) => void
    setterMaxValue: (maxValue: ValueType) => void
    disabledCounter: () => void
    activateCounter: () => void
    observerErrors: (value: boolean) => void
}
export const SetCounter = (props: SetCounterPropsType) => {
    let [startValue, setStartValue] = useState(props.startValue)
    let [maxValue, setMaxValue] = useState(props.maxValue)
    let [errorS, setErrorS] = useState(false)
    let [errorM, setErrorM] = useState(false)
    let [disabled, setDisabled] = useState(false)


    const onChangeStartValue = (newValue: string) => {
        props.disabledCounter()
        let newStartValue = Number.parseInt(newValue)
        setDisabled(false)
        if (newStartValue < 0) {
            setErrorS(true)
            setStartValue(newStartValue)
        } else if (newStartValue > 0) {
            setErrorS(false)
            setStartValue(newStartValue)
        } else if (newStartValue === 0) {
            setErrorS(false)
            setStartValue(newStartValue)
        }

    }

    const onChangeMaxValue = (newValue: string) => {
        props.disabledCounter()
        let newMaxValue = Number.parseInt(newValue)
        setDisabled(false)
        if (newMaxValue < 0) {
            setErrorM(true)
            setMaxValue(newMaxValue)
        } else if (newMaxValue > 0) {
            setErrorM(false)
            setMaxValue(newMaxValue)
        } else if (newMaxValue === 0) {
            setErrorM(false)
            setMaxValue(newMaxValue)
        }

    }
    const observerError=()=>{
        props.observerErrors(errorS || errorM || maxValue <= startValue)
    }

    const setData = () => {
        if (maxValue > startValue) {
            props.activateCounter()
            props.setterStartValue(startValue)
            props.setterMaxValue(maxValue)
            setDisabled(true)
            console.log("false")
        } else{
            setDisabled(true)
            console.log("true")
        }



    }


    return (
        <div>
            <div className={styles.setMain}>
                <div className={styles.setParameters}>
                    <div><span> max value</span>
                        <UniInput
                            callBack={onChangeMaxValue}
                            error={errorM}
                            type={"number"}
                            value={maxValue}
                        />
                    </div>
                    <div><span> start value</span>
                        <UniInput
                            callBack={onChangeStartValue}
                            error={errorS}
                            type={'number'}
                            value={startValue}

                        /></div>


                </div>
                <div className={styles.setButton}>
                    <Button
                        error={errorS || errorM || maxValue <= startValue}
                        disabled={errorS || errorM || maxValue <= startValue || disabled}
                        className={styles.button}
                        callBack={setData}
                        name={"SET"}
                        callBackErrorText={props.observerErrors}
                    />
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