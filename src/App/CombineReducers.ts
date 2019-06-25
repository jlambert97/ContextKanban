import { combineReducers } from 'redux'
import { loginReducer } from '../Login/redux/reducer'
import { LoginState } from '../Login/redux/types';
import { HeaderState } from '../Header/redux/types'
import { headerReducer } from '../Header/redux/reducer'

export interface IAppState {
    login: LoginState
    header: HeaderState
}

export const AppState = combineReducers({
    login: loginReducer,
    header: headerReducer
})
