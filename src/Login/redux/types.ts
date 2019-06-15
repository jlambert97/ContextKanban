export const EMAIL_CHANGE = 'EMAIL_CHANGE'
export const PASSWORD_CHANGE = 'PASSWORD_CHANGE'
export const AUTH_CHANGE = 'IS_AUTHENTICATED'

export interface EmailChangeAction {
    type: typeof EMAIL_CHANGE
    emailValue: string 
}
export interface PasswordChangeAction {
    type: typeof PASSWORD_CHANGE
    passwordValue: string 
}
export interface AuthChangeAction {
    type: typeof AUTH_CHANGE
    authValue: boolean
}

export interface LoginState {
    email: string
    password: string
    authenticated: boolean
}

export type LoginActionTypes = EmailChangeAction | PasswordChangeAction | AuthChangeAction
