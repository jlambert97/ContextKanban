import { NOME_CHANGE, SOBRENOME_CHANGE, IDADE_CHANGE, DashboardActionTypes} from './types'

export function nomeChange(newValue: string): DashboardActionTypes {
    return {
        type: NOME_CHANGE,
        nomeValue: newValue
    }
}
export function sobrenomeChange(newValue: string): DashboardActionTypes {
    return {
        type: SOBRENOME_CHANGE,
        sobrenomeValue: newValue
    }
}
export function idadeChange(newValue: string): DashboardActionTypes {
    return {
        type: IDADE_CHANGE,
        idadeValue: newValue
    }
}