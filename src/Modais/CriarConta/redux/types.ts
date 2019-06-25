export const NAME_CHANGE = 'NAME_CHANGE'
export const BIRTH_CHANGE = 'BIRTH_CHANGE'
export const EMAIL_CHANGE = 'EMAIL_CHANGE'
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE'
export const CONFIRM_PASSWORD_CHANGE = 'CONFIRM_PASSWORD_CHANGE'


export interface NameChangeAction {
    type: typeof NAME_CHANGE
    nameValue: string 
}
export interface BirthChangeAction {
    type: typeof BIRTH_CHANGE
    birthValue: Date 
}
export interface EmailChangeAction {
    type: typeof EMAIL_CHANGE
    emailValue: string 
}
export interface PasswordChangeAction {
    type: typeof PASSWORD_CHANGE
    passwordValue: string 
}
export interface ConfirmPasswordChangeAction {
    type: typeof CONFIRM_PASSWORD_CHANGE
    confirmPasswordValue: string 
}


export interface CriarContaState {
    name: string
    birth: Date
    email: string
    password: string
    confirmPassword: string
}

export type CriarContaActionTypes = EmailChangeAction | PasswordChangeAction | NameChangeAction |  BirthChangeAction | ConfirmPasswordChangeAction
