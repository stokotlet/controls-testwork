import {observer} from "mobx-react-lite";
import {FC, memo} from "react";
import {firstControlStateType} from "../../store/FirstControlState";
import {onChangeHandlerType} from "../../interfaces/interfaces";

interface IInputProps {
    onChangeHandler: onChangeHandlerType
    state: firstControlStateType
}

const Input:FC<IInputProps> = memo(observer(({onChangeHandler, state}) => {
    return <input type="text" onChange={onChangeHandler} value={state.value}/>
}));

export default Input;
