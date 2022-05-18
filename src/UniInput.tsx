import styles from "./set.module.css";
import {ValueType} from "./App";
import {ChangeEvent} from "react";

type ButtonPropsType = {
    callBack: (newValue: string) => void
    value: ValueType
    error: boolean
    type: string
}

export const UniInput = (props: ButtonPropsType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        props.callBack(newValue)
    }
    return (
        <input onChange={onChangeInputHandler}
               className={props.error ? styles.inputError : styles.input}
               type={props.type}
               value={props.value}/>
    )

}