export const NOME_CHANGE = 'NOME_CHANGE'
export const SOBRENOME_CHANGE = 'SOBRENOME_CHANGE'
export const IDADE_CHANGE = 'IDADE_CHANGE'

export interface NomeChangeAction {
    type: typeof NOME_CHANGE
    nomeValue: string 
}
export interface SobrenomeChangeAction {
    type: typeof SOBRENOME_CHANGE
    sobrenomeValue: string 
}
export interface IdadeChangeAction {
    type: typeof IDADE_CHANGE
    idadeValue: string
}

export interface DashboardState {
    nome: string
    sobrenome: string
    idade: string
}

export type DashboardActionTypes = NomeChangeAction | SobrenomeChangeAction | IdadeChangeAction
