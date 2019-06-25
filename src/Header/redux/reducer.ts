import {
    SHOW_CRIARCONTA,
    SHOW_LOGIN,
    HeaderActionTypes,
    HeaderState
} from './types'

const initialState: HeaderState = {
    modalCriarConta: false,
    modalLogin: false
}

export function headerReducer(
    state = initialState,
    action: HeaderActionTypes
): HeaderState {
    switch (action.type) {
        case SHOW_CRIARCONTA:{
            return {
                ...state,
                modalCriarConta: action.modalCriarConta
            }
        }
        case SHOW_LOGIN:{
            return {
                ...state,
                modalLogin: action.modalLogin
            }
        }
        default:
            return state
    }
}