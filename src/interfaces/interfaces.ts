import {ChangeEvent} from "react";

export interface IHint{
    name: string
    fullName: string
    flag: string
}

export type onChangeHandlerType = (e:ChangeEvent<HTMLInputElement>) => void