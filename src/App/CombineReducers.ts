import { combineReducers } from 'redux'
import { loginReducer } from '../Login/redux/reducer'
import { LoginState } from '../Login/redux/types';
import { HeaderState } from '../Header/redux/types'
import { headerReducer } from '../Header/redux/reducer'
import { CriarContaState } from '../Modais/CriarConta/redux/types'
import { criarContaReducer } from '../Modais/CriarConta/redux/reducer'
import { SideMenuState } from '../SideMenu/redux/types'
import { sideMenuReducer } from '../SideMenu/redux/reducer' 

export interface IAppState {
    login: LoginState
    header: HeaderState
    criarContaModal: CriarContaState
    sideMenu: SideMenuState
}

export const AppState = combineReducers({
    login: loginReducer,
    header: headerReducer,
    criarContaModal: criarContaReducer,
    sideMenu: sideMenuReducer
})
