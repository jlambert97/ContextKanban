import {
    EMAIL_CHANGE,
    PASSWORD_CHANGE,
    AUTH_CHANGE,
    LoginActionTypes,
    LoginState
} from './types'

const initialState: LoginState = {
    // loginState: {
    //     email: '',
    //     password: '',
    //     authenticated: false
    // }
    email: '',
    password: '',
    authenticated: false
}

export function loginReducer(
    state = initialState,
    action: LoginActionTypes
): LoginState {
    switch (action.type) {
        case EMAIL_CHANGE:{
            console.log("altereiiiii")
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
        case AUTH_CHANGE:{
            return {
                ...state,
                authenticated: action.authValue
            }
        }
        default:
            return state
    }
}