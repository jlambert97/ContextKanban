import { combineReducers } from 'redux'
import { loginReducer } from './Login/redux/reducer'
import { LoginState } from './Login/redux/types';

export interface IAppState {
    login: LoginState
}

export const AppState = combineReducers({
    login: loginReducer
})
