import { cards } from './apifake'
import produce from 'immer'
export interface IState {
    colunas: any
    isAuth: boolean
}
type IColuna = {
    title: string
    cards: [ICard]
}

type ICard = {
    id: number
    title: string
    content: string
}

export type Actions = 
    | { type: 'MOVE_CARD', from: number, to: number, fromList: number}

export const initialState: IState = {
    colunas: () => cards(),
    isAuth: false
}

const reducer = (state: IState = initialState, action: Actions): IState => {
    switch(action.type) {
        case 'MOVE_CARD': {
            return {
                ...state,
                colunas: produce(cards, draft => {
                    const dragged = [action.fromList].cards[action.to];
                    draft[action.fromList].cards.splice(action.from, 1)
                    draft[action.fromList].cards.splice(action.to, 0, dragged)
                }) as any
            }
        }
        default: return state
    }
}

export default reducer