import {makeAutoObservable} from "mobx";
import {IHint} from "../interfaces/interfaces";

class AutocompleteControlState {
    value = ''
    maxHints = 3
    hintsArray = [] as IHint[]
    stopSearch = false

    constructor() {
        makeAutoObservable(this);
    }

    setValue(payload:string) {
        this.value = payload
    }

    setMaxHints(payload:number){
        this.maxHints = payload
    }

    setHints(payload:IHint[]){
        this.hintsArray = payload
    }

    setStopSearch(payload: boolean){
        this.stopSearch = payload
    }

}

export const autocompleteState = new AutocompleteControlState()
export type autocompleteStateType = InstanceType<typeof AutocompleteControlState>