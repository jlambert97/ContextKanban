import {
    NOME_CHANGE,
    SOBRENOME_CHANGE,
    IDADE_CHANGE,
    DashboardActionTypes,
    DashboardState
} from './types'

const initialState: DashboardState = {
    nome: '',
    sobrenome: '',
    idade: ''
}

export function loginReducer(
    state = initialState,
    action: DashboardActionTypes
): DashboardState {
    switch (action.type) {
        case NOME_CHANGE:{
            return {
                ...state,
                nome: action.nomeValue
            }
        }
        case SOBRENOME_CHANGE:{
            return {
                ...state,
                sobrenome: action.sobrenomeValue
            }
        }
        case IDADE_CHANGE:{
            return {
                ...state,
                idade: action.idadeValue
            }
        }
        default:
            return state
    }
}