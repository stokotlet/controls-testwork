import {autocompleteState} from "../../store/AutocompleteControlState";
import {ChangeEvent} from "react";

const HintsSelector = () => {
    return (
        <select value={autocompleteState.maxHints}
                onChange={(e:ChangeEvent<HTMLSelectElement>)  => autocompleteState.setMaxHints(Number(e.target.value))}
        >
            <option value={3}>max 3 </option>
            <option value={10}>max 10</option>
        </select>
    );
};

export default HintsSelector;
