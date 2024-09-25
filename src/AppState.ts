import type {SuccessState as DefaultSuccessState, ErrorState, LoadingState} from "./State";

export enum SuccessStateType {
    EDIT = 'EDIT',
    VIEW = 'VIEW'
}

type EditState = {
    type : SuccessStateType.EDIT
}

type ViewState = {
    type : SuccessStateType.VIEW
}

export type SuccessState<T> = DefaultSuccessState<T> & {
    state: EditState | ViewState;
    data: T;
}


type AppState = SuccessState<string> | ErrorState | LoadingState;

export default AppState