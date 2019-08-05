export interface IState {
    count: number
    isAuth: boolean
}

export type Actions = 
    | { type: 'INCREMENT'}
    | { type: 'DECREMENT'}
    | { type: 'SET_VALUE', payload: number}

export const initialState: IState = {
    count: 0,
    isAuth: false
}

const reducer = (state: IState = initialState, action: Actions): IState => {
    switch(action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'SET_VALUE': {
            return {
                ...state,
                count: action.payload
            }
        }
    }
}

export default reducer