import { SHOW_CRIARCONTA, SHOW_LOGIN, HeaderActionTypes} from './types'

export function showModalCriarConta(newValue: boolean): HeaderActionTypes {
    return {
        type: SHOW_CRIARCONTA,
        modalCriarConta: newValue
    }
}
export function showModalLogin(newValue: boolean): HeaderActionTypes {
    return {
        type: SHOW_LOGIN,
        modalLogin: newValue
    }
}