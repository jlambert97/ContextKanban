import {
    SIDEMENU_SHOW,
    SideMenuActionTypes,
    SideMenuState
} from './types'

const initialState: SideMenuState = {
    sideMenuShow: true
}

export function sideMenuReducer(
    state = initialState,
    action: SideMenuActionTypes
): SideMenuState {
    switch (action.type) {
        case SIDEMENU_SHOW:{
            return {
                ...state,
                sideMenuShow: action.sideMenuValue
            }
        }
        default:
            return state
    }
}