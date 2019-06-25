import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    CONFIRM_PASSWORD_CHANGE,
    BIRTH_CHANGE,
    NAME_CHANGE,
    CriarContaActionTypes,
    CriarContaState
} from './types'

const initialState: CriarContaState = {
    email: '',
    password: '',
    confirmPassword: '',
    birth: new Date(),
    name: ''
}

export function criarContaReducer(
    state = initialState,
    action: CriarContaActionTypes
): CriarContaState {
    switch (action.type) {
        case EMAIL_CHANGE:{
            return {
                ...state,
                email: action.emailValue
            }
        }
        case PASSWORD_CHANGE:{
            return {
                ...state,
                password: action.passwordValue
            }
        }
        case CONFIRM_PASSWORD_CHANGE:{
            return {
                ...state,
                confirmPassword: action.confirmPasswordValue
            }
        }
        case NAME_CHANGE: {
            return {
                ...state,
                name: action.nameValue
            }
        }
        case BIRTH_CHANGE: {
            return {
                ...state,
                birth: action.birthValue
            }
        }
        default:
            return state
    }
}