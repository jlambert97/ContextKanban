export const SHOW_CRIARCONTA = 'SHOW_CRIARCONTA'
export const SHOW_LOGIN = 'SHOW_LOGIN'

export interface ShowCriarContaAction {
    type: typeof SHOW_CRIARCONTA
    modalCriarConta: boolean 
}
export interface ShowLoginAction {
    type: typeof SHOW_LOGIN
    modalLogin: boolean 
}

export interface HeaderState {
    modalCriarConta: boolean
    modalLogin: boolean
}

export type HeaderActionTypes = ShowCriarContaAction | ShowLoginAction
