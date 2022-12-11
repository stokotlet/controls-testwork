import { makeAutoObservable } from "mobx"

class FirstControlState {
    value = ''

    constructor() {
        makeAutoObservable(this)
    }

    setValue(payload:string) {
        this.value = payload
    }
}
export const state1 = new FirstControlState()
export const state2 = new FirstControlState()
export type firstControlStateType = InstanceType<typeof FirstControlState>
