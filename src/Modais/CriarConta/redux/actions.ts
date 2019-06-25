import { EMAIL_CHANGE, CONFIRM_PASSWORD_CHANGE, PASSWORD_CHANGE, NAME_CHANGE, BIRTH_CHANGE, CriarContaActionTypes} from './types'

export function nameChange(newValue: string): CriarContaActionTypes {
    return {
        type: NAME_CHANGE,
        nameValue: newValue
    }
}
export function birthChange(newValue: Date): CriarContaActionTypes {
    return {
        type: BIRTH_CHANGE,
        birthValue: newValue
    }
}
export function emailChange(newValue: string): CriarContaActionTypes {
    return {
        type: EMAIL_CHANGE,
        emailValue: newValue
    }
}
export function passwordChange(newValue: string): CriarContaActionTypes {
    return {
        type: PASSWORD_CHANGE,
        passwordValue: newValue
    }
}
export function confirmPasswordChange(newValue: string): CriarContaActionTypes {
    return {
        type: CONFIRM_PASSWORD_CHANGE,
        confirmPasswordValue: newValue
    }
}

