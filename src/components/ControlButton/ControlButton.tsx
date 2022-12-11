import {FC} from 'react';

interface IControlButtonProps {
    cb: () => void,
    text: string
}

const ControlButton:FC<IControlButtonProps> = ({cb, text}) => {
    return (
        <button onClick={cb}>{text}</button>
    );
};

export default ControlButton;
