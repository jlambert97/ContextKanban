import { cards, cardlist } from './apifake'
import produce from 'immer'

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
            console.log(action.from, action.to, action.fromList)
            return {
                ...state,
                colunas: produce(state.colunas, (draft: any)  => {
                    const dragged = draft[action.fromList].cards[action.from];
                    draft[action.fromList].cards.splice(action.from, 1)
                    draft[action.fromList].cards.splice(action.to, 0, dragged)
                }) as any
            }
        }
        default: return state
    }
}

export default reducer