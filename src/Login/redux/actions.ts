import { EMAIL_CHANGE, PASSWORD_CHANGE, AUTH_CHANGE, LoginActionTypes} from './types'

export function emailChange(newValue: string): LoginActionTypes {
    console.log('pingou aqui na action')
    return {
        type: EMAIL_CHANGE,
        emailValue: newValue
    }
}
export function passwordChange(newValue: string): LoginActionTypes {
    return {
        type: PASSWORD_CHANGE,
        passwordValue: newValue
    }
}
export function authChange(newValue: boolean): LoginActionTypes {
    return {
        type: AUTH_CHANGE,
        authValue: newValue
    }
}
