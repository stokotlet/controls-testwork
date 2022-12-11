import {ChangeEvent, FC, ReactElement, useCallback, useEffect} from 'react';
import {autocompleteState, autocompleteStateType} from "../../store/AutocompleteControlState";
import {getCountryByName} from "../../api/apiService";
import useDebounce from "../../hooks/hooks";
import {observer} from "mobx-react-lite";
import {onChangeHandlerType} from "../../interfaces/interfaces";

interface IAutocompleteProps {
    children: (cb: onChangeHandlerType) => ReactElement
    state: autocompleteStateType
}

const AutocompleteControl:FC<IAutocompleteProps> = observer(({children, state}) => {
    const debouncedSearch = useDebounce(state.value, 300);

   useEffect(() => {
           if (debouncedSearch && !state.stopSearch) {
               getCountryByName(debouncedSearch).then(results => {
                   state.setHints(results.slice(0, state.maxHints))
               });
           }
       },
        [debouncedSearch, state.maxHints]
    );

    const onChangeHandler = useCallback((e:ChangeEvent<HTMLInputElement>):void => {
        if (state.stopSearch){
            state.setStopSearch(false)
        }
        autocompleteState.setValue(e.target.value)
    },[state])

    return children(onChangeHandler);
});

export default AutocompleteControl;
