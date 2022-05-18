type ButtonPropsType = {
    error?:boolean
    name: string
    callBack: ()=> void
    className?: string
    disabled: boolean
    callBackErrorText?:(value:boolean)=>void


}

export const Button = (props:ButtonPropsType) => {
    if (props.callBackErrorText){
        if(props.error){
            props.callBackErrorText(true)
        } else
            props.callBackErrorText(false)
    }

    const onClickButtonHandler = () => {
        props.callBack()
    }
    return(
        <button
            className={props.className}
                disabled={props.disabled}
                onClick={onClickButtonHandler}>
            {props.name}
        </button>
    )

}