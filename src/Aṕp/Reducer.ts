import { cards, cardlist } from './apifake'

export interface IState {
    colunas: any
    isAuth: boolean
}

export interface IColuna {
    title: string
    cards: ICard[]
}

export type ICard = {
    id: number
    title: string
    content: string
}

export type Actions = 
    | { type: 'MOVE_CARD', from: number, to: number, fromList: any}

export const initialState: IState = {
    colunas: cardlist,
    isAuth: false
}

const reducer = (state: IState = initialState, action: Actions): IState => {
    switch(action.type) {
        case 'MOVE_CARD': {
            console.log('Xaxa');
            return {
                ...state
            }
        }
        default: return state
    }
}

export default reducer