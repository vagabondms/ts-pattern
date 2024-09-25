export enum AsyncState {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export type SuccessState<T> = {
    type: AsyncState.SUCCESS,
    data: T
}

export type LoadingState = {
    type: AsyncState.LOADING
}

export type ErrorState = {
    type: AsyncState.ERROR,
    error: Error
}
