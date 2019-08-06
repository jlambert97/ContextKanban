import { cards } from './apifake'
export interface IState {
    colunas: any
    isAuth: boolean
}

export type Actions = 
    | { type: 'MOVE_CARD', from:any, to: any}

export const initialState: IState = {
    colunas: cards,
    isAuth: false
}

const reducer = (state: IState = initialState, action: Actions): IState => {
    switch(action.type) {
        case 'MOVE_CARD': {
            return state
        }
        default: return state
    }
}

export default reducer