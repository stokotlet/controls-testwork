import {FC} from 'react';
import {observer} from "mobx-react-lite";
import { v4 as uuid4 } from 'uuid'
import {autocompleteStateType} from "../../store/AutocompleteControlState";

interface IHintsListProps {
    state: autocompleteStateType
}

const HintsList:FC<IHintsListProps> = observer(({state}) => {
    const handler = (e: any) => {
        const elem = e.target
        if (elem.tagName === "LI"){
            state.setValue(elem.childNodes[0].data)
            state.setHints([])
            state.setStopSearch(true)
        }
    }
    return (
        <ul onClick={handler} className="hints-list">
            {state.hintsArray && state.hintsArray.map(hint => {
                return (
                    <li className="list-item" key={uuid4()}>{hint.name}
                        <ul>
                            <li>{hint.fullName}</li>
                            <li><img src={hint.flag} alt={hint.name}/></li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    );
});

export default HintsList;
