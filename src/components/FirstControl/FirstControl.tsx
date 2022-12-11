import {ChangeEvent, FC, ReactElement} from 'react';
import {firstControlStateType} from "../../store/FirstControlState";
import {onChangeHandlerType} from "../../interfaces/interfaces";

interface IControlProps {
    children: (cb: onChangeHandlerType) => ReactElement
    state: firstControlStateType
}

const FirstControl:FC<IControlProps> = ({children, state}) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        state.setValue(e.target.value)
    }

    return children(onChangeHandler);
};

export default FirstControl;
