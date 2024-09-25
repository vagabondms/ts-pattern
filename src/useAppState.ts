import React, {useEffect} from "react";
import AppState, {SuccessStateType} from "./AppState";
import {AsyncState} from "./State";
import {match, P} from "ts-pattern";


const initialState: AppState = {
    type: AsyncState.LOADING,
}


const editPattern: P.Pattern<AppState> = {
    type: AsyncState.SUCCESS,
    state: {
        type: SuccessStateType.VIEW
    }
}

const viewPattern : P.Pattern<AppState> = {
    type: AsyncState.SUCCESS,
    state: {
        type: SuccessStateType.EDIT
    }
}

const useAppState = () => {
    const [state, setState] = React.useState<AppState>(initialState);


    useEffect(() => {
        setTimeout(() => {
            setState((_) => {
                return {
                    type: AsyncState.SUCCESS,
                    data: "이것은 데이터",
                    state: {
                        type: SuccessStateType.VIEW

                    }
                }
            })
        }, 2000);

    }, []);


    const toggleView = () => {
        setState((prevState) => match(prevState)
                .with(editPattern, (successState) => ({...prevState, state: {type: SuccessStateType.VIEW}}))
                .with(viewPattern, (successState) => ({...prevState, state: {type: SuccessStateType.EDIT}}))
                .otherwise(() => prevState));
    }


    return {
        state,
        toggleView
    }
};

export default useAppState;